import { useRef } from 'react';
import './CreatePlayer.css';

export default function CreatePlayer(props) {
  const nameInput = useRef();
  const hitPointsInput = useRef();
  const xInput = useRef();
  const yInput = useRef();

  function handleOnSubmit(e) {
    e.preventDefault();
    props.onSubmit({
      id: Date.now(),
      name: nameInput.current.value,
      hitPoints: hitPointsInput.current.value,
      x: xInput.current.value,
      y: yInput.current.value,
    });
  }

  return (
    <form onSubmit={handleOnSubmit}>
      <label>
        Name:
        <input type="text" ref={nameInput} minLength={3} maxLength={6} defaultValue="Thomas" required />
      </label>
      <label>
        Hit points:
        <input type="range" min={3} max={18} step={1} defaultValue={6} ref={hitPointsInput} />
      </label>
      <label>
        Location:
        <input type="number" min={100} max={1000} defaultValue={200} ref={xInput} />
        <input type="number" min={100} max={1000} defaultValue={300} ref={yInput} />
      </label>
      <input type="submit" value="Create player" />
    </form>
  );
}
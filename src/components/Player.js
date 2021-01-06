import './Player.css';

export default function Player(props) {
  return (
    <ul style={{
        top: `${props.y}px`,
        left: `${props.x}px`,
      }}>
      <li><strong>{props.name}</strong></li>
      <li>{props.hitPoints} HP</li>
      <li>{props.x}, {props.y}</li>
    </ul>
  );
}
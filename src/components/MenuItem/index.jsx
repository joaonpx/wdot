import "./style.css";

export function MenuItem(props) {
  return (
    <li className="menu-item">
      <a href={props.href}>{props.name}</a>
    </li>
  );
}

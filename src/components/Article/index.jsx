import "./style.css";

export function Article(props) {
  return (
    <article>
      <a className="article-title" href="#">
        {props.title}
      </a>
      <p className="article-description">{props.description}</p>
      <div className="divider"></div>
    </article>
  );
}

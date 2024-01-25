import "./style.css";

export function Section(props) {
  return (
    <section>
      <img className="section-image" src={props.img} alt="Section Image" />
      <div className="section-wrapper">
        <span className="section-number">{props.number}</span>
        <h4 className="section-title">{props.title}</h4>
        <p className="section-description">{props.description}</p>
      </div>
    </section>
  );
}

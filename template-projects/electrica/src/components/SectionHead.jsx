import Reveal from "./Reveal.jsx";

export default function SectionHead({ eyebrow, title, text, light = false }) {
  return (
    <Reveal className={`section-head ${light ? "on-dark" : ""}`}>
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </Reveal>
  );
}

import { primaryStack } from "../data/skills";

export default function StackStrip() {
  return (
    <div className="stack-strip" aria-label="Tecnologías principales">
      <span>Mi stack</span>
      {primaryStack.map((technology) => <span key={technology}>{technology}</span>)}
    </div>
  );
}

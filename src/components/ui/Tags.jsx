export default function Tags({ items }) {
  return (
    <div className="tags">
      {items.map((tag) => (
        <span key={tag} className="tag">
          {tag}
        </span>
      ))}
    </div>
  );
}

export function ButtonNavigation({ icon, text, onClick }) {
  return (
    <button type="button" onClick={onClick}>
      {icon && <img src={icon} alt={text} />}
      <p>{text}</p>
    </button>
  );
}
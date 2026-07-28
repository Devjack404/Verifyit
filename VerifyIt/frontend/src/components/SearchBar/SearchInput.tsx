export default function SearchInput({ value, onChange }) {
  return (
    <input
      type="text"
      value={value}
      placeholder="https://example.com"
      onChange={(e) => onChange(e.target.value)}
      className="flex-1 outline-none"
    />
  );
}
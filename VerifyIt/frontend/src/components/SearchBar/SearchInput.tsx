interface SearchInputProps {
  value : string;
  onChange : (value : string) => void;
}

export default function SearchInput({ value, onChange, }: SearchInputProps) {
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
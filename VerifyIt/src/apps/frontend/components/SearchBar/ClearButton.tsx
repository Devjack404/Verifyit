type ClearButtonProps = (
    onClick: () => void;
);

export default function ClearButton ({onClick}: ClearButtonProps) {
    return (
        <button onClick={onClick}>
            Clear
        </button>
    );
}
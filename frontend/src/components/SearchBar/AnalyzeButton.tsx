import SearchInput from "./SearchInput";

export default function AnalyzeButton (){
    const handleClick = () => {
        console.log(SearchInput)
    }

    return (
        <button 
            className="bg-blue-800 py-3 px-8 rounded-lg text-white"
            onClick={handleClick}
        >
            Analyze
        </button>
    );
}


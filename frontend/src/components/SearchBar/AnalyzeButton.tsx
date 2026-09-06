type analyzeButtonProps {
    url : string
}

export default function AnalyzeButton ({url } : analyzeButtonProps){
    return (
        <button 
            className="bg-blue-800 py-3 px-8 rounded-lg text-white"
        >
            Analyze
        </button>
    );
}


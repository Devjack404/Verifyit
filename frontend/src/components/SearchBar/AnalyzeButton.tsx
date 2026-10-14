import { useNavigate } from "react-router-dom";

type analyzeButtonProps = {
  url: string;
};

export default function AnalyzeButton ({url } : analyzeButtonProps) {
    const navigate = useNavigate ();

    const handleAnalyze = () => {
        navigate("/result", { state: {url} });
    }

    return (
        <button
            onClick={handleAnalyze} 
            className="bg-blue-800 py-3 px-8 rounded-lg text-white"
        >
            Analyze
        </button>
    );
}


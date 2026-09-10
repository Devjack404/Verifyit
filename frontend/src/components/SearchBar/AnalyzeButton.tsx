type analyzeButtonProps = {
    url : string
}

export default function AnalyzeButton ({url } : analyzeButtonProps){
    const handleAnalyze = async () => {
        console.log("URL", url);
        
        
        const response = await fetch ("http://localhost:3000/api/analyze", {
            method : "POST",
            headers : {
                "Content-type" : "application/json",
            },
            body : JSON.stringify({
                url : url,
            }),
        });

        const dataService  = await response.json();

        console.log(dataService);
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


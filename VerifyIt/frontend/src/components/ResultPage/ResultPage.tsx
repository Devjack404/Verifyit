import AnalysisSummarryContainer from "./AnalysisSummaryContainer";
import AdviceContainer from "./AdviceContainer";
import AnalysisIndicatorsContainer from "./AnalysisIndicatorsContainer";

export default function ResultPage (){
    return (
        <div className="w-full max-w-7xl">
            {/* Analysis Summary Container */}
            <div className=" flex gap-8 pt-10">

                {/* left container  */}
                <div className="flex">
                    <AnalysisSummarryContainer />
                </div>

                {/* Right Container */}
                <div className="w-96">
                    <AdviceContainer />
                </div>

            </div>

            {/* Analysis Indicator Container */}

            <h2 className="font-bold mt-20 text-2xl">Analysis Indicator</h2>
            <div className="text-left">
                <AnalysisIndicatorsContainer />
            </div>        
        </div>
    );
}
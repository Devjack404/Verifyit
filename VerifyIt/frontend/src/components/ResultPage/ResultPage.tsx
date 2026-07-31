import AnalysisSummarryContainer from "./AnalysisSummaryContainer";
import AdviceContainer from "./AdviceContainer";
import AnalysisIndicatorsContainer from "./AnalysisIndicatorsContainer";

export default function ResultPage (){
    return (
        <>
            <div className="mx-auto flex max-w-7xl gap-8 px-6 pt-10">

                {/* left container  */}
                <div className="flex">
                    <AnalysisSummarryContainer />
                </div>

                {/* Right Container */}
                <div className="w-96">
                    <AdviceContainer />
                </div>

            </div>

            <div>
                <AnalysisIndicatorsContainer />
            </div>        
        </>
    );
}
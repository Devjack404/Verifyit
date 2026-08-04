import AnalysisSummarryContainer from "./AnalysisSummaryContainer";
import AdviceContainer from "./AdviceContainer";
import AnalysisIndicatorsContainer from "./AnalysisIndicatorsContainer";
import UrlChecker from "./UrlChecker";
import AboutSecurityContainer from "./AboutSecurityContainer";

export default function ResultPage (){
    return (
        <div className="w-full max-w-7xl">
            {/* Analysis Summary Container */}
            <div className="w-full flex pt-10">

                {/* left container  */}
                <div className="flex-1">
                    <AnalysisSummarryContainer />
                </div>

                {/* Right Container */}
                <div className="w-96 shrink-0">
                    <AdviceContainer />
                </div>

            </div>

            {/* Analysis Indicator Container */}

            <h2 className="font-bold mt-15 text-2xl">Analysis Indicator</h2>
            <div className="text-left">
                <AnalysisIndicatorsContainer />
            </div>

            <div>
                <UrlChecker /> 
            </div>
            
            <h2 className="mt-20 font-bold mt-15 text-2xl">Learn More About Security</h2>
            <div className="mt-10">
                <AboutSecurityContainer />     
            </div>        
        </div>
    );
}
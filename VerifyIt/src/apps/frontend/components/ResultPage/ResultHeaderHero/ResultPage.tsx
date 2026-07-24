import DomainAnalysisCon from "./LeftDomainInfo.tsx/DomainAnalysisContainer";
import AnalysisSummarryContainer from "./LeftDomainInfo.tsx/AnalysisSummaryContainer";

export default function ResultPage (){
    return (
        <section className="mx-auto flex max-w-7xl gap-8 px-6 pt-20">

            {/* left container  */}
            <div className="">
                <DomainAnalysisCon />
                <AnalysisSummarryContainer />
            </div>

            {/* Right Container */}
            <div>
                
            </div>
        </section>
    );
}
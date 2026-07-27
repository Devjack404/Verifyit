import DomainAnalysisCon from "./LeftDomainConatiner/AnalysisSummaryContainer/DomainCard";
import AnalysisSummarryContainer from "./LeftDomainConatiner/AnalysisSummaryContainer";
import AdviceContainer from "./RightAdvice.tsx/AdviceContainer";

export default function ResultPage (){
    return (
        <section className="mx-auto flex max-w-7xl gap-8 px-6 pt-20">

            {/* left container  */}
            <div className="flex">
                <AnalysisSummarryContainer />
            </div>

            {/* Right Container */}
            <div className="w-96">
                <AdviceContainer />
            </div>
        </section>
    );
}
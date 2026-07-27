import DomainCard from "./AnalysisSummaryContainer/DomainCard"
import TrustScoreCard from "./AnalysisSummaryContainer/TrustScoreCard"
import AnalysisSummarryCard from "./AnalysisSummaryContainer/AnalysisSummaryCard"

export default function AnalysisSummarryContainer (){
    return (
        <section className="bg-gray-50 p-10  rounded-2xl ">
            <DomainCard />
            <div className="flex gap-15 mt-10 items-start">
                <TrustScoreCard />
                <AnalysisSummarryCard />
            </div>
        </section>
   )
}
import DomainCard from "./AnalysisSummaryContainer/DomainCard"
import TrustScoreCard from "./AnalysisSummaryContainer/TrustScoreCard"

export default function AnalysisSummarryContainer (){
    return (
        <section className="bg-gray-50">
            <DomainCard />
            <div className="flex">
                <TrustScoreCard />
            </div>
        </section>
   )
}
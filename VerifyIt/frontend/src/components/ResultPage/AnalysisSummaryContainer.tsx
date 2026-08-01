import DomainCard from "./DomainCard"
import TrustScoreCard from "./TrustScoreCard"
import AnalysisSummarryCard from "./AnalysisSummaryCard"

export default function AnalysisSummarryContainer (){
    return (
        <section className="bg-gray-50 p-10 rounded-2xl ">
            <DomainCard />
            <div className="flex gap-15 mt-10">
                <TrustScoreCard />
                <AnalysisSummarryCard />
            </div>
        </section>
   )
}
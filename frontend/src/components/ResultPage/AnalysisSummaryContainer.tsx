import DomainCard from "./DomainCard"
import TrustScoreCard from "./TrustScoreCard"
import AnalysisSummarryCard from "./AnalysisSummaryCard"

export default function AnalysisSummarryContainer (){
    return (
        <div className="w-full bg-gray-50 p-10 rounded-2xl ">
            <DomainCard />

            <div className="flex items-start gap-15 mt-10">
                <TrustScoreCard />

                <div className="flex-1">
                    <AnalysisSummarryCard />
                </div>
            </div>
        </div>
    )
}
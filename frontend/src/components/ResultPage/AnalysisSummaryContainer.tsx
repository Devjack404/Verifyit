import DomainCard from "./DomainCard"
import TrustScoreCard from "./TrustScoreCard"
import AnalysisSummarryCard from "./AnalysisSummaryCard"

type AnalysisSummaryProps = {
    url : string;
}

export default function AnalysisSummarryContainer ({
    url, 
    }: AnalysisSummaryProps){
    return (
        <div className="w-full bg-gray-50 p-10 rounded-2xl ">
            <DomainCard url={url}/>

            <div className="flex items-start gap-15 mt-10">
                <TrustScoreCard />

                <div className="flex-1">
                    <AnalysisSummarryCard />
                </div>
            </div>
        </div>
    )
}
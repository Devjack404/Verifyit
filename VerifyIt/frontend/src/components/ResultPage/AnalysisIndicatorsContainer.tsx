import PositiveFactorsCard from "./AnalysisIndicatorsCard";

export default function AnalysisIndicatorsContainer () {
    return (
        <div className="flex w-full mb-30 mt-20 gap-8">
            <PositiveFactorsCard />
            <PositiveFactorsCard />
        </div>
    );
}
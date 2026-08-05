import PositiveFactorsCard from "./PositiveFactorsCard";
import AreaAwernessCard from "./AreaAwernessCard";

export default function AnalysisIndicatorsContainer () {
    return (
    <div className="flex w-full mb-20 mt-5 gap-8">
        <div className="flex-1">
            <PositiveFactorsCard />
        </div>

        <div className="flex-1">
            <AreaAwernessCard />
        </div>
    </div>
    );
}
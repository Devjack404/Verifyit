import PositiveFactorsCard from "./PositivefactorsCard";
import AreaAwernessCard from "./AreaAwernessCard";

export default function AnalysisIndicatorsContainer () {
    return (
        <div className="flex w-full mb-30 mt-20 gap-8">
            <PositiveFactorsCard />
            <AreaAwernessCard />
        </div>
    );
}
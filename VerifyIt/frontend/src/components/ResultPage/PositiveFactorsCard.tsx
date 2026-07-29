import PositiveFactorsSubCard from "./PositiveFactorsSubCard";

export default function PositiveFactorsCard() {
    return (
        <div className="flex flex-col bg-white p-5 gap-5 rounded-2xl">
            <p className="font-bold text-green-400">
                Positive Factors
            </p>
            <PositiveFactorsSubCard />
            <PositiveFactorsSubCard />
            <PositiveFactorsSubCard />
        </div>
    );
}
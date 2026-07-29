import PositiveFactorsSubCard from "./PositiveFactorsSubCard";

export default function PositiveFactorsCard() {
    return (
        <div className="flex flex-col bg-white p-5">
            <PositiveFactorsSubCard />
            <PositiveFactorsSubCard />
            <PositiveFactorsSubCard />
        </div>
    );
}
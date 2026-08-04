import AreaAwernessSubCard from "./AreaAwernessSubCard";

export default function AreaAwernessCard() {
    return (
        <div className="flex flex-col shadow-md bg-white p-5 gap-5 rounded-2xl">
            <p className="font-bold text-yellow-400">
                Area for Awerness
            </p>
            <AreaAwernessSubCard />
            <AreaAwernessSubCard />
            <AreaAwernessSubCard />
        </div>
    );
}
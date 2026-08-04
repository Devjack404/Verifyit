import SearchBar from "../SearchBar/SearchBar";

export default function UrlChecker (){
    return (
        <div className="flex w-full items-center bg-gray-200 p-10 rounded-4xl justify-between ">
            <div className="space-y-2">
                <h2 className="font-bold text-2xl">Check Another URL</h2>
                <p className="mt-2 text-gray-600">Analyze another site for instant security insights.</p>
            </div>

            <div className="w-full lg:w-[750px]">
                <SearchBar />
            </div>
        </div>
    );
}
import SearchBar from "../SearchBar/SearchBar";

export default function UrlChecker (){
    return (
        <div className="flex w-full bg-gray-200 p-10 rounded-4xl justify-between ">
            <div>
                <h2 className="font-bold text-2xl">Check Another URL</h2>
                <p>Analyze another site for instant security insights.</p>
            </div>

            <div className="">
                <SearchBar />
            </div>

        
        </div>
    );
}
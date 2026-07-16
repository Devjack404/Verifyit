import SearchInput from "./SearchInput";
import AnalyzeButton from "./AnalyzeButton";
import ClearButton from "./ClearButton";
import SearchIcon from "./SearchIcon";

export default function SearchBar (){
    return (
        <div className="bg-amber-300 text-center flex justify-between p-5">
            <SearchIcon />
            <SearchInput /> 
            <ClearButton />
            <AnalyzeButton />
        </div>
    );
}
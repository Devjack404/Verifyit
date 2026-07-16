import SearchInput from "./SearchInput";
import AnalyzeButton from "./AnalyzeButton";
import ClearButton from "./ClearButton";

export default function SearchBar (){
    return (
        <>
            <SearchInput /> 
            <ClearButton />
            <AnalyzeButton />
        </>
    );
}
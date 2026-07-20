import SearchInput from "./SearchInput";
import AnalyzeButton from "./AnalyzeButton";
import ClearButton from "./ClearButton";
import SearchIcon from "./SearchIcon";
import { useState } from "react";


export default function SearchBar (){
    const [url, setUrl] = useState("");
    return (

        <div className="bg-white gap-7 rounded-2xl text-center flex justify-between p-2">
            <SearchIcon />
            <SearchInput /> 
            <ClearButton onClick={() => setUrl("")} />
            <AnalyzeButton />
        </div>
    );
}
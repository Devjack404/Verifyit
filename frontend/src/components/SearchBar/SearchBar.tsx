import SearchInput from "./SearchInput";
import AnalyzeButton from "./AnalyzeButton";
import ClearButton from "./ClearButton";
import SearchIcon from "./SearchIcon";
import { useState } from "react";


export default function SearchBar (){
    const [url, setUrl] = useState("");
    return (

        <div className="bg-white gap-7 rounded-2xl w-full text-center flex justify-between p-2">
            <SearchIcon />
            <SearchInput 
                value={url}
                onChange={setUrl} 
            /> 
            <ClearButton onClick={() => setUrl("")} />

            <AnalyzeButton onClick={() => console.log(setUrl) }/>
        </div>
    );

}


console.log(SearchBar())
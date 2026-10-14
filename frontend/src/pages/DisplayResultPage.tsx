import ResultPage from "../components/ResultPage/ResultPage";
import { useLocation } from "react-router-dom";

export default function DisplayResultPage (){
    const {state} = useLocation();
    const url = state?.url;


    return (
        <div className="flex flex-1 justify-center px-6">
            <ResultPage />
        </div>
    );
}
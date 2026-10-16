import ResultPage from "../components/ResultPage/ResultPage";
import { useLocation } from "react-router-dom";

export default function DisplayResultPage (){
    const {state} = useLocation();
    const url = state?.url;
    const DateTime= state?.dateTimeAnalyze;


    return (
        <div className="flex flex-1 justify-center px-6">
            <ResultPage url={url} DateTime={DateTime} />
        </div>
    );
}
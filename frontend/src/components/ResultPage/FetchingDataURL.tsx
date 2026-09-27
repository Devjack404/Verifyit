import { fetchingDataBE } from "../../api/analyzeApi";
// import { useQuery } from "@tanstack/react-query";

export function fetchingDataUrl (data : string) {
    return fetchingDataBE(data)
}
// import { promises } from "node:dns";

interface UrlProps {
    status  : "Error" | "Warning" | "Aman";
    message : string;
    protocol : string;
}

export function checkProtocol(urlText : string): UrlProps { 
    try {
        const url = new URL(urlText);

        if (url.protocol === "http:") {
           return {
            status : "Warning",
            message : "URL tidak menggunakan HTTPS",
            protocol : url.protocol,
           }
        } 
        

        if (url.protocol === "https:") {
            return {
                status : "Aman",
                message : "URL menggunakan HTTPS",
                protocol : url.protocol,
            }
        } 

        return{
            status :"Warning",
            message : "URL tidak umum",
            protocol : url.protocol
        }
    } 
    
    catch {
        return{
            status : "Error",
            message : "URL tidak valid",
            protocol : "Unknown"
        };
    }
}

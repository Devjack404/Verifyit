import net from 'node:net';

interface CheckTypesProps {
    message : string;
    hostname : string;
}

export function checkUsesIP(urlText : string): CheckTypesProps{
    try {
        const urlObject = new URL(urlText);
        const domain = urlObject.hostname;
        const ipAddress = domain.replace(/^\[|\]$/g, "") //implement Regex Ekspresion

        const ipVersion = net.isIP(ipAddress)
        
        if(ipVersion === 4) {
            return {
                message : "URL ini menggunakan IP4", 
                hostname : domain
            }
        }
        if(ipVersion === 6) {
            return {
                message : "URL ini menggunakan IP6", 
                hostname : domain
            }
        }
        
        return {
            message : "Aman : URL menggunakan domain biasa",
            hostname : domain
        }
    }

    catch {
        return {
            message : `Error : Format URL'${urlText}' tidak valid`,
            hostname : "Unknown"
        }
    }

}



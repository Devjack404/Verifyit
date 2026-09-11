import { checkProtocol } from "../rules/rulesCheckProtocol"
import { checkUsesIP } from "../rules/rulesCheckTypeIP";

export function analyzeUrlService (url : string) {
     
    const resultCheckProtocol = checkProtocol(url);

    const resultIp = checkUsesIP(url);

    return {
        resultCheckProtocol,
        resultIp
    }
}
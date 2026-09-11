import { checkProtocol } from "../rules/rulesCheckProtocol"
import { checkUsesIP } from "../rules/rulesCheckTypeIP";

export function analyzeUrlService (url : string) {
     
    const protocolResult = checkProtocol(url);

    const ipResult = checkUsesIP(url);

    return {
        protocolResult,
        ipResult
    }
}
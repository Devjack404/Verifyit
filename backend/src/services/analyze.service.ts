import { checkProtocol } from "../rules/rulesCheckProtocol"
import { checkUsesIP } from "../rules/rulesCheckTypeIP";

export function analyzeUrlService (url: string) {

    const protocolResult = checkProtocol(url);
    console.log(protocolResult)

    const ipResult =  checkUsesIP(url);
    console.log(ipResult)

    return {
        protocolResult,
        ipResult
    };

}
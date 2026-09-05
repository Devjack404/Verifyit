type Severity = "low" | "medium" | "high";

type Envidence = {
    type : string,
    severity : Severity,
    score : number,
    message : string;
}
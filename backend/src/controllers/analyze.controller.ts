import { Router } from "express";
import { analyzeUrlService } from "../services/analyze.service";

export const analyzeUrl = (
    req : Request,
    res : Response
) => {
    const { url } = req.body;

    const result = 

    res.json(result)
}

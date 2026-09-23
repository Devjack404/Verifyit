import type { Request, Response } from "express";
import { analyzeUrlService } from "../services/analyze.service";

export const analyzeUrlController = (req : Request, res : Response) => {

    const { url } = req.body;

    const result  = analyzeUrlService(url);

    res.json (result);
}


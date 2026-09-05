import { Router } from "express";
import { AnalyzeUrl } from "../controllers/analyze.controller";

const routerAnalyze = Router();

routerAnalyze.post("/analyze", AnalyzeUrl);

export default routerAnalyze;
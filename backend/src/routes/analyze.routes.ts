import { Router } from "express";
import { analyzeUrlController } from "../controllers/analyze.controller";

const routerAnalyze = Router();

routerAnalyze.post("/analyze", analyzeUrlController);

export default routerAnalyze;
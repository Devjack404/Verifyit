import { Router } from "express";
import type { Request, Response } from "express";

const routerAnalyze = Router();

routerAnalyze.post("/analyze", (req, res) => {
    const url = req.body.url;
    console.log(url)

    res.json({
        url : url
    })
});

export default routerAnalyze;
import type { Request, Response } from "express";


export const AnalyzeUrl = (req : Request, res : Response) => {
    const url = req.body
    console.log(url)

    res.json ({
        url : url
    })
}
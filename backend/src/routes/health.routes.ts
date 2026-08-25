import { Router } from "express";

const routerHealth = Router();

routerHealth.get("/health", (req, res) => {
    res.json ({
        status : "OK",
        message : "VerifyIt api is healthy",
    });
});

export default routerHealth;

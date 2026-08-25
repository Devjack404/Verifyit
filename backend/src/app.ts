import express, {type Express, type Request, type Response} from 'express';
import cors from "cors";
import routerHealth from './routes/health.routes';
import routerAnalyze from './routes/analyze.routes';

const app : Express = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('VerifyIt API is runing');
});

app.use("/api", routerAnalyze);

app.use("/api", routerHealth);

export default app;
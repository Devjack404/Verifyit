import express, {type Express, type Request, type Response} from 'express';
import cors from "cors";

const app : Express = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('VerifyIt API is runing')
});

app.get('/api/health', (req, res) => {
    res.json({
        status : "OK"
    })
});

export default app;
import express, {type Express, type Request, type Response} from 'express';
import cors from "cors";

const app : Express = express();
app.use(cors());
app.use(express.json());

app.get('/', (req: Request, res: Response) => {
    res.send()
});

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000")
});
import express, { Express, Request, Response } from 'express';
import bodyParser from 'body-parser';
import 'reflect-metadata';
import { config } from 'dotenv';
import videoRoutes from './routes/videoRoutes';

config()

const app: Express = express();
const port = process.env.PORT;

app.use(express.json());
app.use(bodyParser.json());

app.get('/', (req: Request, res: Response) => {
  res.send('test page darun');
});

// Routes!!
app.use(`/${process.env.API_PREFIX}/videos`, videoRoutes);

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
export default app;

import express, { Express, Request, Response } from 'express';
import bodyParser from 'body-parser';
import 'reflect-metadata';
import { config } from 'dotenv';
import videoRoutes from './routes/videoRoutes';
import { handleGeneralError } from './middlewares/handleGeneralError.middleware';

config()

const app: Express = express();
const port = process.env.PORT;

app.use(express.json());
app.use(bodyParser.json());

app.get('/', (req: Request, res: Response) => {
  res.send('test page darun');
});

app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// Routes!!
app.use(`/${process.env.API_PREFIX}/`, videoRoutes);

app.listen(port, () => {
  console.log(`⚡️[server]: (${process.env.API_PREFIX}) Server is running at http://localhost:${port}`);
});
export default app;

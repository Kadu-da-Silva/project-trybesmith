import express from 'express';
import productsRouter from './routes/products.router';

const app = express();

app.use(express.json());
// Requisito 01
app.use(productsRouter);

export default app;

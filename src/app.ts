import express from 'express';
import productsRouter from './routes/products.router';
import ordersRouter from './routes/orders.router';
import loginRouter from './routes/login.router';
import authMiddleware from './middlewares/auth.middleware';

const app = express();

app.use(express.json());

app.use(loginRouter);
app.use(productsRouter);
app.use(ordersRouter);
app.use(authMiddleware);

export default app;

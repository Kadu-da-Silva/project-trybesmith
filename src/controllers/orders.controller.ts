import { Request, Response } from 'express';
import ordersService from '../services/orders.service';

async function findAll(_req: Request, res: Response) {
  try {
    const serviceResponse = await ordersService.findAll();
    res.status(200).json(serviceResponse.data);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

export default {
  findAll,
};
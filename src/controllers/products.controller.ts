import { Request, Response } from 'express';
import productsService from '../services/products.service';
import mapStatusHTTP from '../utils/mapStatusHTTP';

async function create(req: Request, res: Response) {
  try {
    const { name, price, orderId } = req.body;
    const serviceResponse = await productsService.create({ name, price, orderId });
    if (serviceResponse.status !== 'SUCCESSFUL') {
      return res.status(mapStatusHTTP(serviceResponse.status)).json(serviceResponse.data);
    }
    res.status(201).json(serviceResponse.data);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

async function findAll(req: Request, res: Response) {
  try {
    const serviceResponse = await productsService.findAll();
    res.status(200).json(serviceResponse.data);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

export default {
  create,
  findAll,
};
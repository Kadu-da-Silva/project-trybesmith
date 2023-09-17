import { Request, Response } from 'express';
import loginService from '../services/login.service';
import mapStatusHTTP from '../utils/mapStatusHTTP';

async function login(req: Request, res: Response) {
  const { username, password } = req.body;
  const serviceResponse = await loginService.verifyLogin({ username, password });

  if (serviceResponse.status !== 'SUCCESSFUL') {
    return res.status(mapStatusHTTP(serviceResponse.status)).json(serviceResponse.data);
  }
  res.status(200).json(serviceResponse.data);
}

export default {
  login,
};
import bcrypt from 'bcryptjs';
import UserModel from '../database/models/user.model';
import { Login } from '../types/Login';
import { ServiceResponse } from '../types/ServiceResponse';
import { Token } from '../types/Token';
import jwtUtil from '../utils/jwt.util';

const INVALID_DATA = 'INVALID_DATA';
const UNAUTHORIZED = 'UNAUTHORIZED';

async function verifyLogin(login: Login): Promise<ServiceResponse<Token>> {
  if (!login.username || !login.password) {
    return { status: INVALID_DATA, data: { message: '"username" and "password" are required' } };
  }
  
  const foundUser = await UserModel.findOne({ where: { username: login.username } });
  if (!foundUser) {
    return { status: UNAUTHORIZED, data: { message: 'Username or password invalid' } };
  }
  const validatePassword = await bcrypt.compare(login.password, foundUser.dataValues.password);
  if (!validatePassword) {
    return { status: UNAUTHORIZED, data: { message: 'Username or password invalid' } };
  }

  const { id, username } = foundUser.dataValues;
  const token = jwtUtil.sign({ id, username });

  return { status: 'SUCCESSFUL', data: { token } };
}

export default {
  verifyLogin,
};
import ProductModel, { ProductInputtableTypes } from '../database/models/product.model';
import { Product } from '../types/Product';
import { ServiceResponse } from '../types/ServiceResponse';
import validateParams from './validation/validateParams';

async function create(
  product: ProductInputtableTypes,
): Promise<ServiceResponse<Product>> {
  const error = validateParams(product);
  if (error) {
    return { status: error.status, data: error.data };
  }
  const newProduct = await ProductModel.create(product);
  return { status: 'SUCCESSFUL', data: newProduct.dataValues };
}

async function findAll(): Promise<ServiceResponse<Product[]>> {
  const products = await ProductModel.findAll();
  return { status: 'SUCCESSFUL', data: products.map((p) => p.dataValues) };
}

export default {
  create,
  findAll,
};
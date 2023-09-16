import ProductModel, 
{ ProductInputtableTypes } from '../database/models/product.model';
import { Product } from '../types/Product';
import { ServiceResponse } from '../types/ServiceResponse';

function validateParams({ name, price, orderId }: ProductInputtableTypes): string | null {
  if (!name) return 'Name is required';
  if (!price) return 'Price is required';
  if (!orderId) return 'OrderId is required';
  return null;
}

async function create(
  product: ProductInputtableTypes,
): Promise<ServiceResponse<Product>> {
  const error = validateParams(product);
  if (error) {
    return { status: 'INVALID_DATA', data: { message: error } };
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
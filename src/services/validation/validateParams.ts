import { ProductInputtableTypes } from '../../database/models/product.model';
import { ServiceResponseError } from '../../types/ServiceResponse';

const INVALID_DATA = 'INVALID_DATA';
const UNPROCESSABLE = 'UNPROCESSABLE';

export function validateName({ name }: ProductInputtableTypes): ServiceResponseError | null {
  if (!name) {
    return { status: INVALID_DATA, data: { message: '"name" is required' } };
  }
  if (typeof name !== 'string') {
    return { status: UNPROCESSABLE, data: { message: '"name" must be a string' } };
  }
  if (name.length < 3) {
    return { 
      status: UNPROCESSABLE,
      data: { message: '"name" length must be at least 3 characters long' } };
  }

  return null;
}

export function validatePrice({ price }: ProductInputtableTypes): ServiceResponseError | null {
  if (!price) {
    return { status: INVALID_DATA, data: { message: '"price" is required' } };
  }
  if (typeof price !== 'string') {
    return { status: UNPROCESSABLE, data: { message: '"price" must be a string' } };
  }
  if (price.length < 3) {
    return { 
      status: UNPROCESSABLE,
      data: { message: '"price" length must be at least 3 characters long' } };
  }

  return null;
}

export function validateOrder({ orderId }: ProductInputtableTypes): ServiceResponseError | null {
  if (!orderId) {
    return { status: INVALID_DATA, data: { message: '"order" is required' } };
  }
  if (typeof orderId !== 'number') {
    return { status: UNPROCESSABLE, data: { message: '"order" must be a number' } };
  }
  return null;
}

export default function validateParams(
  product: ProductInputtableTypes,
): ServiceResponseError | null {
  const errorName = validateName(product);
  if (errorName) {
    return { status: errorName.status, data: errorName.data };
  }
  const errorPrice = validatePrice(product);
  if (errorPrice) {
    return { status: errorPrice.status, data: errorPrice.data };
  }
  const errorOrder = validateOrder(product);
  if (errorOrder) {
    return { status: errorOrder.status, data: errorOrder.data };
  }
  return null;
}
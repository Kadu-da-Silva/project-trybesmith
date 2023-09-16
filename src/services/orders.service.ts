import OrderModel from '../database/models/order.model';
import ProductModel from '../database/models/product.model';

type Order = Promise<{
  status: string,
  data: object | object[]
}>;

async function findAll(): Promise<Order> {
  const orders = await OrderModel.findAll({
    include: [
      {
        model: ProductModel,
        as: 'productIds',
        attributes: ['id'],
      },
    ],
  });
  const ordersWithProductIds = orders
    .map((order) => order.toJSON())
    .map((order) => ({
      ...order,
      productIds: order.productIds?.map(({ id }) => id),
    }));
  return { status: 'SUCCESSFUL', data: ordersWithProductIds };
}

export default {
  findAll,
};
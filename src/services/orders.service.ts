import OrderModel from '../database/models/order.model';
import ProductModel from '../database/models/product.model';
import { ServiceResponse } from '../types/ServiceResponse';
import { OrderWithProductIds } from '../types/Order';

async function findAll(): Promise<ServiceResponse<OrderWithProductIds[]>> {
  const orders = await OrderModel.findAll({
    include: [
      {
        model: ProductModel,
        as: 'productIds',
        attributes: ['id'],
      },
    ],
  });
  const ordersWithProductIds: OrderWithProductIds[] = orders.map((order) => ({
    id: order.toJSON().id,
    userId: order.toJSON().userId,
    productIds: order.toJSON().productIds?.map(({ id }) => id),
  }));
  return { status: 'SUCCESSFUL', data: ordersWithProductIds };
}

export default {
  findAll,
};
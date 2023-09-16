// import { expect } from 'chai';
// import sinon from 'sinon';
// import OrderModel from '../../../src/database/models/order.model';
// import orderMock from '../../mocks/orderMock'
// import ordersService from '../../../src/services/orders.service';

// describe('OrdersService', function () {
//   beforeEach(function () { sinon.restore(); });

//   it('retorna a lista de ordens com sucesso', async function () {
//     const mockProduct = OrderModel.bulkBuild(orderMock.ordersList)
//     sinon.stub(OrderModel, 'findAll').resolves(mockProduct);

//     const serviceResponse = await ordersService.findAll()

//     expect(serviceResponse.status).to.eq('SUCCESSFUL')
//     expect(serviceResponse.data).to.deep.eq(orderMock.ordersList)
//   })
// });

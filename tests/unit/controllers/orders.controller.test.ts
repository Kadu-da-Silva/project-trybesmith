import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import { Request, Response } from 'express';
import ordersService from '../../../src/services/orders.service'
import ordersController from '../../../src/controllers/orders.controller'
import orderMock from '../../mocks/orderMock'

chai.use(sinonChai);

describe('OrdersController', function () {
  const req = {} as Request;
  const res = {} as Response;
  const SUCCESSFUL = 200;
  const SERVER_ERROR = 500;

  beforeEach(function () {
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns(res);
    sinon.restore();
  });

  it('retorna lista de orders com sucesso', async function () {
    sinon.stub(ordersService, 'findAll').resolves({
      status: 'SUCCESSFUL',
      data: orderMock.ordersList,
    });

    await ordersController.findAll(req, res);

    expect(res.status).to.have.been.calledWith(SUCCESSFUL)
    expect(res.json).to.have.been.calledWith(orderMock.ordersList)
  })
  it('retorna erro do servidor na rota get', async function () {
    sinon.stub(ordersService, 'findAll').throws();
    await ordersController.findAll(req, res);

    expect(res.status).to.have.been.calledWith(SERVER_ERROR)
    expect(res.json).to.have.been.calledWith({ error: 'Internal Server Error' })
  })
});

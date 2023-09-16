import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import { Request, Response } from 'express';
import productMock from '../../mocks/productMock';
import { ServiceResponse } from '../../../src/types/ServiceResponse';
import { Product } from '../../../src/types/Product';
import productsService from '../../../src/services/products.service';
import productsController from '../../../src/controllers/products.controller'

chai.use(sinonChai);

describe('ProductsController', function () {
  const req = {} as Request;
  const res = {} as Response;
  const INVALID_DATA = 400;
  const SUCCESSFUL = 200;
  const SERVER_ERROR = 500;

  beforeEach(function () {
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns(res);
    sinon.restore();
  });

  it('ao não receber um NAME, retorne um erro', async function () {
    req.body = productMock.noNameProductBody;

    const serviceResponse: ServiceResponse<Product> = {
      status: 'INVALID_DATA',
      data: { message: 'Name is required'}
    }

    sinon.stub(productsService, 'create').resolves(serviceResponse)
    await productsController.create(req, res);

    expect(res.status).to.have.been.calledWith(INVALID_DATA)
    expect(res.json).to.have.been.calledWith({ message: 'Name is required'})
  })
  it('ao não receber um PRICE, retorne um erro', async function () {
    req.body = productMock.noPriceProductBody;

    const serviceResponse: ServiceResponse<Product> = {
      status: 'INVALID_DATA',
      data: { message: 'Price is required'}
    }

    sinon.stub(productsService, 'create').resolves(serviceResponse)
    await productsController.create(req, res);

    expect(res.status).to.have.been.calledWith(INVALID_DATA)
    expect(res.json).to.have.been.calledWith({ message: 'Price is required'})
  })
  it('ao não receber um ORDER_ID, retorne um erro', async function () {
    req.body = productMock.noOderIdProductBody;

    const serviceResponse: ServiceResponse<Product> = {
      status: 'INVALID_DATA',
      data: { message: 'OrderId is required'}
    }

    sinon.stub(productsService, 'create').resolves(serviceResponse)
    await productsController.create(req, res);

    expect(res.status).to.have.been.calledWith(INVALID_DATA)
    expect(res.json).to.have.been.calledWith({ message: 'OrderId is required'})
  })
  it('retorna erro do servidor na rota post', async function () {
    req.body = productMock.validProductBody;
    
    sinon.stub(productsService, 'create').throws();
    await productsController.create(req, res);

    expect(res.status).to.have.been.calledWith(SERVER_ERROR)
    expect(res.json).to.have.been.calledWith({ error: 'Internal Server Error' })
  })
  it('retorna erro do servidor na rota get', async function () {
    sinon.stub(productsService, 'findAll').throws();
    await productsController.findAll(req, res);

    expect(res.status).to.have.been.calledWith(SERVER_ERROR)
    expect(res.json).to.have.been.calledWith({ error: 'Internal Server Error' })
  })
  it('retorna lista de produtos com sucesso', async function () {
    sinon.stub(productsService, 'findAll').resolves({
      status: 'SUCCESSFUL',
      data: productMock.productsList,
    });

    await productsController.findAll(req, res);

    expect(res.status).to.have.been.calledWith(SUCCESSFUL)
    expect(res.json).to.have.been.calledWith(productMock.productsList)
  })
});

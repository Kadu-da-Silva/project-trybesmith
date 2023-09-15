import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import { Request, Response } from 'express';
import productMock from '../../mocks/productMock';
import { ServiceResponse } from '../../../src/types/ServiceResponse';
import { Product } from '../../../src/types/Product';
import productsService from '../../../src/services/products.service';

chai.use(sinonChai);

describe('ProductsController', function () {
  const req = {} as Request;
  const res = {} as Response;

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

    expect(serviceResponse.status).to.eq('INVALID_DATA');
    expect(serviceResponse.data).to.deep.eq({ message: 'Name is required'})
  })
  it('ao não receber um PRICE, retorne um erro', async function () {
    req.body = productMock.noPriceProductBody;

    const serviceResponse: ServiceResponse<Product> = {
      status: 'INVALID_DATA',
      data: { message: 'Price is required'}
    }

    sinon.stub(productsService, 'create').resolves(serviceResponse)

    expect(serviceResponse.status).to.eq('INVALID_DATA');
    expect(serviceResponse.data).to.deep.eq({ message: 'Price is required'})
  })
  it('ao não receber um ORDER_ID, retorne um erro', async function () {
    req.body = productMock.noOderIdProductBody;

    const serviceResponse: ServiceResponse<Product> = {
      status: 'INVALID_DATA',
      data: { message: 'OrderId is required'}
    }

    sinon.stub(productsService, 'create').resolves(serviceResponse)

    expect(serviceResponse.status).to.eq('INVALID_DATA');
    expect(serviceResponse.data).to.deep.eq({ message: 'OrderId is required'})
  })
});

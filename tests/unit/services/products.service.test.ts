import { expect } from 'chai';
import sinon from 'sinon';
import productMock from '../../mocks/productMock'
import productService from '../../../src/services/products.service'

describe('ProductsService', function () {
  beforeEach(function () { sinon.restore(); });

  it('ao não receber um NAME, retorne um erro', async function () {
    const parameters = productMock.noNameProductBody;

    const serviceResponse = await productService.create(parameters)

    expect(serviceResponse.status).to.eq('INVALID_DATA');
    expect(serviceResponse.data).to.deep.eq({ message: 'Name is required'})
  })
  it('ao não receber um PRICE, retorne um erro', async function () {
    const parameters = productMock.noPriceProductBody;

    const serviceResponse = await productService.create(parameters)

    expect(serviceResponse.status).to.eq('INVALID_DATA');
    expect(serviceResponse.data).to.deep.eq({ message: 'Price is required'})
  })
  it('ao não receber um ORDER_ID, retorne um erro', async function () {
    const parameters = productMock.noOderIdProductBody;

    const serviceResponse = await productService.create(parameters)

    expect(serviceResponse.status).to.eq('INVALID_DATA');
    expect(serviceResponse.data).to.deep.eq({ message: 'OrderId is required'})
  })
});

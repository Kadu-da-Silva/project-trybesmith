import { expect } from 'chai';
import sinon from 'sinon';
import productMock from '../../mocks/productMock'
import productService from '../../../src/services/products.service'
import ProductModel from '../../../src/database/models/product.model';

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
  it('ao receber todos os parâmetros corretamente, retorna produto criado com sucesso', async function () {
    const mockProduct = ProductModel.build(productMock.newProductDB)
    sinon.stub(ProductModel, 'create').resolves(mockProduct);

    const serviceResponse = await productService.create(productMock.validProductBody)

    expect(serviceResponse.status).to.eq('SUCCESSFUL')
    expect(serviceResponse.data).to.deep.eq(productMock.newProductDB)
  })
  it('retorna a lista de produtos com sucesso', async function () {
    const mockProduct = ProductModel.bulkBuild(productMock.productsList)
    sinon.stub(ProductModel, 'findAll').resolves(mockProduct);

    const serviceResponse = await productService.findAll()

    expect(serviceResponse.status).to.eq('SUCCESSFUL')
    expect(serviceResponse.data).to.deep.eq(productMock.productsList)
  })
});

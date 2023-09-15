import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import app from '../../../src/app'
import productMock from '../../mocks/productMock';
import ProductModel from '../../../src/database/models/product.model';

chai.use(chaiHttp);

describe('POST /products', function () { 
  beforeEach(function () { sinon.restore(); });
  it('ao receber todos os parâmetros, retorne o novo produto com sucesso', async function () {
    const mockCreateReturn = ProductModel.build(productMock.newProductDB)
    sinon.stub(ProductModel, 'create').resolves(mockCreateReturn)

    const httpResponse = await chai
      .request(app)
      .post('/products')
      .send(productMock.validProductBody)

    expect(httpResponse.status).to.eq(201);
    expect(httpResponse.body).to.deep.eq(productMock.newProductDB)
  })
});

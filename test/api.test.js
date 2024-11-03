import request from 'supertest';
import { expect } from 'chai';
import app from '../index.js';

describe('API Tests', () => {
  let testItemId;

  // Teste para obter todos os itens (deve estar vazio no início)
  it('Retorna todos os itens (inicialmente vazio)', async () => {
    const res = await request(app).get('/items');
    expect(res.status).to.equal(200);
    expect(res.body).to.be.an('array').that.is.empty;
  });

  // Teste para criar um novo item
  it('Cria um novo item', async () => {
    const res = await request(app).post('/items').send({ name: 'Test Item' });
    expect(res.status).to.equal(201);
    expect(res.body).to.have.property('id');
    expect(res.body).to.have.property('name', 'Test Item');
    testItemId = res.body.id; 
  });

  // Teste para obter um item por ID
  it('Obtem um item por ID', async () => {
    const res = await request(app).get(`/items/${testItemId}`);
    expect(res.status).to.equal(200);
    expect(res.body).to.have.property('id', testItemId);
    expect(res.body).to.have.property('name', 'Test Item');
  });

  // Teste para atualizar um item por ID
  it('Atualiza item por ID', async () => {
    const res = await request(app)
      .put(`/items/${testItemId}`)
      .send({ name: 'Updated Item' });
    expect(res.status).to.equal(200);
    expect(res.body).to.have.property('id', testItemId);
    expect(res.body).to.have.property('name', 'Updated Item');
  });

  // Teste para deletar um item por ID
  it('Exclui um item por ID', async () => {
    const res = await request(app).delete(`/items/${testItemId}`);
    expect(res.status).to.equal(200);
    expect(res.body).to.have.property('id', testItemId);
  });

  // Teste para verificar que o item excluído não é encontrado
  it('Retorna 404 ao tentar obter um item excluído', async () => {
    const res = await request(app).get(`/items/${testItemId}`);
    expect(res.status).to.equal(404);
    expect(res.body).to.have.property('message', 'Item não encontrado');
  });
});

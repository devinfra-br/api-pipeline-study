import request from 'supertest';
import { expect } from 'chai';
import app from '../index.js';

describe('API Tests', () => {
  let testItemId;

  // Teste para obter todos os itens (deve estar vazio no início)
  it('should get all items (initially empty)', async () => {
    const res = await request(app).get('/items');
    expect(res.status).to.equal(200);
    expect(res.body).to.be.an('array').that.is.empty;
  });

  // Teste para criar um novo item
  it('should create a new item', async () => {
    const res = await request(app).post('/items').send({ name: 'Test Item' });
    expect(res.status).to.equal(201);
    expect(res.body).to.have.property('id');
    expect(res.body).to.have.property('name', 'Test Item');
    testItemId = res.body.id; // Salva o ID do item para os próximos testes
  });

  // Teste para obter um item por ID
  it('should get an item by ID', async () => {
    const res = await request(app).get(`/items/${testItemId}`);
    expect(res.status).to.equal(200);
    expect(res.body).to.have.property('id', testItemId);
    expect(res.body).to.have.property('name', 'Test Item');
  });

  // Teste para atualizar um item por ID
  it('should update an item by ID', async () => {
    const res = await request(app)
      .put(`/items/${testItemId}`)
      .send({ name: 'Updated Item' });
    expect(res.status).to.equal(200);
    expect(res.body).to.have.property('id', testItemId);
    expect(res.body).to.have.property('name', 'Updated Item');
  });

  // Teste para deletar um item por ID
  it('should delete an item by ID', async () => {
    const res = await request(app).delete(`/items/${testItemId}`);
    expect(res.status).to.equal(200);
    expect(res.body).to.have.property('id', testItemId);
  });

  // Teste para verificar que o item excluído não é encontrado
  it('should return 404 when trying to get a deleted item', async () => {
    const res = await request(app).get(`/items/${testItemId}`);
    expect(res.status).to.equal(404);
    expect(res.body).to.have.property('message', 'Item não encontrado');
  });
});

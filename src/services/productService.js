import apiClient from './api';

export default {
  getAllProducts() {
    return apiClient.get('/products/all');
  },
  createProduct(product) {
    return apiClient.post('/products/new', product);
  },
  updateProduct(id, product) {
    return apiClient.put(`/products/${id}`, product);
  },
  deleteProduct(id) {
    return apiClient.delete(`/products/${id}`);
  },
  getProductById(id) {
    return apiClient.get(`/products/${id}`);
  },
};

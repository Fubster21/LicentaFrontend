import apiClient from './api';

export default {
  getAllOrders() {
    return apiClient.get('/orders/all');
  },
  createOrder(order) {
    return apiClient.post('/orders/new', order);
  },
  updateOrder(id, order) {
    return apiClient.put(`/orders/${id}`, order);
  },
  deleteOrder(id) {
    return apiClient.delete(`/orders/${id}`);
  },
  getOrderById(id) {
    return apiClient.get(`/orders/${id}`);
  },
  getOrdersByUserId(userId) {
    return apiClient.get('/orders', { params: { userId } });
  },
};

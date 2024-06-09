import apiClient from './api';

export default {
  getAllUsers() {
    return apiClient.get('/users/all');
  },
  createUser(user) {
    return apiClient.post('/users/new', user);
  },
  updateUser(id, user) {
    return apiClient.put(`/users/${id}`, user);
  },
  deleteUser(id) {
    return apiClient.delete(`/users/${id}`);
  },
  getUserById(id) {
    return apiClient.get(`/users/${id}`);
  },
  searchUsersByUsername(username) {
    return apiClient.get('/users/search', { params: { username } });
  },
};

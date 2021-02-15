import http from "../http-common";

class AdminDataSevice {
  getAll() {
    return http.get("/adminmanagement");
  }

  get(id) {
    return http.get(`/adminmanagement/${id}`);
  }

  create(data) {
    return http.post("/adminmanagement", data);
  }

  update(id, data) {
    return http.put(`/adminmanagement/${id}`, data);
  }

  delete(id) {
    return http.delete(`/adminmanagement/${id}`);
  }

  deleteAll() {
    return http.delete(`/adminmanagement`);
  }

  findByTitle(title) {
    return http.get(`/adminmanagement?title=${title}`);
  }
}

export default new AdminDataSevice();
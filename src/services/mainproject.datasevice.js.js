import http from "../http-common";

class MainprojectDataservice {
  getAll() {
    return http.get("/mainproject");
  }

  get(id) {
    return http.get(`/mainproject/${id}`);
  }

  create(data) {
    return http.post("/mainproject", data);
  }

  update(id, data) {
    return http.put(`/mainproject/${id}`, data);
  }

  delete(id) {
    return http.delete(`/mainproject/${id}`);
  }

  deleteAll() {
    return http.delete(`/mainproject`);
  }

  findByTitle(title) {
    return http.get(`/mainproject?title=${title}`);
  }
}

export default new MainprojectDataservice();
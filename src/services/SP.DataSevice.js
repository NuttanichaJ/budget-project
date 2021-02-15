import http from "../http-common";

class SubProjectDataSevice {
  getAll() {
    return http.get("/subproject");
  }

  get(id) {
    return http.get(`/subproject/${id}`);
  }

  create(data) {
    return http.post("/subproject", data);
  }

  update(id, data) {
    return http.put(`/subproject/${id}`, data);
  }

  delete(id) {
    return http.delete(`/subproject/${id}`);
  }

  deleteAll() {
    return http.delete(`/subproject`);
  }

  findByTitle(title) {
    return http.get(`/subproject?title=${title}`);
  }
}

export default new SubProjectDataSevice();
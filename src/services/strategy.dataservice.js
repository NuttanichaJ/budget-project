import http from "../http-common";

class StrategyDataservice {
  getAll() {
    return http.get("/strategy");
  }

  get(id) {
    return http.get(`/strategy/${id}`);
  }

  create(data) {
    return http.post("/strategy", data);
  }

  update(id, data) {
    return http.put(`/strategy/${id}`, data);
  }

  delete(id) {
    return http.delete(`/strategy/${id}`);
  }

  deleteAll() {
    return http.delete(`/strategy`);
  }

  findByTitle(title) {
    return http.get(`/strategy?title=${title}`);
  }
}

export default new StrategyDataservice();
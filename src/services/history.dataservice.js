import http from "../http-common";

class HistoryDataservice {
  getAll() {
    return http.get("/history");
  }

  get(id) {
    return http.get(`/history/${id}`);
  }

  create(data) {
    return http.post("/history", data);
  }

  update(id, data) {
    return http.put(`/history/${id}`, data);
  }

  delete(id) {
    return http.delete(`/history/${id}`);
  }

  deleteAll() {
    return http.delete(`/history`);
  }

  findByTitle(title) {
    return http.get(`/history?title=${title}`);
  }
}

export default new HistoryDataservice();
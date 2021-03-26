import http from "../http-common";

class StrategicissueDataservice {
  getAll() {
    return http.get("/strategicissue");
  }

  get(id) {
    return http.get(`/strategicissue/${id}`);
  }

  create(data) {
    return http.post("/strategicissue", data);
  }

  update(id, data) {
    return http.put(`/strategicissue/${id}`, data);
  }

  delete(id) {
    return http.delete(`/strategicissue/${id}`);
  }

  deleteAll() {
    return http.delete(`/strategicissue`);
  }

  findByTitle(title) {
    return http.get(`/strategicissue?title=${title}`);
  }
}

export default new StrategicissueDataservice();
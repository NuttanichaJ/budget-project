import http from "../http-common";

class StrategicDataservice {
  getAll() {
    return http.get("/strategic");
  }

  get(id) {
    return http.get(`/strategic/${id}`);
  }

  create(data) {
    return http.post("/strategic", data);
  }

  update(id, data) {
    return http.put(`/strategic/${id}`, data);
  }

  delete(id) {
    return http.delete(`/strategic/${id}`);
  }

  deleteAll() {
    return http.delete(`/strategic`);
  }

  findByTitle(title) {
    return http.get(`/strategic?title=${title}`);
  }
}

export default new StrategicDataservice();
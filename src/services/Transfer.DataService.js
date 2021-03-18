import http from "../http-common";

class TransferDataSevice {
  getAll() {
    return http.get("/transfer");
  }

  get(id) {
    return http.get(`/transfer/${id}`);
  }

  create(data) {
    return http.post("/transfer", data);
  }

  update(id, data) {
    return http.put(`/transfer/${id}`, data);
  }

  delete(id) {
    return http.delete(`/transfer/${id}`);
  }

  deleteAll() {
    return http.delete(`/transfer`);
  }

  findByTitle(title) {
    return http.get(`/transfer?title=${title}`);
  }
}

export default new TransferDataSevice();
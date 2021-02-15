import http from "../http-common";

class MainProjectDataSevice {
  getAll() {
    return http.get("/mainprojectcenter");
  }

  get(id) {
    return http.get(`/mainprojectcenter/${id}`);
  }

  create(data) {
    return http.post("/mainprojectcenter", data);
  }

  update(id, data) {
    return http.put(`/mainprojectcenter/${id}`, data);
  }

  delete(id) {
    return http.delete(`/mainprojectcenter/${id}`);
  }

  deleteAll() {
    return http.delete(`/mainprojectcenter`);
  }

  findByTitle(title) {
    return http.get(`/mainprojectcenter?title=${title}`);
  }
}

export default new MainProjectDataSevice();
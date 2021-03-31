// import axios from 'axios';

// const API_URL = 'http://localhost:8080/api/';

// class AuthService {
//   login(user) {
//     return axios
//       .get(API_URL + 'user', {
//         // username: user.username,
//         // password: user.password
//         email: user.Email,
//       })
//       .then(response => {
//         if (response.data.accessToken) {
//           localStorage.setItem('user', JSON.stringify(response.data));
//         }
//         return response.data;
//       });
//   }

//   logout() {
//     localStorage.removeItem('user');
//   }
// }

// export default new AuthService();
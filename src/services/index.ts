import http from '../http';

class AppService {
  loginUser = (user: { email: string; password: string }) => {
    return http.post('/login', user);
  };
}

export default new AppService();

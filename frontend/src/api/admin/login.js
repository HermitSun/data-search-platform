import axios from 'axios';

// 管理员登录
export const adminLogin = (username, password) => {
    return axios.post(
        '/login/admin',
        {username, password}
    );
};

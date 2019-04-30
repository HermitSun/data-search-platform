import axios from 'axios';

// 获取数据详情
export const getDetail = (id) => {
    return axios.get(
        '/detail',
        {params: {id}}
    );
};

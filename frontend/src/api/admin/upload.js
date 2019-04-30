import axios from 'axios';

// 上传数据（其实就是问卷了）
export const uploadData = (dataName, dataStartTime, dataEndTime, dataSource, dataDescription, dataLink, dataContent) => {
    return axios.post(
        '/upload',
        {dataName, dataStartTime, dataEndTime, dataSource, dataDescription, dataLink, dataContent}
    );
};

import axios from 'axios';

// 简单搜索
export const simpleSearch = (page, keyword) => {
    return axios.get(
        '/search/simple',
        {params: {page, keyword}}
    );
};
// 高级搜索
export const complicateSearch = (page, keywords, dataStartTime, dataEndTime, dataArea) => {
    console.log(arguments);
    return axios.get(
        '/search/complicate',
        {params: {page, keywords, dataStartTime, dataEndTime, dataArea}}
    );
};

package com.bitability.dsp.dao.service;

import com.bitability.dsp.entity.DataForm;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

@Mapper
public interface DataFormMapper {
    /**
     * 上传问卷
     * @param dataForm
     * @return
     */
    int insertData(@Param("DataForm")DataForm dataForm);

    /**
     * 查询数据
     * @param id
     * @return
     */
    DataForm selectDataById(@Param("id")String id);
}
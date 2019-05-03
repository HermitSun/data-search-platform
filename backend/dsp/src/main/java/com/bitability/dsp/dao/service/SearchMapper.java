package com.bitability.dsp.dao.service;

import com.bitability.dsp.entity.DataForm;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import java.util.List;
@Mapper
public interface SearchMapper {
    /**
     * 简单搜索
     * @param keyword
     * @return
     */
    List<DataForm>simpleSelect(@Param("keyword")String keyword);

    /**
     *
     * @param keywords
     * @param dataStartTime
     * @param dataEndTime
     * @param dataArea
     * @return
     */
    List<DataForm>complicateSelect(@Param("keywords")String[]keywords,
                                   @Param("dataStartTime")String dataStartTime,
                                   @Param("dataEndTime")String dataEndTime,
                                   @Param("dataArea")String[]dataArea);
}

package com.bitability.dsp.dao.service;

import com.bitability.dsp.entity.User;

public interface AccountMapper {
    User getAccountByName(String userName);
}
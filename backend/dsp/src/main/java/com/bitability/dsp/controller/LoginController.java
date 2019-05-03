package com.bitability.dsp.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;

import com.bitability.dsp.response.BasicResponse;
import com.bitability.dsp.service.LoginService;

import com.bitability.dsp.parameter.*;

@RestController("/login")
@CrossOrigin
public class LoginController {    
    @Autowired
    private LoginService service;

    @RequestMapping(value = "/admin")
    public BasicResponse login(@RequestBody LoginParameter param, HttpServletRequest request){
        //TODO:登陆
        return new BasicResponse();
    }
}
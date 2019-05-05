package com.bitability.dsp.parameter;

public class LoginParameter {
    private String userName;
    private String password;

    public LoginParameter(){
    }

    public LoginParameter(String userName, String password){
        this.userName = userName;
        this.password = password;
    }

    public String getUserName(){
        return this.userName;
    }

    public void setUserName(String userName){
        this.userName = userName;
    }

    public String getPassword(){
        return this.password;
    }

    public void setPassword(String password){
        this.password = password;
    }
}
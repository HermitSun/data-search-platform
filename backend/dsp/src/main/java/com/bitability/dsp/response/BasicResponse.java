package com.bitability.dsp.response;

public class BasicResponse {
    Boolean succeed;
    String msg;
    Object context;

    public BasicResponse(){
    }

    public BasicResponse(Boolean succeed, String msg){
        this.succeed = succeed;
        this.msg = msg;
    }

    public void setSucceed(Boolean succeed){
        this.succeed = succeed;
    }

    public Boolean getSucceed(){
        return this.succeed;
    }

    public void setMsg(String msg){
        this.msg = msg;
    }

    public String getMsg(){
        return this.msg;
    }

    public void setContext(Object context){
        this.context = context;
    }

    public Object getContext(){
        return this.context;
    }
}
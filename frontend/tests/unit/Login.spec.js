import {expect} from 'chai';
import {shallowMount} from '@vue/test-utils';
import Login from '@/components/Login.vue';

describe('Login.vue', () => {
    it('如果账号密码正确，应该登录成功', function () {
        const wrapper = shallowMount(Login);

    });
    it('如果密码错误，应该提示密码错误', function () {

    });
    it('如果账号错误，应该提示账号不存在', function () {

    });
    it('如果未登录，应该不能使用其他功能', function () {

    });
});

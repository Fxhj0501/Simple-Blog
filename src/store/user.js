import { setInterval } from "core-js";
import $ from "jquery";
import jwt_decode from "jwt-decode";
const Moduleuser = {
    state: {
        username: "",
        id: "",
        photo: "",
        followerCount: 0,
        access: "",
        refresh: "",
        is_login: false

    },
    getters: {
    },
    mutations: {
        updateUser(state, user) {
            state.id = user.id;
            state.username = user.username;
            state.photo = user.photo;
            state.followerCount = user.followerCount;
            state.access = user.access;
            state.refresh = user.refresh;
            state.is_login = user.is_login;
        },
        updateAccess(state, access) {
            state.access = access;
        },
        logout(state) {
            state.id = "";
            state.username = "";
            state.photo = "";
            state.followerCount = 0;
            state.access = "";
            state.refresh = "";
            state.is_login = false;
            console.log(state.is_login);
        }
    },
    actions: {
        login(context, data) {
            $.ajax({
                type: "POST",
                url: "https://app165.acapp.acwing.com.cn/api/token/",
                crossDomain: true,
                data: {
                    username: data.username,
                    password: data.password,
                },
                success(resp) {
                    const { access, refresh } = resp;
                    const access_obj = jwt_decode(access);
                    setInterval(() => {
                        $.ajax({
                            url: "https://app165.acapp.acwing.com.cn/api/token/refresh/",
                            crossDomain: true,
                            type: "POST",
                            data: {
                                refresh,
                            },
                            success(resp) {
                                context.commit("updateAccess", resp.access);
                            },
                        })
                    }, 4.5 * 60 * 1000);
                    $.ajax({
                        url: "https://app165.acapp.acwing.com.cn/myspace/getinfo/",
                        type: "GET",
                        crossDomain: true,
                        data: {
                            user_id: access_obj.user_id
                        },
                        headers: {
                            'Authorization': "Bearer " + access,
                        },
                        success(resp) {
                            context.commit("updateUser", {
                                ...resp,
                                access: access,
                                refresh: refresh,
                                is_login: true,
                            });
                            data.success();
                        }

                    })
                },
                error() {
                    data.error();
                }
            });

        },

    },
    modules: {
    }
}
export default Moduleuser;
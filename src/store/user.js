import $ from "jquery";
const Moduleuser = {
    state: {
        username: "",
        id: "",
        ptoto: "",
        followerCount: 0,

    },
    getters: {
    },
    mutations: {
    },
    actions: {
        login(context, data) {
            $.ajax({
                url: "https://app165.acapp.acwing.com.cn/api/token/",
                type: "POST",
                data: {
                    username: data.username,
                    pwd: data.password,
                },
                success(resp) {
                    console.log(resp);
                }
            });
        }
    },
    modules: {
    }
}
export default Moduleuser;
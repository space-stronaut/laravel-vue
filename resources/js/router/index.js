import VueRouter from "vue-router"
import Home from "../views/Home.vue"
import About from "../views/About.vue"
import Detail from "../views/Detail.vue"

export default{
    routes : [
        {
            path: "",
            component: Home
        },
        {
            path : "/about",
            component: About
        },
        {
            path : "/detail/:id",
            name: "detail",
            component : Detail
        }
    ],
}
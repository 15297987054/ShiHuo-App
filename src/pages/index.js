import Loadable from "react-loadable";
import Loading from "../common/loading";

const Home=Loadable({
    loader:()=>import ("./home"),
    loading:Loading,
})

const Discount=Loadable({
    loader:()=>import ("./discount"),
    loading:Loading,
})
const Discover=Loadable({
    loader:()=>import ("./discover"),
    loading:Loading,
})
const Equip=Loadable({
    loader:()=>import ("./equip"),
    loading:Loading,
})
const More=Loadable({
    loader:()=>import ("./more"),
    loading:Loading,
})

const BeforeLogin = Loadable({
    loader:()=>import("./beforeLogin"),
    loading:Loading,
})
export {
    Home,
    Discount,
    Discover,
    More,
    Equip,
    BeforeLogin
}
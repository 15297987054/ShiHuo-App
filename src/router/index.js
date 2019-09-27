import {
    Home,
    Discount,
    Discover,
    Equip,
    More,  
    BeforeLogin
} from "@pages"

export const TabBarRoutes=[
    {
        key:"/home",
        path:"/home",
        name:"首页",
        icon:"\ue611",
        component:Home,
        exact:true,
        meta:{
            requireAuth:false,
            flag:true,
        }
    },
    {
        key:"/discount",
        path:"/discount",
        name:"优惠",
        icon:"\ue773",
        component:Discount,
        exact:true,
        meta:{
            requireAuth:false,
            flag:true,
        }
    },
    {
        key:"/discover",
        path:"/discover",
        name:"发现",
        icon:"\ue746",
        component:Discover,
        exact:true,
        meta:{
            requireAuth:false,
            flag:true,
        }
    },
    {
        key:"/equip",
        path:"/equip",
        name:"装备",
        icon:"\ue613",
        component:Equip,
        exact:true,
        meta:{
            requireAuth:false,
            flag:true
        }
    },
    {
        key:"/more",
        path:"/more",
        name:"更多",
        icon:"\ue62e",
        component:More,
        exact:true,
        meta:{
            requireAuth:false,
            flag:true,
        }
    },
   
   
]

export const noTabBarRoutes=[
    {
        key:"/beforeLogin",
        path:"/beforeLogin",
        name:"登录前",
        icon:"\ue62e",
        component:BeforeLogin,
        exact:true,
        meta:{
            requireAuth:false,
            flag:true,
        }
    },
]

export const beforeLogin=[
   
]

export const baseConfigRoutes=TabBarRoutes.concat(noTabBarRoutes);


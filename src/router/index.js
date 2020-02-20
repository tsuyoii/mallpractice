// 1、导入
import Vue from 'vue'
import VueRouter from 'vue-router'

// 3.1懒加载
const Home = () => import('../views/home/Home.vue')
const Category = () => import('../views/category/Category.vue')
const Shopcar = () => import('../views/shopcar/Shopcar.vue')
const Profile = () => import('../views/profile/Profile.vue')

// 2、安装插件
Vue.use(VueRouter)

// 3.2配置映射关系
const  routes = [{
  path:'',
  redirect:'/home'
},
{
  path:'/home',
  component:Home
},
{
  path:'/category',
  component:Category
},
{
  path:'/shopcar',
  component:Shopcar
},
{
  path:'/profile',
  component:Profile
}
]

//3、创建路由对象
const router = new VueRouter({
  routes,
  mode:'history'
})

// 4、导出
export default router
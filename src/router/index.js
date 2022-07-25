import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import FormValidationsVue from "../components/FormValidations.vue";
import VVFormValidateVue from "../components/VVFormValidate.vue";
import PostDetailsVue from "../components/PostDetails.vue";
import EditDetailsVue from "../components/EditDetails.vue";
import DeleteDialogVue from "../components/DeleteDialog.vue";
import MainComponentVue from "../components/MainComponent.vue";
import LoginFormVue from "../components/LoginForm.vue";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login-form',
    name: 'LoginFormVue',
    component: LoginFormVue
  },
  {
    path: '/create-account',
    name: 'VVFormValidateVue',
    component: VVFormValidateVue
  },
  {
    path: '/custom-validations',
    name: 'FormValidationsVue',
    component: FormValidationsVue
  },
  {
    path: '/post-details',
    name: 'PostDetailsVue',
    component: PostDetailsVue
  },
  {
    path: '/main-component',
    name: 'MainComponentVue',
    component: MainComponentVue
  },
  {
    path: '/edit-details/:id',
    name: 'EditDetailsVue',
    component: EditDetailsVue
  },
  {
    path: '/delete-details/:id',
    name: 'DeleteDialogVue',
    component: DeleteDialogVue
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

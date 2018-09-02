import Book from '../components/Book'
import BookSave from '../components/BookSave'
import BookEdit from '../components/BookEdit'
import Login from '../components/Login'
import Logout from '../components/Logout'


const router = [
    {
      path:'/',
      name:'book',
      component:Book,
      meta:{
        requiresAuth:true
      }
    },{
      path:'/login',
      name:Login,
      component:Login,
      meta:{
        guest:true
      }
    },
    {
      path:'/book',
      component:BookSave,
      meta:{
        requiresAuth: true
      }
    },
    {
      path:'/logout',
      component:Logout,
      meta:{
        requiresAuth:true
      }

    },
    {
      path:'/book/:id',
      component:BookEdit,
     meta:{
        requiresAuth:true,
        is_admin:true
      }
    }
  ]

export default router
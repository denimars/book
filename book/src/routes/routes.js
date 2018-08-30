import Book from '../components/Book'
import BookSave from '../components/BookSave'
import BookEdit from '../components/BookEdit'

const routes = [
  {
    path:'/',
    component:Book
  },
  {
    path:'/book',
    component:BookSave
  },
  {
    path:'/book/:id',
    component:BookEdit
  }
]

export default routes
import Book from '../components/Book'
import BookSave from '../components/BookSave'

const routes = [
  {
    path:'/',
    component:Book
  },
  {
    path:'/book',
    component:BookSave
  }
]

export default routes
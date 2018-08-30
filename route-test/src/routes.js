import Home from './components/Home';
import HelloWorld from './components/HelloWorld';
import Matik from './components/Matik';

const routes =[
  {
    path:'/hello',
    component:HelloWorld
  },
  {
    path:'/',
    component:Home
  },
  {
    path:'/matik',
    component:Matik
  }
]


export default routes
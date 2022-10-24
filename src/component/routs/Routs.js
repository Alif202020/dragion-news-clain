import { createBrowserRouter } from "react-router-dom";
import Login from "../auth/authcontex/login/Login";
import Registration from "../auth/authcontex/regestration/Registration";
import Private from "../auth/private/Private";
import Profile from "../auth/profile/Profile";
import Main from "../leaout/Main";
import Catagores from "../pages/catagores/Catagores";
import Home from "../pages/home/Home";
import News from "../pages/news/News";


export const router=createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
                loader:()=>fetch('http://localhost:5000/news')
            },
            {
                path:'/news/:id',
                element:<News></News>,
                loader:({params})=>fetch(`http://localhost:5000/news/${params.id}`)
            },
            {
                path:'/catagores/:id',
                element:<Catagores></Catagores>,
                loader:({params})=>fetch(`http://localhost:5000/category/${params.id}`)
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/sineup',
                element:<Registration></Registration>
            },
            {
                path:'/profile',
                element:<Private><Profile></Profile></Private>
            },
            {},
        ]
    }
])
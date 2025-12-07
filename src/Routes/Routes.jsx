import React from 'react';
import { createBrowserRouter } from 'react-router';
import ErrorPage from '../Pages/ErrorPage';
import MainLayout from './../Layouts/MainLayout';
import HomePage from './../Pages/HomePage';
import PublicLessons from '../Pages/PublicLessons';
import PricingPage from './../Pages/PricingPage';
import Dashboard from '../Pages/Dashboard/Dashboard';
import Signup from '../Pages/AuthPage/Signup';
import Login from '../Pages/AuthPage/Login';
import AddLessons from '../Pages/Dashboard/AddLessons';
import MyLessons from '../Pages/Dashboard/MyLessons';

const Routes = createBrowserRouter([
    {
       path:"/", 
       errorElement:<ErrorPage></ErrorPage>,
       hydrateFallbackElement:<p>Loading....</p>,
       element:<MainLayout></MainLayout>,
       children:[
    {path:"/", element:<HomePage></HomePage>},
    {path:"/public-lessons", element:<PublicLessons></PublicLessons>},
    {path:"/pricing", element:<PricingPage></PricingPage>},]
    },

    {path:"/signUp", element:<Signup></Signup>},
    {path:"/login", element:<Login></Login>},
    
    {path:"/dashboard", 
     errorElement:<ErrorPage></ErrorPage>,
     hydrateFallbackElement:<p>Loading....</p>,
     element:<Dashboard></Dashboard>,
     children:[
        {
            path:"/dashboard/add-Lesson",
            element:<AddLessons></AddLessons>
        },
        {
            path:"/dashboard/my-Lessons",
            element:<MyLessons></MyLessons>
        }
     ]
    }
])

export default Routes;
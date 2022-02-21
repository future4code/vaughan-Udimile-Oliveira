import {Route, Routes, BrowserRouter} from 'react-router-dom'
import { FeedPage } from '../pages/FeedPage'
import { PostPage } from '../pages/PostPage'
import { SignUpPage } from '../pages/SignUpPage'
import { LoginPage } from '../pages/LoginPage'
import { ErrorPage } from '../pages/ErrorPage'

export const Router = () =>{
    return(
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<FeedPage />}/>
            <Route path='/login' element={<LoginPage />}/>
            <Route path='/signup' element={<SignUpPage />}/>
            <Route path='/post' element={<PostPage />}/>
            <Route path='*' element={<ErrorPage />}/>
        </Routes>
        </BrowserRouter>
    )
}
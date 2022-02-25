import { Route, Routes, BrowserRouter } from 'react-router-dom'
import { FeedPage } from '../pages/FeedPage/FeedPage'
import { PostPage } from '../pages/PostPage/PostPage'
import { SignUpPage } from '../pages/SignUpPage/SignUpPage'
import { LoginPage } from '../pages/LoginPage/LoginPage'
import { ErrorPage } from '../pages/ErrorPage/ErrorPage'
import { Header } from '../components/Header/Header'

export const Router = () => {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path='/' element={<FeedPage />} />
                <Route path='/login' element={<LoginPage />} />
                <Route path='/signup' element={<SignUpPage />} />
                <Route path='/post' element={<PostPage />} />
                <Route path='*' element={<ErrorPage />} />
            </Routes>
        </BrowserRouter>
    )
}
import { Route, Routes } from 'react-router-dom'
import { FeedPage } from '../pages/FeedPage/FeedPage'
import { PostPage } from '../pages/PostPage/PostPage'
import { SignUpPage } from '../pages/SignUpPage/SignUpPage'
import { LoginPage } from '../pages/LoginPage/LoginPage'
import { ErrorPage } from '../pages/ErrorPage/ErrorPage'


export const Router = ({ setRightButtonText }) => {
    return (

        <Routes>
            <Route path='/' element={<FeedPage />} />
            <Route path='/login' element={<LoginPage
                setRightButtonText={setRightButtonText} />} />
            <Route path='/signup' element={<SignUpPage
            setRightButtonText={setRightButtonText} />} />
            <Route path='/post/:id' element={<PostPage />} />
            <Route path='*' element={<ErrorPage />} />
        </Routes>

    )
}
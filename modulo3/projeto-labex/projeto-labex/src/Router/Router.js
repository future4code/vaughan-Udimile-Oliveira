import { Route, BrowserRouter, Routes } from 'react-router-dom'
import AdminHomePage from '../pages/AdminHomePage'
import AppFormPage from '../pages/AppFormPage'
import CreateTripPage from '../pages/CreateTripPage'
import ErrorPage from '../pages/ErrorPage'
import HomePage from '../pages/HomePage'
import ListTripsPage from '../pages/ListTripsPage'
import LoginPage from '../pages/LoginPage'
import TripDetailsPage from '../pages/TripDetailsPage'

export const Router = () => {
    return (
        
        <BrowserRouter>

            <Routes>

                <Route path={"/"} element={<HomePage />} />

                <Route path={"/trips/list"} element={<ListTripsPage/>} />

                <Route path={"/trips/application"} element={<AppFormPage />} />

                <Route path={"/login"} element={<LoginPage/>} />

                <Route path={"/admin/trips/list"} element={<AdminHomePage />} />

                <Route path={"/admin/trips/create"} element={<CreateTripPage />} />

                <Route path={"/admin/trips/:id"} element={<TripDetailsPage/>} />

                <Route path="*" element={< ErrorPage/>} />

            </Routes>

        </BrowserRouter>
    )
}
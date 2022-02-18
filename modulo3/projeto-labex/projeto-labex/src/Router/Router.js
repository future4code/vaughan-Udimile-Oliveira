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

                <Route exact path={"/"} element={<HomePage />} />

                <Route exact path={"/trips/list"} element={<ListTripsPage/>} />

                <Route exact path={"/trips/application"} element={<AppFormPage />} />

                <Route exact path={"/login"} element={<LoginPage/>} />

                <Route exact path={"/admin/trips/list"} element={<AdminHomePage />} />

                <Route exact path={"/admin/trips/create"} element={<CreateTripPage />} />

                <Route exact path={"/admin/trips/:id"} element={<TripDetailsPage/>} />

                <Route element={< ErrorPage/>} />

            </Routes>

        </BrowserRouter>
    )
}
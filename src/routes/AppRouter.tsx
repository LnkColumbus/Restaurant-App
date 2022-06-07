import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { AppLayout } from '../components/layouts';
import { Categories, Home, Locations, Tables } from '../pages';
import { Items } from '../pages/Items';

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<AppLayout />}>
                    <Route index element={<Home /> } />
                    <Route path="locations" element={ <Locations /> } />
                    <Route path="tables" element={ <Tables /> } />
                    <Route path="menu" element={ <Categories /> } />
                    <Route path="menu-items" element={ <Items /> } />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

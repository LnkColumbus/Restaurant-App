import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { AppLayout } from '../components/layouts';
import { Home, Locations } from '../pages';

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<AppLayout />}>
                    <Route index element={<Home /> } />
                    <Route path="locations" element={ <Locations /> } />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

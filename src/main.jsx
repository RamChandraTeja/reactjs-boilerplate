import './global.css';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NextTopLoader from 'nextjs-toploader';
import { Toaster } from 'react-hot-toast';
import { Provider } from 'react-redux';
import store from './redux/store.js';

import NotFound from './views/NotFound.jsx';
import Home from './views/Home.jsx';
import Products from './views/Products.jsx';
import Product from './views/Product.jsx';

const modules = [
    { path: "/", component: <Home /> },
    { path: "/dynamic-routing", component: <Products /> },
    { path: "/dynamic-routing/:id", component: <Product /> }
];

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <Router>
            <Provider store={store}>
                <NextTopLoader color={"#000000"} showSpinner={false} initialPosition={0.6} height={4} />
                <Toaster position="top-center" reverseOrder={false} />
                <main className='min-h-screen bg-gray-100 antialiased'>
                    <Routes>
                        {modules.map(({ path, component }, index) => (<Route key={index} path={path} element={component} />))}
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </main>
            </Provider>
        </Router>
    </StrictMode>
);
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
import UseState from './views/hooks/UseState.jsx';
import UseReducer from './views/hooks/UseReducer.jsx';
import UseEffect from './views/hooks/UseEffect.jsx';
import UseRef from './views/hooks/UseRef.jsx';
import UseLayoutEffect from './views/hooks/UseLayoutEffect.jsx';
import UseImperativeHandle from './views/hooks/UseImperativeHandle.jsx';
import UseContext from './views/hooks/UseContext.jsx';
import UseMemo from './views/hooks/UseMemo.jsx';
import UseCallback from './views/hooks/UseCallback.jsx';

const modules = [
    { path: "/", component: <Home /> },
    { path: "/dynamic-routing", component: <Products /> },
    { path: "/dynamic-routing/:id", component: <Product /> },
    { path: "/hooks/useState", component: <UseState /> },
    { path: "/hooks/useReducer", component: <UseReducer /> },
    { path: "/hooks/useEffect", component: <UseEffect /> },
    { path: "/hooks/useRef", component: <UseRef /> },
    { path: "/hooks/useLayoutEffect", component: <UseLayoutEffect /> },
    { path: "/hooks/useImperativeHandle", component: <UseImperativeHandle /> },
    { path: "/hooks/useContext", component: <UseContext /> },
    { path: "/hooks/useMemo", component: <UseMemo /> },
    { path: "/hooks/useCallback", component: <UseCallback /> },
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
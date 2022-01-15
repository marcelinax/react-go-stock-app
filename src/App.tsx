import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { CreateProduct } from './views/CreateProduct';
import { Products } from './views/Products';
import { Provider } from 'react-redux';
import React from 'react';
import store from './store/store';

function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Products/>} />
                    <Route path='/new-product' element={<CreateProduct/>} />
                </Routes>
            </BrowserRouter>
        </Provider>
    );
}

export default App;

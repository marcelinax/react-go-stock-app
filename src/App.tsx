import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Categories } from './views/Categories';
import { CreateCategory } from './views/CreateCategory';
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
                    <Route path='/new-category' element={<CreateCategory/>} />
                    <Route path='/categories' element={<Categories/>} />
                </Routes>
            </BrowserRouter>
        </Provider>
    );
}

export default App;

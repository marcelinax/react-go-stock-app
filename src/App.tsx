import 'react-toastify/dist/ReactToastify.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

import { Categories } from './views/Categories';
import { CreateCategory } from './views/CreateCategory';
import { CreateProduct } from './views/CreateProduct';
import { EditCategory } from './views/EditCategory';
import { EditProduct } from './views/EditProduct';
import { Homepage } from './views/Homepage';
import { Products } from './views/Products';
import { Provider } from 'react-redux';
import React from 'react';
import store from './store/store';

function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <ToastContainer position='top-center'/>
                <Routes>
                    <Route path='/' element={<Homepage/>} />
                    <Route path='/products' element={<Products/>} />
                    <Route path='/new-product' element={<CreateProduct/>} />
                    <Route path='/new-category' element={<CreateCategory/>} />
                    <Route path='/categories' element={<Categories/>} />
                    <Route path='/edit-product/:id' element={<EditProduct/>} />
                    <Route path='/edit-category/:id' element={<EditCategory/>} />
                </Routes>
            </BrowserRouter>
        </Provider>
    );
}

export default App;

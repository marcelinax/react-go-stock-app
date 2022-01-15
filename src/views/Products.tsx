import React, { useEffect, useState } from 'react';

import { DefaultLayout } from '../layouts/DefaultLayout';
import { PrimaryButton } from './../components/global/PrimaryButton';
import { Product } from './../models/Product';
import { Table } from '../components/global/Table';
import { apiClient } from './../api/apiClient';
import { useNavigate } from 'react-router-dom';

export const Products: React.FC = () => {


    const naviagtion = useNavigate();
    const [products, setProducts] = useState<Product[]>([]);
    const tableHeadings = [
        'Nazwa',
        'Kategoria',
        'Jednostka miary',
        'Podatek',
        ''
    ];
    const tableItemsKeys = [
        (i: Product) => i.name,
        (i: Product) => i.category.name,
        (i: Product) => i.measure_type,
        (i: Product) => i.tax.name + ' ' + i.tax.code,
        (i: Product) => <PrimaryButton title='Edytuj' type='button' onClick={()=>{naviagtion(`edit-product/${i.id}`);}}/>,
    ];

    useEffect(() => {
        fetchProducts();
    }, []);
    
    const fetchProducts = async (): Promise<void> => {
        await apiClient.get('/products?include=category,tax').then(res => {return setProducts(res.data.data);});
    };

    return (
        <>
            <DefaultLayout>
                <Table items={products} tableHeadings={tableHeadings} tableItemsKeys={tableItemsKeys} />
            </DefaultLayout>
        </>
    );
};

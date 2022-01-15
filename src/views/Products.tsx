import React, { useEffect, useState } from 'react';

import { DefaultLayout } from '../layouts/DefaultLayout';
import { PrimaryButton } from './../components/global/PrimaryButton';
import { Product } from './../models/Product';
import { Search } from '../components/global/Search';
import { Table } from '../components/global/Table';
import { apiClient } from './../api/apiClient';
import { useNavigate } from 'react-router-dom';

export const Products: React.FC = () => {


    const naviagtion = useNavigate();
    const [products, setProducts] = useState<Product[]>([]);
    const [search, setSearch] = useState<string>('');
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

    useEffect(() => {
        fetchProducts();
    }, [search]);


    
    const fetchProducts = async (): Promise<void> => {
        await apiClient.get(`/products?include=category,tax&search=${search}`).then(res => {return setProducts(res.data.data);});
    };

    const onInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setSearch(e.target.value);
    };

    return (
        <>
            <DefaultLayout>
                <Search onChange={onInputChange} value={search} placeholder='Szukaj...'/>
                <Table items={products} tableHeadings={tableHeadings} tableItemsKeys={tableItemsKeys} />
            </DefaultLayout>
        </>
    );
};

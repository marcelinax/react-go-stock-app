import React, { useEffect, useState } from 'react';

import { DefaultLayout } from '../layouts/DefaultLayout';
import { PrimaryButton } from './../components/global/PrimaryButton';
import { Product } from './../models/Product';
import { Search } from '../components/global/Search';
import { Table } from '../components/global/table/Table';
import { TablePagination } from './../components/global/table/TablePagination';
import { apiClient } from './../api/apiClient';
import { useNavigate } from 'react-router-dom';

export const Products: React.FC = () => {


    const naviagtion = useNavigate();
    const [products, setProducts] = useState<Product[]>([]);
    const [productsAmount, setProductsAmount] = useState<number>(0);
    const [search, setSearch] = useState<string>('');
    const [size, setSize] = useState<number>(10);
    const [page, setPage] = useState<number>(0);
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
        fetchProductsAmount();
    }, [search]);

    useEffect(() => {
        fetchProducts();
    }, [search, page]);


    
    const fetchProducts = async (): Promise<void> => {
        await apiClient.get(`/products?include=category,tax&search=${search}&size=${size}&page=${page}`).then(res => {return setProducts(res.data.data);});
    };

    const fetchProductsAmount = async (): Promise<void> => {
        await apiClient.get(`/products?search=${search}`).then(res => {return setProductsAmount(res.data.data.length);});
    };

    const onInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setSearch(e.target.value);
    };

    const onPageChange = (event: React.MouseEvent<HTMLButtonElement> | null,
        newPage: number ): void => {
        setPage(newPage);
    };

    return (
        <>
            <DefaultLayout>
                <Search onChange={onInputChange} value={search} placeholder='Szukaj...' />
                <TablePagination page={page} count={productsAmount} rowsPerPage={size} onPageChange={onPageChange} onRowsPerPageChange={()=>{}}/>
                <Table items={products} tableHeadings={tableHeadings} tableItemsKeys={tableItemsKeys} />
            </DefaultLayout>
        </>
    );
};

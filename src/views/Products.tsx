import React, { useEffect, useState } from 'react';

import { DefaultLayout } from '../layouts/DefaultLayout';
import { PrimaryButton } from './../components/global/PrimaryButton';
import { Product } from './../models/Product';
import { Search } from '../components/global/Search';
import { Table } from '../components/global/table/Table';
import { TablePagination } from './../components/global/table/TablePagination';
import { apiClient } from './../api/apiClient';
import { locales } from './../Locales';
import { useNavigate } from 'react-router-dom';

export const Products: React.FC = () => {


    const naviagtion = useNavigate();
    const [products, setProducts] = useState<Product[]>([]);
    const [productsAmount, setProductsAmount] = useState<number>(0);
    const [search, setSearch] = useState<string>('');
    const [size, setSize] = useState<number>(10);
    const [page, setPage] = useState<number>(0);
    const tableHeadings = [
        locales.name,
        locales.category,
        locales.measure_type,
        locales.tax,
        ''
    ];
    const tableItemsKeys = [
        (i: Product) => i.name,
        (i: Product) => i.category.name,
        (i: Product) => i.measure_type,
        (i: Product) => i.tax.name + ' ' + i.tax.code,
        (i: Product) => <PrimaryButton title={locales.edit} type='button' className='btn-primary' onClick={()=>{naviagtion(`/edit-product/${i.id}`);}}/>,
    ];

    useEffect(() => {
        fetchProductsAmount();
    }, [search]);

    useEffect(() => {
        fetchProducts();
    }, [search, page, size]);


    
    const fetchProducts = async (): Promise<void> => {
        await apiClient.get(`/products?include=category,tax&search=${search}&size=${size}&page=${page}`).then(res => {return setProducts(res.data.data);});
    };

    const fetchProductsAmount = async (): Promise<void> => {
        await apiClient.get(`/products?search=${search}`).then(res => {return setProductsAmount(res.data.data.length);});
    };

    const onInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setSearch(e.target.value);
    };

    const onPageChange = (e: React.MouseEvent<HTMLButtonElement> | null,
        newPage: number ): void => {
        setPage(newPage);
    };

    const onRowsPerPageChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setSize(+e.target.value);
        setPage(0);
    };

    return (
        <DefaultLayout>
            <div className='row mt-5'>
                <div className='col-12 mb-2'>
                    <h3 className='mb-5'>{locales.products_list}</h3>
                    <div className='row'>
                        <div className='col-12 col-md-4'>
                            <Search onChange={onInputChange} value={search} placeholder={locales.search} />
                        </div>
                        <div className='col-12 col-md-8 mt-md-0 mt-2'>
                            <TablePagination page={page} count={productsAmount} rowsPerPage={size} onPageChange={onPageChange} onRowsPerPageChange={onRowsPerPageChange}/>
                        </div>
                    </div>
                </div>
                <div className='col-12'>
                    <Table items={products} tableHeadings={tableHeadings} tableItemsKeys={tableItemsKeys} />
                </div>
            </div>
        </DefaultLayout>
    );
};

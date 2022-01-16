import React, { useEffect, useState } from 'react';

import { Category } from '../models/Category';
import { DefaultLayout } from '../layouts/DefaultLayout';
import { PrimaryButton } from './../components/global/PrimaryButton';
import { Search } from './../components/global/Search';
import { Table } from '../components/global/table/Table';
import { TablePagination } from './../components/global/table/TablePagination';
import { apiClient } from './../api/apiClient';
import { useNavigate } from 'react-router-dom';

export const Categories: React.FC = () => {

    const naviagtion = useNavigate();
    const [categories, setCategories] = useState<Category[]>([]);
    const [categoriesAmount, setCategoriesAmount] = useState<number>(0);
    const [size, setSize] = useState<number>(10);
    const [page, setPage] = useState<number>(0);
    const [search, setSearch] = useState<string>('');
    const tableHeadings = [
        'ID',
        'Nazwa',
        ''
    ];

    const tableItemsKeys = [
        (i: Category) => i.id,
        (i: Category) => i.name,
        (i: Category) => <PrimaryButton title='Edytuj' type='button' className='btn-primary' onClick={() => {
            naviagtion(`/edit-category/${i.id}`);
        }}/>

    ];

    useEffect(() => {
        fetchCategoriesAmount(); 
    }, [search]);
    
    useEffect(() => {
        fetchCategories();
    }, [search, page, size]);
    
    const fetchCategories = async (): Promise<void> => {
        await apiClient.get(`product_categories?search=${search}&page=${page}&size=${size}`).then(res => setCategories(res.data.data));
    };

    const fetchCategoriesAmount = async (): Promise<void> => {
        await apiClient.get(`product_categories?search=${search}`).then(res => setCategoriesAmount(res.data.data.length));
    };

    const onInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setSearch(e.target.value);
    };
    
    const onPageChange = (event: React.MouseEvent<HTMLButtonElement> | null,
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
                    <h3 className='mb-5'>Lista kategorii</h3>
                    <div className='row'>
                        <div className='col-4'>
                            <Search onChange={onInputChange} value={search} placeholder='Szukaj...' />
                        </div>
                        <div className='col-8'>
                            <TablePagination page={page} count={categoriesAmount} rowsPerPage={size} onPageChange={onPageChange} onRowsPerPageChange={onRowsPerPageChange}/>
                        </div>
                    </div>
                </div>
                <div className='col-12'>
                    <Table items={categories} tableHeadings={tableHeadings} tableItemsKeys={tableItemsKeys} />
                </div>
            </div>
        </DefaultLayout>
    );
};

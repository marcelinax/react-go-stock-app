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
        (i: Category) => <PrimaryButton title='Edytuj' type='button' onClick={() => {
            naviagtion(`/edit-category/${i.id}`);
        }}/>

    ];

    useEffect(() => {
        fetchCategoriesAmount(); 
    }, [search]);
    
    useEffect(() => {
        fetchCategories();
    }, [search, page]);
    
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

    return (
        <DefaultLayout>
            <Search onChange={onInputChange} value={search} placeholder='Szukaj...'/>
            <TablePagination page={page} count={categoriesAmount} rowsPerPage={size} onPageChange={onPageChange} onRowsPerPageChange={()=>{}}/>
            <Table items={categories} tableHeadings={tableHeadings} tableItemsKeys={tableItemsKeys} />
        </DefaultLayout>
    );
};

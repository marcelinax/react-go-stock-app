import React, { useEffect, useState } from 'react';

import { Category } from '../models/Category';
import { DefaultLayout } from '../layouts/DefaultLayout';
import { PrimaryButton } from './../components/global/PrimaryButton';
import { Search } from './../components/global/Search';
import { Table } from '../components/global/Table';
import { apiClient } from './../api/apiClient';
import { useNavigate } from 'react-router-dom';

export const Categories: React.FC = () => {

    const naviagtion = useNavigate();
    const [categories, setCategories] = useState<Category[]>([]);
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
        fetchCategories(); 
    }, []);
    
    useEffect(() => {
        fetchCategories();
    }, [search]);
    
    const fetchCategories = async (): Promise<void> => {
        await apiClient.get(`product_categories?search=${search}`).then(res => setCategories(res.data.data));
    };

    const onInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setSearch(e.target.value);
    };

    return (
        <DefaultLayout>
            <Search onChange={onInputChange} value={search} placeholder='Szukaj...'/>
            <Table items={categories} tableHeadings={tableHeadings} tableItemsKeys={tableItemsKeys}/>
        </DefaultLayout>
    );
};

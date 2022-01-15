import React, { useEffect, useState } from 'react';

import { Category } from '../models/Category';
import { DefaultLayout } from '../layouts/DefaultLayout';
import { PrimaryButton } from './../components/global/PrimaryButton';
import { Table } from '../components/global/Table';
import { apiClient } from './../api/apiClient';
import { useNavigate } from 'react-router-dom';

export const Categories: React.FC = () => {

    const naviagtion = useNavigate();
    const [categories, setCategories] = useState<Category[]>([]);
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
    },[]);
    
    const fetchCategories = async (): Promise<void> => {
        await apiClient.get('product_categories').then(res => setCategories(res.data.data));
    };

    return (
        <DefaultLayout>
            <Table items={categories} tableHeadings={tableHeadings} tableItemsKeys={tableItemsKeys}/>
        </DefaultLayout>
    );
};

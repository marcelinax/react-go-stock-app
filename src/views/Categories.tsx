import React, { useEffect, useState } from 'react';

import { Category } from '../models/Category';
import { DefaultLayout } from '../layouts/DefaultLayout';
import { Table } from '../components/global/Table';
import { apiClient } from './../api/apiClient';

export const Categories: React.FC = () => {

    const [categories, setCategories] = useState<Category[]>([]);
    const tableHeadings = [
        'ID',
        'Nazwa'
    ];

    const tableItemsKeys = [
        (i: Category) => i.id,
        (i: Category) => i.name,
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

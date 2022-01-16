import React, { useEffect, useState } from 'react';

import { Category } from '../../models/Category';
import { Select } from './Select';
import { apiClient } from '../../api/apiClient';
import { locales } from './../../Locales';

interface Props {
    value: number,
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    error: string;
}

export const CategoriesSelect: React.FC<Props> = ({ value, onChange, error }) => {

    const [categories, setCategories] = useState<Category[]>([]);
    
    useEffect(() => {
        fetchCategories();
    },[]);

    const fetchCategories = async (): Promise<void> => {
        await apiClient.get('product_categories').then(res => {return setCategories(res.data.data);});
    };

    const renderCategoriesSelectOptions = (): JSX.Element | JSX.Element[] => {
        
        return categories && categories.map(category => {return (
            <option key={category.id} value={category.id}>{category.name}</option>
        );});
    };

    return categories && (
        <Select id='category_id' title={locales.category} value={value} onChange={onChange} error={error}>
            <option value="0" className='d-none' disabled />
            {renderCategoriesSelectOptions()}
        </Select>
    );
};

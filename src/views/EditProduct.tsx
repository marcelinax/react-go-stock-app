import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { DefaultLayout } from './../layouts/DefaultLayout';
import { MESSAGES } from './../messages/messages';
import { MeasureType } from '../enums/MeasureType';
import { Product } from './../models/Product';
import { ProductForm } from './../components/ProductForm';
import { apiClient } from './../api/apiClient';
import { locales } from './../Locales';
import { toast } from 'react-toastify';

export const EditProduct: React.FC = () => {

    const [formDate, setFormDate] = useState<{name: string, measure_type: number, category_id: number,tax_id: number}>({
        name: '',
        measure_type: -1,
        category_id: 0,
        tax_id: 0
    });

    const params = useParams();
    const navigate = useNavigate();
    const [errors, setErrors] = useState<string[]>([]);
    const [product, setProduct] = useState<Product | null>(null);


    useEffect(() => {
        fetchProductById();
    }, []);

    const convertMesaureTypeToEnum = (measure_type: string) => {
        switch (measure_type) {
        case 'sztuka':
            return MeasureType.SZTUKA;
        case 'kilogram':
            return MeasureType.KILOGRAM;
        case 'opakowanie':
            return MeasureType.OPAKOWANIE;
        case 'litr':
            return MeasureType.LITR;
        }
        return 0;
    };

    useEffect(() => {
        if(product)
            setFormDate({
                name: product.name,
                measure_type: convertMesaureTypeToEnum(product.measure_type),
                category_id: product.category.id,
                tax_id: product.tax.id
            });
    }, [product]);

    const onInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const { id, value } = e.target;
        setFormDate({
            ...formDate,
            [id]: value
        });
    };

    const onSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) : void => {
        const { id, value } = e.target;
        setFormDate({
            ...formDate,
            [id]: value
        });
        console.log(e.target);
    };

    const fetchProductById = async (): Promise<void> => {
        await apiClient.get(`products/${params.id}?include=category,tax`).then(res => setProduct(res.data.data));
    };

    const checkValidation = (): boolean => {
        let isValid = true;
        const errs = [];
        if (formDate.tax_id === 0) {
            errs.push(MESSAGES.CHOOSE_TAX);
            isValid = false;
            
        }
        if (formDate.category_id === 0) {
            errs.push( MESSAGES.CHOOSE_CATEGORY);
            isValid = false;
        }
        if (formDate.measure_type === -1) {
            errs.push( MESSAGES.CHOOSE_MEASURE_TYPE);
            isValid = false;
        }
        if (!formDate.name) {
            errs.push( MESSAGES.ENTER_PRODUCT_NAME);
            isValid = false;
        }
        setErrors([...errs]);
        return isValid;
    };

    const editProduct = async (): Promise<void> => {
        if (checkValidation()) {
            await apiClient.put(`products/${params.id}`, {
                ...formDate,
                category_id: +formDate.category_id,
                tax_id: +formDate.tax_id,
                type: 'BASIC'
            });
            setErrors([]);
            navigate('/');
        }
    };

    const onFormSubmit = (e: React.SyntheticEvent<HTMLFormElement>): void => {
        e.preventDefault();
        editProduct();
        toast.success(locales.product_edited_successfully);
    };

    const filterErrors = (value: string): string => {
        return errors.filter(err => {return err === value;})[0];
    };

    return (
        <>
            <DefaultLayout>
                <ProductForm heading={locales.edit_category} category={formDate.category_id} tax={formDate.tax_id} measure_type={formDate.measure_type} name={formDate.name} onFormSubmit={onFormSubmit}
                    categoryError={filterErrors(MESSAGES.CHOOSE_CATEGORY)} measure_typeError={filterErrors(MESSAGES.CHOOSE_MEASURE_TYPE)} nameError={filterErrors(MESSAGES.ENTER_PRODUCT_NAME)}
                    taxError={filterErrors(MESSAGES.CHOOSE_TAX)} onInputChange={onInputChange} onSelectChange={onSelectChange} 
                />
            </DefaultLayout>
        </>
    );
};

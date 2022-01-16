import React, { useEffect, useState } from 'react';

import { Select } from './Select';
import { Tax } from './../../models/Tax';
import { apiClient } from './../../api/apiClient';
import { locales } from './../../Locales';

interface Props {
    value: number,
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    error: string;
}

export const TaxesSelect: React.FC<Props> = ({value,onChange, error}) => {

    const [taxes, setTaxes] = useState<Tax[]>([]);
    
    useEffect(() => {
        fetchTaxes();
    },[]);

    const fetchTaxes = async (): Promise<void> => {
        await apiClient.get('taxes').then(res => {return setTaxes(res.data.data);});
    };

    const renderTaxesSelectOptions = (): JSX.Element | JSX.Element[] => {
        
        return taxes && taxes.map(tax => {return (
            <option key={tax.id} value={tax.id}>{`${tax.name} ${tax.code}`}</option>
        );});
    };

    return taxes && (
        <Select id='tax_id' title={locales.tax} value={value} onChange={onChange} error={error}>
            <option value="0" className='d-none' disabled />
            {renderTaxesSelectOptions()}
        </Select>
    );
};

import { MeasureType } from '../../enums/MeasureType';
import React from 'react';
import { Select } from './Select';

interface Props {
    value: number,
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    error: string;
}

export const MeasureTypesSelect: React.FC<Props> = ({ onChange, value,error }) => {
    
    const renderMeasureTypesSelectOptions = (): JSX.Element | JSX.Element[] => {
        
        return Object.values(MeasureType).filter(v => typeof v === 'string').map((type,index) => {
            return (
                <option key={type} value={index}>{type.toString().toLowerCase()}</option>
            );});
    };
    
    return (
        <Select id='measure_type' title='Jednostka miary' value={value} onChange={onChange} error={error}>
            <option value={-1} className='d-none' disabled />
            {renderMeasureTypesSelectOptions()}
        </Select>
    );
};

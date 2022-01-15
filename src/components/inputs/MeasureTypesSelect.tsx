import { MeasureType } from '../../enums/MeasureType';
import React from 'react';
import { Select } from './Select';

interface Props {
    value: number | string,
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export const MeasureTypesSelect: React.FC<Props> = ({ onChange, value }) => {
    
    const renderMeasureTypesSelectOptions = (): JSX.Element | JSX.Element[] => {
        
        return Object.values(MeasureType).map((type,index) => {
            return (
                <option key={type} value={index}>{type}</option>
            );});
    };
    
    return (
        <Select id='measure_type' title='Jednostka miary' value={value} onChange={onChange} >
            <option value="" className='d-none' disabled />
            {renderMeasureTypesSelectOptions()}
        </Select>
    );
};

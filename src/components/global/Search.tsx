import {BiSearchAlt2} from 'react-icons/bi';
import React from 'react';

interface Props{
    placeholder: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;  
}

export const Search: React.FC<Props> = ({placeholder, value, onChange}) => {
    return (
        <div>
            <input type='text' placeholder={placeholder} value={value} onChange={onChange} />
            <BiSearchAlt2/>
        </div>
    );
};

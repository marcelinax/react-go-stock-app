import { Category } from './Category';
import { Tax } from './Tax';

export interface Product {
    id: number;
    name: string;
    category: Category;
    measure_type: string;
    tax: Tax;
    
};
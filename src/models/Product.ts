import { Category } from './Category';
import { ProductType } from '../enums/ProductType';

export interface Product {
    id: number;
    name: string;
    type: ProductType;
    category: Category;
};
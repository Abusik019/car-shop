import { CarsResponse } from "@/app/types";

const BASE_URL = 'https://testing-api.ru-rating.ru';
const ITEMS_PER_PAGE = 12;

export const carAPI = {
    async getCars(page: number, sort?: string): Promise<CarsResponse> {
        const order = sort === "asc" || sort === "desc" ? `&_sort=price&_order=${sort}` : '';
        const url = `${BASE_URL}/cars?_limit=${ITEMS_PER_PAGE}&_page=${page}${order}`;
        
        try {
            const response = await fetch(url);
            if (!response.ok) throw new Error('Network response was not ok');
            return await response.json();
        } catch (error) {
            console.error('Error fetching cars:', error);
            throw error;
        }
    }
};
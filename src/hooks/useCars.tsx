import { useState, useEffect } from 'react';
import { CarsResponse } from '@/app/types';
import { carAPI } from '@/services/api';

interface UseCarsProps {
    page: number;
    sort: string;
    onUpdateTotal: (total: number) => void;
}

export const useCars = ({ page, sort, onUpdateTotal }: UseCarsProps) => {
    const [cars, setCars] = useState<CarsResponse>({ data: [], meta: { total: 0 } });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        const fetchCars = async () => {
            try {
                setLoading(true);
                const data = await carAPI.getCars(page, sort);
                setCars(data);
                if (data.meta?.total) {
                    onUpdateTotal(data.meta.total);
                }
            } catch (err) {
                setError(err instanceof Error ? err : new Error('Unknown error'));
            } finally {
                setLoading(false);
            }
        };

        fetchCars();
    }, [page, sort, onUpdateTotal]);

    return { cars, loading, error };
};
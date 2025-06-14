export interface Car {
    unique_id: number;
    images?: { image: string[] };
    mark_id?: string;
    folder_id?: string;
    body_type?: string;
    drive?: string;
    color?: string;
    price?: string;
    year?: string;
    run?: string;
    availability?: string;
}

export interface CarsResponse {
    data: Car[];
    meta: {
        total: number;
    };
}
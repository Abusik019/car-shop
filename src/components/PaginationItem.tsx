import React from 'react';
import { Pagination } from 'antd';

interface PaginationProps {
    page: number;
    total: number;
    setPage: (page: number) => void;
}

const PaginationItem: React.FC<PaginationProps> = ({ page, total, setPage }) => (
    <Pagination 
        current={page} 
        total={total} 
        onChange={setPage}
        pageSize={12}
        showSizeChanger={false}
    />
);

export default PaginationItem;
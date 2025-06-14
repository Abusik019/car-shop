"use client";

import React from "react";
import { Select } from "antd";

interface SortItemProps {
    value: string;
    setSort: (value: string) => void;
}

const SortItem: React.FC<SortItemProps> = ({ value, setSort }) => (
    <Select
        placeholder="Сортировка"
        allowClear
        style={{ width: 200 }}
        value={value || undefined}
        onChange={(val: unknown) => setSort((val as string) || "")}
        options={[
            { value: "asc", label: "Цена: по возрастанию" },
            { value: "desc", label: "Цена: по убыванию" },
        ]}
    />
);

export default SortItem;
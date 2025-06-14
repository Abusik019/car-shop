"use client";

import { useState } from "react";
import SortItem from "../components/SortItem";
import CarsList from "@/components/CarsListItem";
import PaginationItem from "@/components/PaginationItem";

export default function Home() {
    const [sort, setSort] = useState<string>("");
    const [page, setPage] = useState<number>(1);
    const [total, setTotal] = useState<number>(0);

    const handleUpdateTotal = (newTotal: number) => {
        setTotal(newTotal);
    };

    return (
        <div className="flex flex-col items-center w-full mb-[100px]">
            <div className="w-2/3 flex flex-col items-center justify-start gap-7">
                <div className="w-full h-fit p-4 box-border bg-gray-100 border border-gray-200 rounded-xl">
                    <SortItem setSort={setSort} value={sort}/>
                </div>
                <CarsList sort={sort} page={page} onUpdateTotal={handleUpdateTotal}/>
                {total && <PaginationItem page={page} setPage={setPage} total={total}/>}
            </div>
        </div>
    );
}
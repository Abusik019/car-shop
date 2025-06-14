import { useState } from "react";
import Image from "next/image";
import { useCars } from "@/hooks/useCars";
import { Car } from "@/app/types";
import LoaderItem from "./LoaderItem";
import { formatBigInt } from "@/utils/formatBigInt";

interface CarsListProps {
    sort: string;
    page: number;
    onUpdateTotal: (total: number) => void;
}

const CarItem = ({ car }: { car: Car }) => {
    const [activeImageIndex, setActiveImageIndex] = useState(0);

    const handleImageHover = (position: number) => {
        if (!car.images?.image || car.images.image.length <= 1) return;
        setActiveImageIndex(Math.min(position, car.images.image.length - 1));
    };

    return (
        <li className="w-full flex items-center gap-4 py-4 px-3 box-border border-y border-gray-200 cursor-pointer transition-shadow hover:border-transparent hover:shadow-lg hover:rounded-xl">
            <div className="relative" style={{ width: '205px', height: '154px' }}>
                <Image
                    src={car.images?.image[activeImageIndex] ?? "/placeholder.png"}
                    fill
                    sizes="205px"
                    priority={activeImageIndex === 0} 
                    alt={`${car.mark_id} ${car.folder_id} фото`}
                    style={{ borderRadius: "12px", objectFit: "cover" }}
                    loading={activeImageIndex === 0 ? "eager" : "lazy"}
                />
                <div className="absolute inset-0 grid grid-cols-2 grid-rows-2">
                    {[0, 1, 2, 3].map((position) => (
                        <div
                            key={position}
                            className="cursor-pointer"
                            onMouseEnter={() => handleImageHover(position)}
                        />
                    ))}
                </div>
            </div>
            <div className="flex-1 flex items-start justify-between">
                <div className="w-1/3 h-full flex flex-col items-start gap-4">
                    <h2 className="max-w-full text-lg font-bold truncate">{car.mark_id} {car.folder_id}</h2>
                    <h3 className="opacity-60">{car.body_type}</h3>
                    <h4 className="w-fit text-sm opacity-60">{car.drive ?? "Полный"} <span className="pl-4">{car.color}</span></h4>
                </div>
                <div className="w-[106px] text-xl self-start font-bold">{car.price ? `${formatBigInt(car.price)} ₽` : 'Цена не указана'}</div>
                <div className="text-xl self-start font-medium">{car.year}</div>
                <div className="flex flex-col items-center gap-3">
                    <h2 className="text-base font-semibold">{`${formatBigInt(car.run ?? 0)} км`}</h2>
                    <span className="text-green-600">{car.availability}</span>
                </div>  
            </div>
        </li>
    );
};

const CarsList: React.FC<CarsListProps> = ({ sort, page, onUpdateTotal }) => {
    const { cars, loading, error } = useCars({ sort, page, onUpdateTotal });

    if (loading) return <div className="mt-[200px]"><LoaderItem /></div>;
    if (error) return <div className="text-red-500">Error: {error.message}</div>;
    
    return (
        <ul className="w-full flex flex-col items-center justify-start">
            {cars.data.map((car) => (
                <CarItem key={car.unique_id} car={car} />
            ))}
        </ul>
    );
};

export default CarsList;
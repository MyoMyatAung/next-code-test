"use client"
import { filterList } from '@/app/libs/filterList';
import React, { useState } from 'react'
import { IoFilter } from "react-icons/io5";
import { LuDot } from "react-icons/lu";

const FilterButton = () => {
    const [isFilter, setIsFilter] = useState<boolean>(false);
    const [selectedIndex, setSelectedIndex] = useState<number>(0);

    const handleToggleFilter = () => {
        setIsFilter(prev => !prev);
    }

    const handleSelect = (index: number) => {
        setSelectedIndex(index);
    }

    return (
        <div>
            <button onClick={handleToggleFilter} className="bg-background-light p-2 rounded-lg">
                <IoFilter />
            </button>
            {
                isFilter &&
                <div className='absolute mt-1 bg-background-light right-0 rounded-lg min-w-32'>
                    <p className='text-xs p-2 font-semibold'>Sort By</p>
                    <hr />
                    <ul className='p-2'>
                        {
                            filterList.map((f, index) => {
                                return <li onClick={() => handleSelect(index)} key={index} className={`text-xs my-1 cursor-pointer flex items-center justify-start gap-1`}>
                                    <div className={`${index === selectedIndex ? "block" : "invisible"}`}>
                                        <LuDot className='text-lg' />
                                    </div>
                                    <span>{f}</span>
                                </li>
                            })
                        }
                    </ul>
                </div>
            }
        </div>
    )
}

export default FilterButton
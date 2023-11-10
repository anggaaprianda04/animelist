'use client'

import { MagnifyingGlass } from '@phosphor-icons/react';
import { useRouter } from 'next/navigation';
import React from 'react';

const InputSearch = () => {
    const router = useRouter();
    const searchRef = React.useRef();

    const handleSearch = (event) => {
        event.preventDefault();
        const keyword = searchRef.current.value;
        router.push(`/search/${keyword}`);
    }
    return (
        <div className="relative">
            <input 
                ref={searchRef}
                className='w-64 p-2 mt-2 rounded-md md:mt-0' 
                type="text"
                placeholder="Cari Anime" />
            <button
                onClick={handleSearch}
            >
                <MagnifyingGlass className="absolute top-1 end-3" size={30} />
            </button>
        </div>
    );
}

export default InputSearch;

import Link from 'next/link';
import React from 'react';

const Header = ({title,link}) => {
     return (
        <div className="flex items-center justify-between my-2">
            <p className="text-xl font-bold">{title}</p>
            {link == null ? null : <Link className="text-sm font-semibold hover:text-indigo-600 sm:text-base hover:underline" href={link}>Lihat Semua</Link>}
        </div>
    )
}

export default Header;

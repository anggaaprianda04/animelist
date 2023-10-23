import Link from "next/link"

const Navbar = () => {
    return (
        <div className="flex flex-col justify-between p-2 bg-black md:items-center md:p-4 md:flex-row">
            <Link href="/" className="text-2xl font-bold text-white">MYANIMELIST</Link>
            <input className='w-64 p-2 mt-2 rounded-md md:mt-0' type="text" placeholder="Cari Anime" />
        </div>
    )
}

export default Navbar
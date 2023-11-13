import Link from "next/link"
import InputSearch from "./InputSearch"

const Navbar = () => {
    return (
        <div className="flex flex-col justify-between p-2 bg-color-primary md:items-center md:p-4 md:flex-row">
            <Link href="/" className="text-2xl font-bold text-white">MYANIMELIST</Link>
            <InputSearch />
        </div>
    )
}

export default Navbar
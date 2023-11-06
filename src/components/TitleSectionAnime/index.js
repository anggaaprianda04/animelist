import Link from "next/link"

const TitleSectionAnime = ({title,link}) => {
    return (
        <div className="flex items-center justify-between my-2">
            <p className="text-xl font-bold">{title}</p>
            <Link className="text-sm font-semibold hover:text-indigo-600 sm:text-base hover:underline" href={link}>Lihat Semua</Link>
        </div>
    )
}

export default TitleSectionAnime
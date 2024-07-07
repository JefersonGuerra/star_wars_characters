'use client'
import { useEffect, useState } from 'react'
import CardFavorite from '@/components/CardFavorite'
import ReactPaginate from 'react-paginate'
import { favoriteCharactersType } from '@/types/favoriteCharactersType'
import Link from 'next/link'
import { House } from 'lucide-react'

export default function Favorites() {

    const [page, setPage] = useState<number>(1);
    const [countPage, setCountPage] = useState<number>(1);
    const [dataCharacters, setCharacters] = useState<favoriteCharactersType>();

    function setDataCharacters(pageNumber: number) {
        const storagedCharacters = localStorage.getItem("favoriteCharacters");
        if (storagedCharacters) {
            setCountPage(Math.ceil(JSON.parse(storagedCharacters).length / 10))
            setCharacters(JSON.parse(storagedCharacters).slice((pageNumber - 1) * 10, pageNumber * 10))
            setPage(pageNumber)
        }
    }

    function removeFavoriteCharacters(characters: string) {

        let localSave = localStorage.getItem("favoriteCharacters");

        if (localSave) {
            const newArrayFavorites = JSON.parse(localSave).filter((item: any) => item.url !== characters)
            localStorage.setItem("favoriteCharacters", JSON.stringify(newArrayFavorites));
            setCharacters(newArrayFavorites.slice((page - 1) * 10, page * 10))
            setCountPage(Math.ceil(newArrayFavorites.length / 10))
        }
    }

    useEffect(() => {
        setDataCharacters(1)
    }, [])

    return (
        <main>
            <div className='w-full flex justify-center items-center mb-7'>
                <Link href="/" className='p-[14px] border-[1px] border-[#1f1f1f] rounded-[8px] text-white flex items-center hover:bg-[#1f1f1f]'>
                    <House className={`w-[15px] h-[15px] mr-1`} />
                    Home
                </Link>
            </div>
            <div className="w-full grid grid-cols-1 min-[400px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                <CardFavorite data={dataCharacters} removeFav={(param) => removeFavoriteCharacters(param)} />
            </div>
            <div className="w-full py-[20px] flex justify-center">
                <ReactPaginate
                    className="paginate-library"
                    breakLabel="..."
                    nextLabel=""
                    onPageChange={(e) => { setDataCharacters(e.selected + 1) }}
                    pageRangeDisplayed={5}
                    pageCount={countPage}
                    previousLabel=""
                />
            </div>
        </main>
    )
}

'use client'
import { useEffect, useState } from 'react'
import CardFavorite from '@/components/CardFavorite'
import ReactPaginate from 'react-paginate'
import { favoriteCharactersType } from '@/types/favoriteCharactersType'

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
            <div className='w-full float-left my-7'>
                <p className='w-full float-left text-[60px] text-center text-color_12 font-[star-jediregular] [text-shadow:_0_3px_0_rgb(255_0_0_/_50%)]'>@</p>
            </div>
            <div className="w-full grid grid-cols-4 gap-4">
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

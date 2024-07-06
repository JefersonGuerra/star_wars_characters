'use client'
import { useEffect, useState } from 'react'
import CardFavorite from '@/components/CardFavorite'
import ReactPaginate from 'react-paginate'

export default function Favorites() {

    const [page, setPage] = useState<number>(1);
    const [countPage, setCountPage] = useState<number>(1);

    useEffect(() => {
        const storagedCharacters = localStorage.getItem("favoriteCharacters");
        if (storagedCharacters) {
            setCountPage(Math.ceil(JSON.parse(storagedCharacters).length / 10))
        }
    }, [])

    return (
        <main>
            <div className='w-full float-left my-7'>
                <p className='w-full float-left text-[60px] text-center text-color_12 font-[star-jediregular] [text-shadow:_0_3px_0_rgb(255_0_0_/_50%)]'>@</p>
            </div>
            <div className="w-full grid grid-cols-4 gap-4">
                <CardFavorite page={page} />
            </div>
            <div className="w-full py-[20px] flex justify-center">
                <ReactPaginate
                    className="paginate-library"
                    breakLabel="..."
                    nextLabel=""
                    onPageChange={(e) => { setPage(e.selected + 1) }}
                    pageRangeDisplayed={5}
                    pageCount={countPage}
                    previousLabel=""
                />
            </div>
        </main>
    )
}

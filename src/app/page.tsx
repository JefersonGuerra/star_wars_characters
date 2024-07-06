'use client'
import { useEffect, useState, Suspense } from 'react'
import { getCharacters } from '@/actions/getCharacters'
import Card from '@/components/Card';
import ReactPaginate from 'react-paginate';
import { charactersType } from '@/types/charactersType'
import LoadingRing from '@/components/LoadingRing'

export default function Home() {

  const [dataCharacters, setDataCharacters] = useState<charactersType>();
  const [loading, setLoading] = useState<boolean>(true);

  async function setPage(page?: number) {
    setLoading(true)
    const data = await getCharacters(page);
    setDataCharacters(data)
    setLoading(false)
  }

  useEffect(() => {
    setPage()
  }, [])

  return (
    <main>
      <div className='w-full float-left my-7'>
        <p className='w-full float-left text-[60px] text-center text-color_12 font-[star-jediregular] [text-shadow:_0_3px_0_rgb(255_0_0_/_50%)]'>@</p>
      </div>
      {loading ?
        <div className='w-full flex justify-center items-center'>
          <LoadingRing className="w-[50px] h-[50px] lds-ring" border="border-[5px] border-[#ff000080_transparent_transparent_transparent]" />
        </div>
        :
        <div className="w-full grid grid-cols-4 gap-4">
          <Card data={dataCharacters} />
        </div>
      }
      <div className="w-full py-[20px] flex justify-center">
        <ReactPaginate
          className="paginate-library"
          breakLabel="..."
          nextLabel=""
          onPageChange={(e) => { setPage(e.selected + 1) }}
          pageRangeDisplayed={5}
          pageCount={9}
          previousLabel=""
        />
      </div>
    </main>
  );
}

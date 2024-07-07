'use client'
import { useEffect, useState, Suspense } from 'react'
import { getCharacters } from '@/actions/getCharacters'
import Card from '@/components/Card';
import ReactPaginate from 'react-paginate';
import { charactersType } from '@/types/charactersType'
import LoadingRing from '@/components/LoadingRing'
import Link from 'next/link'
import { Crown } from "lucide-react";

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
      <div className='w-full flex justify-center items-center mb-7'>
        <Link href="/favorites" className='p-[14px] border-[1px] border-[#1f1f1f] rounded-[8px] text-white flex items-center hover:bg-[#1f1f1f]'>
          <Crown className={`w-[15px] h-[15px] mr-1`} />
          Favorites
        </Link>
      </div>
      {loading ?
        <div className='w-full flex justify-center items-center'>
          <LoadingRing className="w-[50px] h-[50px] lds-ring" border="border-[5px] border-[#ff000080_transparent_transparent_transparent]" />
        </div>
        :
        <div className="w-full grid grid-cols-1 min-[400px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
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

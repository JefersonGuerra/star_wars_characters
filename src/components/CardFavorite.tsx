'use client'
import { useEffect, useState } from 'react';
import Image from 'next/image'
import { favoriteCharactersType } from '@/types/favoriteCharactersType'

export default function CardFavorite() {
    
    const [dataCharacters, setCharacters] = useState<favoriteCharactersType>();

    function setDataCharacters(){
        const storagedCharacters = localStorage.getItem("favoriteCharacters");
        if(storagedCharacters){
            setCharacters(JSON.parse(storagedCharacters))
        }
    }

    useEffect(() => {
        setDataCharacters();
    }, [])

  return (
    dataCharacters?.map(item => {
      return (
        <div key={`${item.url.split('/')[5]}`} className="w-full float-left bg-white border-[3px] border-color_1 rounded-[16px] overflow-hidden shadow-2xl">
          <div className="w-full float-left relative" >
            <Image width={400} height={550} priority={true} src={`/img/people/${item.url.split('/')[5]}.jpg`} alt={`${item.name}`} />
            <p className="w-full float-left font-[montserratbold] text-[25px] text-center text-color_9 px-[15px] [text-shadow:_0_3px_0_rgb(255_0_0_/_50%)] mt-5">{item.name}</p>
            <p className="w-full float-left font-[montserratbold] text-[16px] text-black px-[15px] mt-3">Height: <span className='font-[montserratregular] text-color_5'>{item.height}</span></p>
            <p className="w-full float-left font-[montserratbold] text-[16px] text-black px-[15px] mt-1">Mass: <span className='font-[montserratregular] text-color_5'>{item.mass}</span></p>
            <p className="w-full float-left font-[montserratbold] text-[16px] text-black px-[15px] mt-1">Hair color: <span className='font-[montserratregular] text-color_5'>{item.hair_color}</span></p>
            <p className="w-full float-left font-[montserratbold] text-[16px] text-black px-[15px] mt-1">Skin color: <span className='font-[montserratregular] text-color_5'>{item.skin_color}</span></p>
            <p className="w-full float-left font-[montserratbold] text-[16px] text-black px-[15px] mt-1">Eye color: <span className='font-[montserratregular] text-color_5'>{item.eye_color}</span></p>
            <p className="w-full float-left font-[montserratbold] text-[16px] text-black px-[15px] mt-1">Birth year: <span className='font-[montserratregular] text-color_5'>{item.birth_year}</span></p>
            <p className="w-full float-left font-[montserratbold] text-[16px] text-black px-[15px] mt-1 mb-5">Gender: <span className='font-[montserratregular] text-color_5'>{item.gender}</span></p>
          </div >
        </div >
      )
    })
  )
}
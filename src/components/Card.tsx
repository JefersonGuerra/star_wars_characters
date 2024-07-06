import Image from 'next/image'

export default function Card() {
  return (
    <div className="w-full float-left bg-white border-[3px] border-color_1 rounded-[16px] overflow-hidden shadow-2xl">
      <div className="w-full float-left relative">
        <Image width={400} height={550} src={'/img/people/1.jpg'} alt="img" />
        <div className="w-full float-left flex items-center mt-[14px] mb-[10px]">
          <p className="w-full float-left font-[montserratsemibold] text-[11px] text-color_3 px-[15px]"></p>
        </div>
        <p className="w-full float-left font-[star-jediregular] text-[20px] text-center text-color_9 px-[15px] [text-shadow:_0_3px_0_rgb(255_0_0_/_50%)]">Luke Skywalker</p>
        <p className="w-full float-left font-[star-jediregular] text-[16px] text-black px-[15px] mt-3">Height: <span className='font-[montserratsemibold] text-color_5'>172</span></p>
        <p className="w-full float-left font-[star-jediregular] text-[16px] text-black px-[15px] mt-1">Mass: <span className='font-[montserratsemibold] text-color_5'>77</span></p>
        <p className="w-full float-left font-[star-jediregular] text-[16px] text-black px-[15px] mt-1">Hair color: <span className='font-[montserratsemibold] text-color_5'>blond</span></p>
        <p className="w-full float-left font-[star-jediregular] text-[16px] text-black px-[15px] mt-1">Skin color: <span className='font-[montserratsemibold] text-color_5'>fair</span></p>
        <p className="w-full float-left font-[star-jediregular] text-[16px] text-black px-[15px] mt-1">Eye color: <span className='font-[montserratsemibold] text-color_5'>blue</span></p>
        <p className="w-full float-left font-[star-jediregular] text-[16px] text-black px-[15px] mt-1">Birth year: <span className='font-[montserratsemibold] text-color_5'>19BBY</span></p>
        <p className="w-full float-left font-[star-jediregular] text-[16px] text-black px-[15px] mt-1 mb-5">Gender: <span className='font-[montserratsemibold] text-color_5'>male</span></p>
      </div>
    </div>
  )
}

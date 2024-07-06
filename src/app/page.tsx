import Card from '@/components/Card';

export default function Home() {
  return (
    <main>
      <div className='w-full float-left my-7'>
        <p className='w-full float-left text-[60px] text-center text-color_12 font-[star-jediregular] [text-shadow:_0_3px_0_rgb(255_0_0_/_50%)]'>@</p>
      </div>
      <div className="w-full grid grid-cols-4 gap-4">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </main>
  );
}

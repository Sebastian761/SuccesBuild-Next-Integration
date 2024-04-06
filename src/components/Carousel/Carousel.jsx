import dynamic from 'next/dynamic'

const CarouselClient = dynamic(() => import('./CarouselClient'), {
  ssr: false,
})

function Carousel() {
  return <CarouselClient />
}

export default Carousel
import getAllComponents from '../lib/getAllArticles.jsx'
import HeroSection from '../app/components/HeroSection.jsx'
import ParallaxSection from '../app/components/ParallaxSection.jsx'

export default async function Home() {

  const data = await getAllComponents();

  return (

    <main>
      <HeroSection/>
      <ParallaxSection data={data}/>
    </main>
  )
}

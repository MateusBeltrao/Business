import Navbar from '@/src/components/Navbar/Navbar';
import './page.css'
import Hero from '@/src/components/Hero/Hero';
import BrandingVideo from '@/src/components/BrandingVideo/BrandingVideo';
export default function Home() {

  return (
    <div className="app">
      <Navbar></Navbar>
      <Hero></Hero>
      <BrandingVideo></BrandingVideo>
    </div>
  );
}

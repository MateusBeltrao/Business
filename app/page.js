import Navbar from '@/src/components/Navbar/Navbar';
import './page.css'
import Hero from '@/src/components/Hero/Hero';
export default function Home() {

  return (
    <div className="app">
      <Navbar></Navbar>
      <Hero></Hero>
    </div>
  );
}

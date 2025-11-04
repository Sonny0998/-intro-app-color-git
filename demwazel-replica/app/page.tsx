import Header from '@/components/Header';
import Hero from '@/components/Hero';
import FourAreas from '@/components/FourAreas';
import About from '@/components/About';
import TrainingAreas from '@/components/TrainingAreas';
import CTABanner from '@/components/CTABanner';
import Statistics from '@/components/Statistics';
import Join from '@/components/Join';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <FourAreas />
        <About />
        <TrainingAreas />
        <CTABanner />
        <Statistics />
        <Join />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}

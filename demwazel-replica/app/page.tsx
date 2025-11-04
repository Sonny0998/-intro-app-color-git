import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ThreePillars from '@/components/ThreePillars';
import About from '@/components/About';
import Programs from '@/components/Programs';
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
        <ThreePillars />
        <About />
        <Programs />
        <CTABanner />
        <Statistics />
        <Join />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}

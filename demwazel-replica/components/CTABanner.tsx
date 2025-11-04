import Link from 'next/link';

export default function CTABanner() {
  return (
    <section className="py-20 bg-gradient-to-r from-pink-600 to-pink-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
          AGISSEZ MAINTENANT POUR L&apos;AVENIR
        </h2>
        <p className="text-xl text-white mb-8 max-w-2xl mx-auto opacity-95">
          Votre contribution transforme des vies et construit un avenir meilleur 
          pour les jeunes filles.
        </p>
        <Link
          href="#don"
          className="inline-block bg-white text-pink-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
        >
          Donnez maintenant
        </Link>
      </div>
    </section>
  );
}

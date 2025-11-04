import Link from 'next/link';

export default function Hero() {
  return (
    <section id="accueil" className="relative pt-20 bg-gradient-to-br from-pink-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            DONNONS DU ZÈLE À NOS ELLES!
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed max-w-3xl mx-auto">
            Nous œuvrons pour promouvoir l&apos;émancipation, l&apos;autonomisation et le bien-être 
            des jeunes filles à travers l&apos;éducation, la protection et l&apos;engagement communautaire.
          </p>
          <Link
            href="#don"
            className="inline-block bg-pink-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-pink-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Donnez maintenant
          </Link>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
}

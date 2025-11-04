import Link from 'next/link';

export default function Hero() {
  return (
    <section id="accueil" className="relative pt-20 bg-gradient-to-br from-blue-50 via-green-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            ÉDUCATION ET DÉVELOPPEMENT POUR LE PROGRÈS D&apos;HAÏTI
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed max-w-3xl mx-auto">
            EDHA est une organisation non gouvernementale dédiée à l&apos;autonomisation et au développement 
            holistique des jeunes haïtiens à travers l&apos;éducation, la formation technique et la promotion 
            du développement social et économique.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="#programmes"
              className="inline-block bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Découvrez nos programmes
            </Link>
            <Link
              href="#don"
              className="inline-block bg-green-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-green-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Soutenez notre mission
            </Link>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
}

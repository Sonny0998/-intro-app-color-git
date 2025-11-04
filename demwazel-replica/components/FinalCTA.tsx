import Link from 'next/link';

export default function FinalCTA() {
  return (
    <section id="don" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            PARTICIPEZ À NOTRE MISSION
          </h2>
          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
            Chaque geste compte. Votre soutien fait la différence dans la vie 
            des jeunes haïtiens que nous accompagnons.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white p-8 rounded-lg shadow-md text-center">
            <div className="text-4xl mb-4">🤝</div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Bénévolat</h3>
            <p className="text-gray-700 mb-4">
              Contribuez de votre temps et de vos compétences pour faire la différence.
            </p>
            <Link
              href="#benevoles"
              className="inline-block text-blue-600 font-semibold hover:text-blue-700"
            >
              En savoir plus →
            </Link>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-md text-center">
            <div className="text-4xl mb-4">💝</div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Dons</h3>
            <p className="text-gray-700 mb-4">
              Contribuez financièrement à nos programmes éducatifs et bourses d&apos;études.
            </p>
            <Link
              href="#donation"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-colors font-semibold"
            >
              Faire un don
            </Link>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-md text-center">
            <div className="text-4xl mb-4">🤲</div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Partenariats</h3>
            <p className="text-gray-700 mb-4">
              Collaborez avec nous pour étendre notre portée et notre impact.
            </p>
            <Link
              href="#partenaires"
              className="inline-block text-blue-600 font-semibold hover:text-blue-700"
            >
              Devenir partenaire →
            </Link>
          </div>
        </div>
        
        <div className="text-center">
          <p className="text-gray-600 mb-4">
            Pour plus d&apos;informations, contactez-nous :
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-gray-700">
            <a href="mailto:info@edha.org" className="hover:text-blue-600 font-semibold">
              📧 info@edha.org
            </a>
            <span className="hidden sm:inline">•</span>
            <a href="tel:+509XXXXXXXX" className="hover:text-blue-600 font-semibold">
              📞 +509 XXXX-XXXX
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

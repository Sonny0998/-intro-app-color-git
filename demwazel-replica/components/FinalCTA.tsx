import Link from 'next/link';

export default function FinalCTA() {
  return (
    <section id="don" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
          PARTICIPEZ À NOTRE MISSION
        </h2>
        <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
          Chaque geste compte. Votre soutien fait la différence dans la vie 
          des jeunes filles que nous accompagnons.
        </p>
        <Link
          href="#donation"
          className="inline-block bg-pink-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-pink-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
        >
          Donnez maintenant
        </Link>
      </div>
    </section>
  );
}

export default function About() {
  return (
    <section id="apropos" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            À PROPOS D&apos;EDHA
          </h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Notre Mission</h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              La mission d&apos;EDHA est de fournir une éducation accessible, une formation professionnelle 
              et de promouvoir le développement humain en Haïti, en mettant un accent particulier sur les 
              jeunes les plus vulnérables.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Nous nous efforçons de garantir que chaque jeune, indépendamment de sa situation socio-économique, 
              ait la possibilité de recevoir une éducation de qualité et de développer les compétences nécessaires 
              pour réussir dans un monde globalisé.
            </p>
            <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Notre Vision</h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              Construire un Haïti prospère et durable, où chaque jeune, quel que soit son origine, ait accès 
              à des opportunités éducatives qui lui permettent de transformer sa vie et de contribuer au progrès 
              de sa communauté.
            </p>
          </div>
          <div className="bg-gradient-to-br from-blue-100 to-green-100 rounded-lg h-96 flex items-center justify-center">
            <div className="text-center p-8">
              <div className="text-6xl mb-4">🎓📚</div>
              <p className="text-gray-800 font-bold text-xl mb-2">
                EDHA Academy
              </p>
              <p className="text-gray-700 font-semibold">
                Éducation • Formation • Développement
              </p>
              <p className="text-gray-600 mt-4">
                Ensemble, construisons l&apos;avenir d&apos;Haïti
              </p>
            </div>
          </div>
        </div>
        
        {/* Values Section */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Nos Valeurs</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-3xl mb-3">⚖️</div>
              <h4 className="font-bold text-gray-900 mb-2">Équité et Justice Sociale</h4>
              <p className="text-gray-700 text-sm">
                Une société plus juste où chaque jeune a droit à une éducation digne et accessible.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-3xl mb-3">💡</div>
              <h4 className="font-bold text-gray-900 mb-2">Innovation et Excellence</h4>
              <p className="text-gray-700 text-sm">
                Méthodes éducatives innovantes qui encouragent la créativité et l&apos;adaptation au changement.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-3xl mb-3">🤝</div>
              <h4 className="font-bold text-gray-900 mb-2">Engagement et Responsabilité</h4>
              <p className="text-gray-700 text-sm">
                Transparence et dévotion pour l&apos;amélioration continue et l&apos;impact positif.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-3xl mb-3">🌱</div>
              <h4 className="font-bold text-gray-900 mb-2">Durabilité et Autonomisation</h4>
              <p className="text-gray-700 text-sm">
                Solutions à long terme qui favorisent le développement durable en Haïti.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

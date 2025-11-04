export default function FourAreas() {
  const areas = [
    {
      number: '01',
      title: 'ÉDUCATION ET FORMATION INTÉGRALE',
      description: 'Garantir l\'accès à une éducation de base et secondaire de qualité, combinant connaissances académiques et compétences pratiques pour préparer les jeunes aux défis du futur.',
    },
    {
      number: '02',
      title: 'FORMATION TECHNIQUE ET PROFESSIONNELLE',
      description: 'Proposer des programmes de formation en technologie, entrepreneuriat, santé communautaire et métiers techniques pour stimuler l\'emploi et le développement économique.',
    },
    {
      number: '03',
      title: 'LEADERSHIP ET AUTONOMISATION DES JEUNES',
      description: 'Favoriser le leadership, la responsabilité sociale et la participation active des jeunes comme agents de changement dans leurs communautés.',
    },
    {
      number: '04',
      title: 'DÉVELOPPEMENT COMMUNAUTAIRE ET DURABILITÉ',
      description: 'Promouvoir des projets dans les domaines de la santé, de l\'environnement, de l\'égalité de genre et du développement durable pour améliorer la qualité de vie des communautés vulnérables.',
    },
  ];

  return (
    <section id="programmes" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            NOS DOMAINES D&apos;ACTION
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            EDHA intervient dans quatre domaines stratégiques pour garantir un développement 
            holistique et durable des jeunes haïtiens.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {areas.map((area) => (
            <div
              key={area.number}
              className="p-8 rounded-lg border border-gray-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-white to-gray-50"
            >
              <div className="text-5xl md:text-6xl font-bold text-blue-600 mb-6 opacity-20">
                {area.number}
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                {area.title}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {area.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

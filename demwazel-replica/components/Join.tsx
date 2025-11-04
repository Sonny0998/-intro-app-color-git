import Link from 'next/link';

export default function Join() {
  const cards = [
    {
      title: 'Pour les Étudiants',
      description:
        'Inscrivez-vous gratuitement à nos programmes de formation et bénéficiez d\'une éducation de qualité, d\'un mentorat et d\'opportunités de développement personnel et professionnel.',
      buttonText: 'Inscrivez-vous',
      buttonHref: '#inscription-etudiants',
    },
    {
      title: 'Pour les Bénévoles',
      description:
        'Partagez votre temps, vos compétences et votre passion pour l\'éducation. Devenez formateur, mentor ou contribuez à nos projets communautaires.',
      buttonText: 'Rejoignez-nous',
      buttonHref: '#inscription-benevoles',
    },
    {
      title: 'Pour les Partenaires',
      description:
        'Organisations, entreprises et institutions : collaborez avec nous pour amplifier notre impact et créer des opportunités durables pour les jeunes haïtiens.',
      buttonText: 'Partenariat',
      buttonHref: '#inscription-partenaires',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            REJOIGNEZ NOTRE IMPACT
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Votre soutien est essentiel pour poursuivre notre mission. Il existe plusieurs 
            façons de collaborer avec EDHA et de faire partie du changement en Haïti.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 flex flex-col"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4 min-h-[60px]">
                {card.title}
              </h3>
              <p className="text-gray-700 mb-6 flex-grow leading-relaxed">
                {card.description}
              </p>
              <Link
                href={card.buttonHref}
                className="block text-center bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-colors duration-200 font-semibold"
              >
                {card.buttonText}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

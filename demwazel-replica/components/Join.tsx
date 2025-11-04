import Link from 'next/link';

export default function Join() {
  const cards = [
    {
      title: 'Pour les Filles et Jeunes Femmes',
      description:
        'Inscrivez-vous gratuitement pour bénéficier de notre programme de mentorat et de nos ateliers de formation.',
      buttonText: 'Inscris-toi',
      buttonHref: '#inscription-filles',
    },
    {
      title: 'Pour les Mentors et Professionnels',
      description:
        'Partagez votre expérience et vos connaissances pour aider les jeunes filles à réaliser leurs rêves.',
      buttonText: 'Inscris-toi',
      buttonHref: '#inscription-mentors',
    },
    {
      title: 'Pour les Partenaires',
      description:
        'Devenez sponsor ou soutenez nos activités pour amplifier notre impact dans les communautés.',
      buttonText: 'Inscris-toi',
      buttonHref: '#inscription-partenaires',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            REJOINDRE DEMWAZÈL
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Rejoignez-nous et faites partie des histoires inspirantes de vies transformées.
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
                className="block text-center bg-pink-600 text-white px-6 py-3 rounded-full hover:bg-pink-700 transition-colors duration-200 font-semibold"
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

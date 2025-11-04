export default function Programs() {
  const programs = [
    {
      title: 'Programmes Éducatifs et Ateliers Pratiques',
      items: [
        'Ateliers sur les carrières non traditionnelles',
        'Formation en leadership et confiance en soi',
        'Développement des compétences professionnelles',
      ],
    },
    {
      title: 'Programme de Mentorat "DEMWAZÈL, LET\'S TALK!"',
      items: [
        'Ligne d\'orientation professionnelle',
        'Jumelage avec des mentors locaux et internationaux',
        'Sessions individuelles et de groupe',
      ],
    },
    {
      title: 'Campagnes de Sensibilisation',
      items: [
        'Klinik Mobil-Haiti : Consultations gratuites',
        'Miss Reglos : Promotion de l\'hygiène menstruelle',
        'Kanpay Bouske Rèv ou : Encouragement à l\'éducation',
      ],
    },
  ];

  return (
    <section id="initiatives" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            NOS PROGRAMMES ET PROJETS
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Depuis 2019, nous avons impacté des centaines de filles en Haïti, au Bénin 
            et à l&apos;international à travers nos programmes innovants.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-6 min-h-[60px]">
                {program.title}
              </h3>
              <ul className="space-y-3">
                {program.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start">
                    <span className="text-pink-600 mr-2 mt-1">•</span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

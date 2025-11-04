export default function TrainingAreas() {
  const trainingAreas = [
    {
      icon: '🎓',
      title: 'Éducation Académique et Appui Scolaire',
      items: [
        'Alphabétisation et éducation de base',
        'Renforcement en mathématiques, sciences et langues',
        'Préparation aux examens nationaux et internationaux',
        'Techniques d\'étude et apprentissage autonome',
      ],
    },
    {
      icon: '💻',
      title: 'Technologie et Transformation Digitale',
      items: [
        'Fondamentaux de l\'informatique',
        'Bureautique (Word, Excel, PowerPoint)',
        'Développement web et design graphique',
        'Programmation (HTML, CSS, JavaScript, Python)',
        'Maintenance et réparation d\'ordinateurs',
        'Intelligence Artificielle et nouvelles technologies',
      ],
    },
    {
      icon: '💼',
      title: 'Entrepreneuriat et Affaires',
      items: [
        'Comment démarrer votre propre entreprise',
        'Planification financière et gestion de budgets',
        'Marketing digital et réseaux sociaux',
        'Commerce électronique',
        'Innovation sociale et startups communautaires',
      ],
    },
    {
      icon: '👷',
      title: 'Formation Technique et Professionnelle',
      items: [
        'Électricité résidentielle',
        'Plomberie et fontainerie',
        'Réparation de téléphones portables',
        'Menuiserie et construction',
        'Agriculture urbaine et durable',
        'Mécanique de base (motos et voitures)',
      ],
    },
    {
      icon: '💊',
      title: 'Santé et Bien-être Communautaire',
      items: [
        'Premiers secours',
        'Promotion de la santé et prévention des maladies',
        'Santé sexuelle et reproductive',
        'Nutrition et alimentation saine',
        'Soutien psychosocial et santé mentale',
      ],
    },
    {
      icon: '🗣️',
      title: 'Langues et Communication',
      items: [
        'Kreyòl pour alphabétisation et communication',
        'Français de base, intermédiaire et avancé',
        'Espagnol comme seconde langue',
        'Anglais pour débutants et professionnels',
        'Techniques de communication efficace',
        'Rédaction académique et professionnelle',
      ],
    },
    {
      icon: '🧠',
      title: 'Développement Personnel et Leadership',
      items: [
        'Intelligence émotionnelle',
        'Gestion du temps et productivité',
        'Prise de décision et pensée critique',
        'Leadership jeunesse et responsabilité sociale',
        'Résolution de conflits et travail d\'équipe',
      ],
    },
    {
      icon: '🌱',
      title: 'Éducation pour le Développement Durable',
      items: [
        'Environnement et changement climatique',
        'Gestion des déchets et recyclage',
        'Énergies renouvelables',
        'Éducation civique et droits humains',
        'Participation communautaire et citoyenneté active',
      ],
    },
    {
      icon: '👩‍🏫',
      title: 'Formation Pédagogique et Enseignement',
      items: [
        'Didactique pour enseignants communautaires',
        'Outils numériques pour l\'éducation',
        'Inclusion éducative et attention à la diversité',
        'Conception de matériels didactiques',
      ],
    },
  ];

  return (
    <section id="formations" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            DOMAINES DE FORMATION EDHA ACADEMY
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            EDHA Academy propose une formation complète et diversifiée pour préparer les jeunes 
            haïtiens aux défis du 21ème siècle et leur permettre de contribuer activement au 
            développement de leur pays.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {trainingAreas.map((area, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="text-4xl mb-4">{area.icon}</div>
              <h3 className="text-lg font-bold text-gray-900 mb-4 min-h-[56px]">
                {area.title}
              </h3>
              <ul className="space-y-2">
                {area.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start text-sm">
                    <span className="text-blue-600 mr-2 mt-1 flex-shrink-0">•</span>
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

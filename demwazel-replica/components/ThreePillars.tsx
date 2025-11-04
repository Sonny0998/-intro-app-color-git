export default function ThreePillars() {
  const pillars = [
    {
      number: '01',
      title: 'ÉDUCATION & AUTONOMISATION',
      description: 'Formation et mentorat à travers l\'éducation et le renforcement des capacités.',
    },
    {
      number: '02',
      title: 'PROTECTION & BIEN-ÊTRE',
      description: 'Soutien psychosocial et initiatives de protection contre les violences.',
    },
    {
      number: '03',
      title: 'ENGAGEMENT & IMPACT SOCIAL',
      description: 'Encourager les filles à devenir des agents de changement dans leurs communautés.',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {pillars.map((pillar) => (
            <div
              key={pillar.number}
              className="text-center p-8 rounded-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="text-6xl md:text-7xl font-bold text-pink-600 mb-6 opacity-20">
                {pillar.number}
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                {pillar.title}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

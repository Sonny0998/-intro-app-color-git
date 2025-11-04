export default function About() {
  return (
    <section id="apropos" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            À PROPOS DE DEMWAZEL
          </h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Demwazel est une organisation non gouvernementale internationale dédiée à 
              l&apos;autonomisation et au bien-être des jeunes filles et des femmes.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Depuis notre création, nous travaillons sans relâche pour créer des opportunités 
              d&apos;éducation, de protection et d&apos;engagement communautaire qui transforment 
              des vies et construisent un avenir meilleur.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Notre mission est de donner aux jeunes filles les outils, les connaissances et 
              le soutien dont elles ont besoin pour réaliser leur plein potentiel et devenir 
              des leaders dans leurs communautés.
            </p>
          </div>
          <div className="bg-pink-100 rounded-lg h-96 flex items-center justify-center">
            <div className="text-center p-8">
              <div className="text-6xl mb-4">👧🏾</div>
              <p className="text-gray-700 font-semibold">
                Empowering Girls, Transforming Communities
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

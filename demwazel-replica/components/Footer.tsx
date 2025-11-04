'use client';

import Link from 'next/link';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About Us */}
          <div>
            <h3 className="text-xl font-bold mb-4">À Propos d&apos;EDHA</h3>
            <p className="text-gray-400 leading-relaxed">
              EDHA est une organisation non gouvernementale dédiée à l&apos;autonomisation 
              et au développement holistique des jeunes haïtiens à travers l&apos;éducation, 
              la formation technique et la promotion du développement social et économique.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Liens Rapides</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#accueil" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Accueil
                </Link>
              </li>
              <li>
                <Link href="#apropos" className="text-gray-400 hover:text-blue-400 transition-colors">
                  À propos
                </Link>
              </li>
              <li>
                <Link href="#programmes" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Programmes
                </Link>
              </li>
              <li>
                <Link href="#formations" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Formations
                </Link>
              </li>
              <li>
                <Link href="#don" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Faire un don
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contactez-Nous</h3>
            <ul className="space-y-3 text-gray-400">
              <li>
                <strong className="text-white">Adresse:</strong>
                <br />
                Port-au-Prince, Haïti
              </li>
              <li>
                <strong className="text-white">Téléphone:</strong>
                <br />
                <a href="tel:+509XXXXXXXX" className="hover:text-blue-400 transition-colors">
                  +509 XXXX-XXXX
                </a>
              </li>
              <li>
                <strong className="text-white">Email:</strong>
                <br />
                <a href="mailto:info@edha.org" className="hover:text-blue-400 transition-colors">
                  info@edha.org
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2025 EDHA - Éducation et Développement pour le Progrès d&apos;Haïti. Tous droits réservés.
          </p>
          <button
            onClick={scrollToTop}
            className="text-blue-400 hover:text-blue-300 transition-colors font-semibold text-sm"
          >
            Retour en haut ↑
          </button>
        </div>
      </div>
    </footer>
  );
}

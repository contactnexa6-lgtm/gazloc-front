"use client";
import dynamic from 'next/dynamic';
import Link from "next/link"; 

const MapDynamique = dynamic(() => import('./components/MapDynamique'), {
  ssr: false, // Désactive le rendu serveur pour la carte
  loading: () => <div className="h-full w-full bg-gray-100 animate-pulse flex items-center justify-center text-gray-400">Chargement de la carte...</div>
});
export default function PageAccueil() {
  return (
    <div className="flex min-h-screen flex-col bg-[#0B0F19] text-white font-sans antialiased">
      
      {/* NAVBAR */}
      <nav className="flex items-center justify-between px-12 py-6 bg-[#0B0F19] border-b border-gray-800">
        {/* LOGO CORRIGÉ : Plus grand, anneau orange + point au milieu */}
        <div className="flex items-center gap-3 cursor-pointer select-none">
          <div className="relative flex items-center justify-center h-6 w-6 rounded-full border-2 border-[#FF5722]">
            <div className="h-2 w-2 rounded-full bg-[#FF5722]"></div>
          </div>
          <span className="text-2xl font-bold tracking-tight text-white">GazLoc</span>
        </div>

        {/* MENU */}
        <div className="flex items-center gap-8">
          <a href="#" className="text-sm font-medium text-white hover:text-[#FF5722] transition-colors">Accueil</a>
          <Link href="/devenir-depot" className="text-sm font-medium text-white hover:text-[#FF5722] transition-colors">
            Devenir Partenaire
          </Link>
          <Link href="/connexion" className="rounded-md bg-[#FF5722] px-4 py-2 text-sm font-semibold text-white hover:bg-[#e04e1f] transition-colors">
           Connexion 
          </Link>
        </div>
      </nav>

      {/* HERO SECTION */}
      <main className="flex flex-1 items-center justify-between px-20 py-16 max-w-7xl mx-auto w-full gap-12">
        
        {/* GAUCHE : TEXTES ET BOUTONS */}
        <div className="flex-1 max-w-xl">
          {/* Badge */}
          <span className="inline-block rounded-full bg-[#FF5722]/10 border border-[#FF5722]/20 px-3 py-1 text-xs font-semibold text-[#FF5722] uppercase tracking-wider mb-6">
            • STOCK EN TEMPS RÉEL
          </span>
          
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl leading-tight text-white">
            Le gaz domestique, <span className="text-[#FF5722]">sans rupture ni file d'attente.</span>
          </h1>
          
          <p className="mt-6 text-gray-400 text-base leading-relaxed">
            Consultez la disponibilité réelle des bouteilles dans les dépôts près de chez vous et passez commande en quelques secondes. Livraison suivie, paiement sécurisé.
          </p>

          {/* ACTIONS */}
          <div className="mt-8 flex items-center gap-4">
            <button className="rounded-md bg-[#FF5722] px-6 py-3 text-sm font-semibold text-white hover:bg-[#e04e1f] transition-all shadow-lg shadow-[#FF5722]/20">
              Commander maintenant →
            </button>
            <Link href="/devenir-depot" className="rounded-md bg-gray-800/80 border border-gray-700 px-6 py-3 text-sm font-semibold text-gray-300 hover:bg-gray-700 hover:text-white transition-all">
              Devenir dépôt partenaire
            </Link>
          </div>

          {/* PETITS CHIFFRES STATS */}
          <div className="mt-12 flex gap-8 border-t border-gray-800 pt-8">
            <div>
              <div className="text-2xl font-bold text-white">128</div>
              <div className="text-xs text-gray-500 mt-1">Dépôts partenaires</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-white">34</div>
              <div className="text-xs text-gray-500 mt-1">Quartiers couverts</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-white">22 min</div>
              <div className="text-xs text-gray-500 mt-1">Livraison moyenne</div>
            </div>
          </div>
        </div>

        {/* DROITE : JAUGES STATISTIQUES */}
        <div className="flex-1 flex justify-center items-center">
          <div className="relative flex items-center justify-center h-64 w-64 rounded-full border-4 border-gray-800/40 shadow-2xl">
            {/* Anneau lumineux orange */}
            <div className="absolute inset-0 rounded-full border-4 border-[#FF5722] border-r-transparent animate-pulse"></div>
            
            <div className="text-center z-10">
              <span className="text-5xl font-black text-white tracking-tight">92%</span>
              <p className="text-xs text-gray-400 mt-2 max-w-[120px] mx-auto">Stock disponible dans votre zone</p>
            </div>
          </div>
        </div>

      </main>
      {/* ================= LE BODY (FOND BLANC) ================= */}
      <div className="bg-white text-gray-900 px-20 py-20 w-full">
        <div className="max-w-7xl mx-auto space-y-24">
          
          {/* SECTION 1 : LE PROCESSUS */}
          <section>
            <div className="flex justify-between items-start mb-12">
              <div>
                <span className="text-xs font-bold text-[#FF5722] uppercase tracking-wider block mb-2">LE PROCESSUS</span>
                <h2 className="text-3xl font-extrabold text-gray-950">Trois étapes, une bouteille livrée</h2>
              </div>
              <p className="text-sm text-gray-500 max-w-sm text-right">
                De la commande à la livraison, chaque étape est suivie en direct depuis votre compte.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { step: "01", title: "Choisissez votre marque", desc: "Comparez les stocks disponibles en temps réel chez les dépôts les plus proches de vous." },
                { step: "02", title: "Confirmez et payez", desc: "Réglez en Mobile Money ou à la livraison, en toute sécurité, depuis votre espace client." },
                { step: "03", title: "Suivez la livraison", desc: "Un livreur du dépôt vous apporte la bouteille et reprend le vide si besoin." }
              ].map((item, idx) => (
                <div key={idx} className="border border-gray-100 rounded-xl p-6 bg-white shadow-sm relative">
                  <span className="text-xs font-bold text-[#FF5722] bg-[#FF5722]/10 px-2 py-1 rounded mb-4 inline-block">{item.step}</span>
                  <h3 className="text-lg font-bold text-gray-950 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* SECTION 2 : NOS BOUTEILLES DE GAZ DISPONIBLES */}
          <section>
            <div className="flex justify-between items-start mb-12">
              <div>
                <span className="text-xs font-bold text-[#FF5722] uppercase tracking-wider block mb-2">DISPONIBILITÉ EN DIRECT</span>
                <h2 className="text-3xl font-extrabold text-gray-950">Nos bouteilles de gaz disponibles</h2>
              </div>
              <p className="text-sm text-gray-500 max-w-sm text-right">
                La jauge sur chaque vignette reflète le stock réel du dépôt le plus proche.
              </p>
            </div>

            {/* LES 3 CARTES PRODUITS CORRIGÉES AVEC IMAGES EN LIGNE */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { 
                  brand: "SCTM GAZ", 
                  name: "Bouteille Classique 12.5 kg", 
                  desc: "Idéale pour la cuisine familiale au quotidien. Robuste et sécurisée.",
                  imgUrl: "https://ecomatin.net/_next/image?url=https%3A%2F%2Fprod-backsite.ecomatin.be%2Fwp-content%2Fuploads%2F2026%2F07%2FGaz-.png&w=1920&q=75" 
                },
                { 
                  brand: "TOTAL GAZ", 
                  name: "Bouteille Standard 12.5 Kg", 
                  desc: "Haute performance, allumage fluide et pureté du gaz garantie.",
                  imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3M43TdfcilAEdPd2eR5YBL9LPZs9-jdUm1nQ0wJfZFUwp1dxT4zE0p_I&s=10"
                },
                { 
                  brand: "TRADEX GAZ", 
                  name: "Format Domestique 12.5 Kg", 
                  desc: "La marque traditionnelle réputée pour sa longévité.",
                  imgUrl: "https://cdn.camerounweb.com/imagelib/pics/223/22354044.jpg" 
                }
              ].map((gas, idx) => (
                <div key={idx} className="border border-gray-100 rounded-2xl overflow-hidden bg-white shadow-sm flex flex-col">
                  
                  {/* ZONE IMAGE EN LIGNE CORRIGÉE */}
                  <div className="h-48 w-full bg-gray-50 relative overflow-hidden flex items-center justify-center border-b border-gray-100">
                    <span className="absolute top-4 right-4 z-10 bg-green-500/90 text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow-sm">• En stock</span>
                    <img 
                      src={gas.imgUrl} 
                      alt={gas.name}
                      className="h-full w-full object-cover object-center hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  {/* Infos produits */}
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <span className="text-xs font-bold text-gray-400 tracking-wider block mb-1">{gas.brand}</span>
                      <h3 className="text-lg font-bold text-gray-950 mb-2">{gas.name}</h3>
                      <p className="text-sm text-gray-500 mb-6 leading-relaxed">{gas.desc}</p>
                    </div>
                    <div className="flex justify-between items-center border-t border-gray-100 pt-4">
                      <span className="text-xl font-black text-gray-950">6 500 F</span>
                      <button className="bg-gray-950 text-white text-xs font-bold px-4 py-2 rounded-md hover:bg-gray-800 transition-colors">
                        Commander
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
          
          {/* SECTION 3 : LOCALISATION */}
          <section>
            <div className="flex justify-between items-start mb-12">
              <div>
                <span className="text-xs font-bold text-[#FF5722] uppercase tracking-wider block mb-2">LOCALISATION</span>
                <h2 className="text-3xl font-extrabold text-gray-950">Le dépôt le plus proche de chez vous</h2>
              </div>
              <p className="text-sm text-gray-500 max-w-sm text-right">
                Consultez les dépôts autour de vous librement, sans créer de compte. Une connexion est seulement demandée pour commander.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
              {/* VRAIE CARTE DYNAMIQUE */}
              <div className="md:col-span-2 h-80 rounded-2xl overflow-hidden border border-gray-200 shadow-md">
                <MapDynamique />
              </div>

              {/* LISTE DES DÉPÔTS ACCORDÉONS */}
              <div className="space-y-3">
                {[
                  { name: "Dépôt Mvog-Ada", dist: "Yaoundé • 0.8 km", status: "En stock", color: "text-green-500 bg-green-50" },
                  { name: "Dépôt Bastos", dist: "Yaoundé • 1.4 km", status: "Stock limité", color: "text-orange-500 bg-orange-50" },
                  { name: "Dépôt Emana Centre", dist: "Yaoundé • 2.2 km", status: "En stock", color: "text-green-500 bg-green-50" }
                ].map((depot, idx) => (
                  <div key={idx} className="p-4 border border-gray-100 rounded-xl bg-white shadow-sm flex justify-between items-center hover:border-gray-200 transition-all">
                    <div>
                      <h4 className="text-sm font-bold text-gray-950">{depot.name}</h4>
                      <p className="text-xs text-gray-400 mt-0.5">{depot.dist}</p>
                    </div>
                    <span className={`text-[10px] font-bold px-2 py-1 rounded-md ${depot.color}`}>
                      • {depot.status}
                    </span>
                  </div>
                ))}
                <button className="w-full text-center text-xs font-bold text-gray-500 py-3 border border-dashed border-gray-200 rounded-xl hover:bg-gray-50 transition-colors">
                  Voir tous les dépôts
                </button>
              </div>
            </div>
          </section>
          {/* ================= FOOTER COMPLET ================= */}
      <footer className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen bg-[#0B0F19] text-gray-400 border-t border-gray-800 px-12 py-16">
        <div className="max-w-7xl mx-auto flex flex-col gap-12">
          
          {/* Haut du footer : Logo + Liens de navigation */}
          <div className="flex flex-wrap justify-between gap-10">
            
            {/* Colonne Marque / Description */}
            <div className="max-w-xs space-y-4">
              <div className="flex items-center gap-3 select-none">
                <div className="relative flex items-center justify-center h-5 w-5 rounded-full border border-[#FF5722]">
                  <div className="h-1.5 w-1.5 rounded-full bg-[#FF5722]"></div>
                </div>
                <span className="text-xl font-bold tracking-tight text-white">GazLoc</span>
              </div>
              <p className="text-xs text-gray-500 leading-relaxed">
                Solution de distribution intelligente de gaz domestique, connectant clients et dépôts partenaires en temps réel à travers le Cameroun.
              </p>
            </div>

            {/* Liens : Plateforme */}
            <div className="space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-white">Plateforme</h4>
              <ul className="space-y-2.5 text-xs">
                <li><a href="#" className="hover:text-white transition-colors">Accueil</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Devenir partenaire</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Espace client</a></li>
              </ul>
            </div>

            {/* Liens : Entreprise */}
            <div className="space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-white">Entreprise</h4>
              <ul className="space-y-2.5 text-xs">
                <li><a href="#" className="hover:text-white transition-colors">À propos</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Zones desservies</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>

            {/* Liens : Support */}
            <div className="space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-white">Support</h4>
              <ul className="space-y-2.5 text-xs">
                <li><a href="#" className="hover:text-white transition-colors">Centre d'aide</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Sécurité & normes</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Conditions d'utilisation</a></li>
              </ul>
            </div>

          </div>

          {/* Bas du footer : Copyright */}
          <div className="border-t border-gray-800/60 pt-8 flex flex-col sm:flex-row justify-center items-center text-[10px] text-gray-600">
            <p>&copy; 2026 GazLoc S.A. — Solution de distribution intelligente de gaz domestique.</p>
          </div>

        </div>
      </footer>

        </div>
      </div>
    </div>
  );
}
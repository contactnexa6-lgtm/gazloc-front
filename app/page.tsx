"use client";

import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-[#0B0F19] text-white font-sans antialiased overflow-x-hidden">
      
      {/* 1. NAVBAR */}
      <nav className="flex items-center justify-between px-4 sm:px-12 py-4 sm:py-6 bg-[#0B0F19] border-b border-gray-800 w-full sticky top-0 z-50">
        <Link href="/" className="flex items-center gap-2 sm:gap-3 select-none">
          <div className="relative flex items-center justify-center h-5 w-5 sm:h-6 sm:w-6 rounded-full border-2 border-[#FF5722]">
            <div className="h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-[#FF5722]"></div>
          </div>
          <span className="text-xl sm:text-2xl font-bold tracking-tight text-white">GazLoc</span>
        </Link>

        <div className="flex items-center gap-3 sm:gap-8">
          <Link href="/" className="text-xs sm:text-sm font-medium text-white border-b-2 border-[#FF5722] pb-0.5">
            Accueil
          </Link>
          <Link href="/devenir-depot" className="text-xs sm:text-sm font-medium text-gray-400 hover:text-white transition-colors">
            Devenir Partenaire
          </Link>
          <Link 
            href="/connexion" 
            className="rounded-md bg-[#FF5722] px-3.5 py-1.5 text-xs sm:text-sm font-bold text-white hover:bg-[#e04e1f] transition-all shadow-md shadow-[#FF5722]/10"
          >
            Connexion
          </Link>
        </div>
      </nav>

      {/* 2. HERO SECTION */}
      <section className="w-full max-w-7xl mx-auto px-4 sm:px-12 py-10 sm:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          
          <div className="space-y-6 text-left">
            <span className="inline-block rounded-full bg-[#FF5722]/10 border border-[#FF5722]/20 px-3 py-1 text-xs font-semibold text-[#FF5722] uppercase tracking-wider">
              • STOCK EN TEMPS RÉEL
            </span>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
              Le gaz domestique, <br />
              <span className="text-[#FF5722]">sans rupture ni file d'attente.</span>
            </h1>

            <p className="text-xs sm:text-sm text-gray-400 leading-relaxed max-w-lg">
              Consultez la disponibilité réelle des bouteilles dans les dépôts près de chez vous et passez commande en quelques secondes. Livraison suivie, paiement sécurisé.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <Link 
                href="/connexion" 
                className="rounded-xl bg-[#FF5722] px-6 py-3.5 text-xs sm:text-sm font-bold text-white text-center hover:bg-[#e04e1f] transition-all shadow-lg shadow-[#FF5722]/20"
              >
                Commander maintenant →
              </Link>
              <Link 
                href="/devenir-depot" 
                className="rounded-xl bg-gray-800/80 border border-gray-700 px-6 py-3.5 text-xs sm:text-sm font-bold text-white text-center hover:bg-gray-700 transition-all"
              >
                Devenir dépôt partenaire
              </Link>
            </div>

            {/* STATS */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-gray-800/60">
              <div>
                <div className="text-xl sm:text-2xl font-black text-white">128</div>
                <div className="text-[10px] sm:text-xs text-gray-400">Dépôts partenaires</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-black text-white">34</div>
                <div className="text-[10px] sm:text-xs text-gray-400">Quartiers couverts</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-black text-white">22 min</div>
                <div className="text-[10px] sm:text-xs text-gray-400">Livraison moyenne</div>
              </div>
            </div>
          </div>

          {/* CERCLE DE DISPONIBILITÉ */}
          <div className="flex justify-center items-center py-6">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full border-4 border-[#FF5722]/30 flex flex-col items-center justify-center text-center p-6 bg-gray-900/40 backdrop-blur-sm shadow-2xl">
              <div className="text-4xl sm:text-5xl font-black text-white mb-2">92%</div>
              <span className="text-xs sm:text-sm text-gray-400">Stock disponible dans votre zone</span>
            </div>
          </div>

        </div>
      </section>

      {/* 3. SECTION PROCESSUS (TROIS ÉTAPES) */}
      <section className="w-full bg-white text-gray-900 py-16 sm:py-24 px-4 sm:px-12">
        <div className="max-w-7xl mx-auto space-y-12">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-bold text-[#FF5722] uppercase tracking-wider block mb-2">LE PROCESSUS</span>
              <h2 className="text-3xl sm:text-4xl font-black text-gray-950 tracking-tight">
                Trois étapes simples.
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-gray-500 max-w-md leading-relaxed">
              De la commande à la livraison, chaque étape est suivie en direct pour vous garantir un service rapide et sans mauvaise surprise.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 border border-gray-100 p-8 rounded-2xl space-y-4">
              <div className="w-10 h-10 rounded-xl bg-orange-100 text-[#FF5722] flex items-center justify-center font-bold text-base">
                1
              </div>
              <h3 className="text-lg font-bold text-gray-950">Localisez le dépôt</h3>
              <p className="text-xs text-gray-500 leading-relaxed">
                Repérez en un coup d’œil le point de vente le plus proche ayant votre marque de bouteille en stock.
              </p>
            </div>

            <div className="bg-gray-50 border border-gray-100 p-8 rounded-2xl space-y-4">
              <div className="w-10 h-10 rounded-xl bg-orange-100 text-[#FF5722] flex items-center justify-center font-bold text-base">
                2
              </div>
              <h3 className="text-lg font-bold text-gray-950">Passez commande</h3>
              <p className="text-xs text-gray-500 leading-relaxed">
                Validez votre panier en indiquant votre adresse exacte sans besoin de paiement immédiat par carte.
              </p>
            </div>

            <div className="bg-gray-50 border border-gray-100 p-8 rounded-2xl space-y-4">
              <div className="w-10 h-10 rounded-xl bg-orange-100 text-[#FF5722] flex items-center justify-center font-bold text-base">
                3
              </div>
              <h3 className="text-lg font-bold text-gray-950">Livraison à domicile</h3>
              <p className="text-xs text-gray-500 leading-relaxed">
                Le livreur vous apporte la bouteille directement chez vous. Vous réglez à la réception en espèces.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 4. FOOTER */}
      <footer className="w-full bg-[#080B13] border-t border-gray-800 py-10 px-4 sm:px-12 text-center text-xs text-gray-500">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-[#FF5722]"></div>
            <span className="font-bold text-white text-sm">GazLoc</span>
          </div>
          <p>© 2026 GazLoc. Tous droits réservés.</p>
        </div>
      </footer>

    </div>
  );
}
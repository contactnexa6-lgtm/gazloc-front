"use client";

import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-[#0B0F19]` text-white font-sans antialiased overflow-x-hidden">
      {/* NAVBAR */}
      <nav className="flex items-center justify-between px-4 sm:px-12 py-4 bg-[#0B0F19] border-b border-gray-800 w-full">
        <Link href="/" className="flex items-center gap-2 select-none">
          <div className="relative flex items-center justify-center h-5 w-5 rounded-full border-2 border-[#FF5722]">
            <div className="h-1.5 w-1.5 rounded-full bg-[#FF5722]"></div>
          </div>
          <span className="text-xl font-bold text-white">GazLoc</span>
        </Link>

        <div className="flex items-center gap-3 sm:gap-6">
          <Link href="/" className="text-xs sm:text-sm text-gray-400 hover:text-white">Accueil</Link>
          <Link href="/devenir-depot" className="text-xs sm:text-sm text-gray-400 hover:text-white hidden sm:block">Devenir Partenaire</Link>
          <Link 
            href="/connexion" 
            className="rounded-md bg-[#FF5722] px-3 py-1.5 text-xs font-bold text-white hover:bg-[#e04e1f]"
          >
            Connexion
          </Link>
        </div>
      </nav>

      {/* HERO SECTION RESPONSIVE */}
      <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-12 py-8 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          {/* TEXTE HÉRO */}
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
                className="rounded-xl bg-[#FF5722] px-6 py-3.5 text-xs sm:text-sm font-bold text-white text-center hover:bg-[#e04e1f] transition-all"
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

          {/* CERCLE INTERACTIF (Ajusté pour mobile) */}
          <div className="flex justify-center items-center py-6">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full border-4 border-[#FF5722]/30 flex flex-col items-center justify-center text-center p-6 bg-gray-900/40 backdrop-blur-sm shadow-2xl">
              <div className="text-3xl sm:text-4xl font-black text-white mb-1">92%</div>
              <span className="text-[11px] sm:text-xs text-gray-400">Stock disponible dans votre zone</span>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}
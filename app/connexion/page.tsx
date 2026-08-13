"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function PageConnexion() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulation de connexion réussie -> redirection vers l'accueil
    router.push("/");
  };

  return (
    <div className="flex min-h-screen flex-col bg-[#0B0F19] text-white font-sans antialiased">
      
      {/* NAVBAR RESPONSIVE */}
      <nav className="flex items-center justify-between px-4 sm:px-12 py-4 bg-[#0B0F19] border-b border-gray-800">
        <Link href="/" className="flex items-center gap-2 select-none">
          <div className="relative flex items-center justify-center h-5 w-5 rounded-full border-2 border-[#FF5722]">
            <div className="h-1.5 w-1.5 rounded-full bg-[#FF5722]"></div>
          </div>
          <span className="text-xl font-bold text-white">GazLoc</span>
        </Link>

        <div className="flex items-center gap-4">
          <Link href="/" className="text-xs sm:text-sm text-gray-400 hover:text-white transition-colors">Accueil</Link>
          <Link href="/devenir-depot" className="text-xs sm:text-sm text-gray-400 hover:text-white transition-colors">Devenir dépôt</Link>
        </div>
      </nav>

      {/* CONTENU DIVISÉ */}
      <div className="flex flex-1 flex-col-reverse lg:flex-row w-full bg-[#0B0F19]">
        
        {/* ZONE GAUCHE SOMBRE */}
        <div className="flex-1 flex flex-col justify-center px-6 sm:px-16 lg:px-24 py-10 sm:py-16 text-white">
          <div className="max-w-md mx-auto lg:mx-0">
            <span className="inline-block rounded-full bg-[#FF5722]/10 border border-[#FF5722]/20 px-3 py-1 text-xs font-semibold text-[#FF5722] uppercase tracking-wider mb-4 sm:mb-6 w-fit">
              • ESPACE CLIENT
            </span>
            
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
              Content de vous <br className="hidden sm:block" />
              <span className="text-[#FF5722]">revoir</span>
            </h1>
            
            <p className="mt-3 text-gray-400 text-xs sm:text-sm leading-relaxed">
              Connectez-vous pour commander votre gaz, suivre vos livraisons et retrouver vos dépôts favoris.
            </p>

            <div className="mt-8 space-y-4 sm:space-y-6">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-gray-800/60 border border-gray-700 text-[#FF5722] text-xs flex items-center justify-center h-8 w-8 flex-shrink-0">📍</div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold">Dépôts localisés</h4>
                  <p className="text-[10px] sm:text-xs text-gray-400">Trouvez le point de vente le plus proche.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-gray-800/60 border border-gray-700 text-[#FF5722] text-xs flex items-center justify-center h-8 w-8 flex-shrink-0">📊</div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold">Stock en temps réel</h4>
                  <p className="text-[10px] sm:text-xs text-gray-400">Voyez la disponibilité exacte avant de commander.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ZONE DROITE BLANCHE (FORMULAIRE DE CONNEXION) */}
        <div className="w-full lg:w-[480px] bg-white text-gray-900 flex flex-col justify-center px-6 sm:px-12 lg:px-16 py-10 sm:py-16 shadow-2xl">
          <div className="w-full max-w-sm mx-auto space-y-5">
            <div>
              <span className="text-[10px] font-bold text-[#FF5722] uppercase tracking-wider block mb-1">CLIENT</span>
              <h2 className="text-2xl sm:text-3xl font-black text-gray-950">Connexion</h2>
              <p className="text-xs text-gray-400 mt-1">Accédez à votre compte avec votre nom d'utilisateur.</p>
            </div>

            <form className="space-y-4" onSubmit={handleLogin}>
              {/* USERNAME */}
              <div className="space-y-1">
                <label className="text-xs font-bold text-gray-700">Nom d'utilisateur </label>
                <input 
                  type="text" 
                  required
                  placeholder="ex: j_mbogne" 
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full bg-gray-50 border border-gray-200 rounded-lg px-3 py-2.5 text-sm placeholder-gray-400 focus:outline-none focus:border-[#FF5722] focus:bg-white text-gray-900 transition-colors"
                />
              </div>

              {/* MOT DE PASSE */}
              <div className="space-y-1">
                <div className="flex justify-between items-center">
                  <label className="text-xs font-bold text-gray-700">Mot de passe</label>
                  <a href="#" className="text-[10px] font-semibold text-gray-400 hover:text-gray-600 transition-colors">Oublié ?</a>
                </div>
                <input 
                  type="password" 
                  required
                  placeholder="••••••••" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-gray-50 border border-gray-200 rounded-lg px-3 py-2.5 text-sm placeholder-gray-400 focus:outline-none focus:border-[#FF5722] focus:bg-white text-gray-900 transition-colors"
                />
              </div>

              <button type="submit" className="w-full rounded-md bg-[#FF5722] py-3 text-sm font-bold text-white hover:bg-[#e04e1f] transition-colors shadow-md shadow-[#FF5722]/10 mt-2">
                Se connecter
              </button>
            </form>

            <div className="relative flex py-2 items-center">
              <div className="flex-grow border-t border-gray-100"></div>
              <span className="flex-shrink mx-3 text-[10px] font-medium text-gray-300 uppercase">ou</span>
              <div className="flex-grow border-t border-gray-100"></div>
            </div>

            <p className="text-center text-xs text-gray-500">
              Nouveau sur la plateforme ? <Link href="/inscription" className="font-bold text-[#FF5722] hover:underline">Créer un compte</Link>
            </p>
          </div>
        </div>

      </div>

    </div>
  );
}
"use client";

import { useState } from "react";
import Link from "next/link";

export default function PageConnexionDepot() {
  const [codeDepot, setCodeDepot] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Connexion dépôt réussie !");
    // Redirection vers le dashboard dépôt (Sprint 3) à créer ensuite
  };

  return (
    <div className="flex min-h-screen flex-col bg-[#0B0F19] text-white font-sans antialiased">
      <nav className="flex items-center justify-between px-12 py-6 bg-[#0B0F19] border-b border-gray-800">
        <Link href="/" className="flex items-center gap-3 cursor-pointer select-none">
          <div className="relative flex items-center justify-center h-6 w-6 rounded-full border-2 border-[#FF5722]">
            <div className="h-2 w-2 rounded-full bg-[#FF5722]"></div>
          </div>
          <span className="text-2xl font-bold tracking-tight text-white">GazLoc</span>
        </Link>
        <Link href="/" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">Retour Accueil</Link>
      </nav>

      <div className="flex flex-1 flex-col lg:flex-row w-full bg-[#0B0F19]">
        <div className="flex-1 flex flex-col justify-center px-12 lg:px-24 py-16 text-white">
          <div className="max-w-md mx-auto lg:mx-0">
            <span className="inline-block rounded-full bg-[#FF5722]/10 border border-[#FF5722]/20 px-3 py-1 text-xs font-semibold text-[#FF5722] uppercase tracking-wider mb-6 w-fit">
              • ESPACE FOURNISSEUR
            </span>
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl leading-tight">
              Espace Dépôt <br />
              <span className="text-[#FF5722]">Partenaire</span>
            </h1>
            <p className="mt-4 text-gray-400 text-sm leading-relaxed">
              Connectez-vous avec les identifiants transmis par l'administrateur pour gérer vos stocks et ajuster vos prix.
            </p>
          </div>
        </div>

        <div className="w-full lg:w-[480px] bg-white text-gray-900 flex flex-col justify-center px-8 lg:px-16 py-16 shadow-2xl">
          <div className="w-full max-w-sm mx-auto space-y-6">
            <div>
              <span className="text-[10px] font-bold text-[#FF5722] uppercase tracking-wider block mb-1">PARTENAIRE</span>
              <h2 className="text-3xl font-black text-gray-950 tracking-tight">Connexion Dépôt</h2>
              <p className="text-xs text-gray-400 mt-1">Saisissez votre code dépôt et mot de passe.</p>
            </div>

            <form className="space-y-4" onSubmit={handleLogin}>
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-gray-700">Code Dépôt / Identifiant</label>
                <input 
                  type="text" 
                  required
                  placeholder="Ex: DEP-MVO-01" 
                  value={codeDepot}
                  onChange={(e) => setCodeDepot(e.target.value)}
                  className="w-full bg-gray-50 border border-gray-200 rounded-lg px-3 py-2.5 text-sm placeholder-gray-400 focus:outline-none focus:border-[#FF5722] focus:bg-white transition-colors text-gray-900"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-gray-700">Mot de passe</label>
                <input 
                  type="password" 
                  required
                  placeholder="••••••••" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-gray-50 border border-gray-200 rounded-lg px-3 py-2.5 text-sm placeholder-gray-400 focus:outline-none focus:border-[#FF5722] focus:bg-white transition-colors text-gray-900"
                />
              </div>

              <button type="submit" className="w-full rounded-md bg-[#FF5722] py-3 text-sm font-bold text-white hover:bg-[#e04e1f] transition-colors shadow-md shadow-[#FF5722]/10 mt-2">
                Accéder à mon espace dépôt
              </button>
            </form>

            <div className="pt-4 border-t border-gray-100 text-center">
              <p className="text-xs text-gray-500">
                Vous n'avez pas encore vos identifiants ?{" "}
                <Link href="/devenir-depot" className="font-bold text-[#FF5722] hover:underline">
                  Demande d'adhésion
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
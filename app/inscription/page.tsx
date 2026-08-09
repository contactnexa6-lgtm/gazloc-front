"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function PageInscription() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    nomComplet: "",
    email: "",
    telephone: "",
    quartier: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setError("Les mots de passe ne correspondent pas.");
      return;
    }
    setError("");
    // Simulation d'inscription réussie -> redirection vers la connexion
    alert("Compte créé avec succès ! Vous pouvez maintenant vous connecter.");
    router.push("/connexion");
  };

  return (
    <div className="flex min-h-screen flex-col bg-[#0B0F19] text-white font-sans antialiased">
      {/* NAVBAR */}
      <nav className="flex items-center justify-between px-12 py-6 bg-[#0B0F19] border-b border-gray-800">
        <Link href="/" className="flex items-center gap-3 cursor-pointer select-none">
          <div className="relative flex items-center justify-center h-6 w-6 rounded-full border-2 border-[#FF5722]">
            <div className="h-2 w-2 rounded-full bg-[#FF5722]"></div>
          </div>
          <span className="text-2xl font-bold tracking-tight text-white">GazLoc</span>
        </Link>
        <div className="flex items-center gap-8">
          <Link href="/" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">Accueil</Link>
          <Link href="/connexion" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">Connexion</Link>
        </div>
      </nav>

      {/* CONTENU DIVISÉ */}
      <div className="flex flex-1 flex-col lg:flex-row w-full bg-[#0B0F19]">
        {/* ZONE GAUCHE SOMBRE */}
        <div className="flex-1 flex flex-col justify-center px-12 lg:px-24 py-12 text-white">
          <div className="max-w-md mx-auto lg:mx-0">
            <span className="inline-block rounded-full bg-[#FF5722]/10 border border-[#FF5722]/20 px-3 py-1 text-xs font-semibold text-[#FF5722] uppercase tracking-wider mb-6 w-fit">
              • REJOINDRE GAZLOC
            </span>
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl leading-tight">
              Créez votre <br />
              <span className="text-[#FF5722]">compte client</span>
            </h1>
            <p className="mt-4 text-gray-400 text-sm leading-relaxed">
              Commandez votre gaz domestique en quelques clics et faites-vous livrer rapidement à domicile.
            </p>
          </div>
        </div>

        {/* ZONE DROITE BLANCHE (FORMULAIRE) */}
        <div className="w-full lg:w-[500px] bg-white text-gray-900 flex flex-col justify-center px-8 lg:px-14 py-12 shadow-2xl">
          <div className="w-full max-w-sm mx-auto space-y-5">
            <div>
              <span className="text-[10px] font-bold text-[#FF5722] uppercase tracking-wider block mb-1">NOUVEAU CLIENT</span>
              <h2 className="text-3xl font-black text-gray-950 tracking-tight">Inscription</h2>
              <p className="text-xs text-gray-400 mt-1">Remplissez vos informations pour créer votre compte.</p>
            </div>

            {error && (
              <div className="p-3 bg-red-50 border border-red-200 text-red-600 text-xs rounded-lg font-medium">
                {error}
              </div>
            )}

            <form className="space-y-3.5" onSubmit={handleSubmit}>
              <div className="space-y-1">
                <label className="text-xs font-bold text-gray-700">Nom complet</label>
                <input 
                  type="text" 
                  required
                  placeholder="Junior Mbogne"
                  value={formData.nomComplet}
                  onChange={(e) => setFormData({ ...formData, nomComplet: e.target.value })}
                  className="w-full bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 text-sm placeholder-gray-400 focus:outline-none focus:border-[#FF5722] focus:bg-white transition-colors text-gray-900"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-gray-700">Email</label>
                  <input 
                    type="email" 
                    required
                    placeholder="votre@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 text-sm placeholder-gray-400 focus:outline-none focus:border-[#FF5722] focus:bg-white transition-colors text-gray-900"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-bold text-gray-700">Téléphone</label>
                  <input 
                    type="tel" 
                    required
                    placeholder="6XX XX XX XX"
                    value={formData.telephone}
                    onChange={(e) => setFormData({ ...formData, telephone: e.target.value })}
                    className="w-full bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 text-sm placeholder-gray-400 focus:outline-none focus:border-[#FF5722] focus:bg-white transition-colors text-gray-900"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-gray-700">Quartier / Ville</label>
                <input 
                  type="text" 
                  required
                  placeholder="Ex: Mvog-Ada, Yaoundé"
                  value={formData.quartier}
                  onChange={(e) => setFormData({ ...formData, quartier: e.target.value })}
                  className="w-full bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 text-sm placeholder-gray-400 focus:outline-none focus:border-[#FF5722] focus:bg-white transition-colors text-gray-900"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-gray-700">Mot de passe</label>
                  <input 
                    type="password" 
                    required
                    placeholder="••••••••"
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    className="w-full bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 text-sm placeholder-gray-400 focus:outline-none focus:border-[#FF5722] focus:bg-white transition-colors text-gray-900"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-bold text-gray-700">Confirmer</label>
                  <input 
                    type="password" 
                    required
                    placeholder="••••••••"
                    value={formData.confirmPassword}
                    onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                    className="w-full bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 text-sm placeholder-gray-400 focus:outline-none focus:border-[#FF5722] focus:bg-white transition-colors text-gray-900"
                  />
                </div>
              </div>

              <button type="submit" className="w-full rounded-md bg-[#FF5722] py-3 text-sm font-bold text-white hover:bg-[#e04e1f] transition-colors shadow-md shadow-[#FF5722]/10 mt-3">
                S'inscrire
              </button>
            </form>

            <p className="text-center text-xs text-gray-500 pt-2">
              Déjà un compte ? <Link href="/connexion" className="font-bold text-[#FF5722] hover:underline">Se connecter</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
"use client";

import Link from "next/link";

export default function PageDevenirDepot() {
  return (
    <div className="flex min-h-screen flex-col bg-gray-50 text-gray-800 font-sans antialiased">
      
      {/* NAVBAR */}
      <nav className="flex items-center justify-between px-12 py-6 bg-[#0B0F19] text-white border-b border-gray-800">
        <Link href="/" className="flex items-center gap-3 cursor-pointer select-none">
          <div className="relative flex items-center justify-center h-6 w-6 rounded-full border-2 border-[#FF5722]">
            <div className="h-2 w-2 rounded-full bg-[#FF5722]"></div>
          </div>
          <span className="text-2xl font-bold tracking-tight text-white">GazLoc</span>
        </Link>
        <div className="flex items-center gap-8">
          <Link href="/" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">Accueil</Link>
          <Link href="/devenir-depot" className="text-sm font-semibold text-white border-b-2 border-[#FF5722] pb-1">Devenir dépôt</Link>
        </div>
      </nav>

      {/* CONTENU PRINCIPAL */}
      <main className="flex-1 max-w-4xl mx-auto px-6 py-16 w-full flex flex-col items-center">
        
        {/* EN-TÊTE */}
        <div className="text-center space-y-3 max-w-2xl mb-12">
          <span className="text-xs font-bold text-[#FF5722] uppercase tracking-widest block">DEMANDE DE PARTENARIAT</span>
          <h1 className="text-3xl font-black text-gray-950 tracking-tight sm:text-4xl">
            Inscrivez votre dépôt sur GazLoc
          </h1>
          <p className="text-sm text-gray-500 leading-relaxed">
            Quatre étapes pour rejoindre le réseau et commencer à recevoir des commandes de votre quartier.
          </p>
        </div>

        {/* BLOC CENTRAL BLANC */}
        <div className="w-full bg-white rounded-2xl border border-gray-100 shadow-xl p-8 lg:p-12 space-y-10">
          
          <div className="space-y-2">
            <h2 className="text-lg font-bold text-gray-950">Comment fonctionne l'adhésion ?</h2>
            <p className="text-xs text-gray-400 leading-relaxed">
              Aucun paiement n'est effectué directement sur la plateforme. L'adhésion se règle par Mobile Money et est validée manuellement par notre équipe.
            </p>
          </div>

          {/* NUMÉROS DE PAIEMENT */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="border border-gray-100 bg-gray-50/50 rounded-xl p-5 flex flex-col">
              <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-2">Orange Money — Adhésion</span>
              <span className="text-2xl font-black text-gray-950 tracking-widest">6 89 04 68 20</span>
            </div>
            <div className="border border-gray-100 bg-gray-50/50 rounded-xl p-5 flex flex-col">
              <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-2">MTN Money — Adhésion</span>
              <span className="text-2xl font-black text-gray-950 tracking-widest">6 83 56 65 89</span>
            </div>
          </div>

          {/* LISTE DES 6 ÉTAPES */}
          <div className="space-y-6 pt-2">
            {[
              { num: "1", title: "Contactez l'administrateur", desc: "Écrivez-nous sur WhatsApp pour signaler votre demande d'adhésion." },
              { num: "2", title: "Effectuez le paiement", desc: "Envoyez les frais d'adhésion vers le numéro Orange Money ou MTN Money ci-dessus." },
              { num: "3", title: "Envoyez la preuve de paiement", desc: "Transmettez la capture d'écran du paiement à l'administrateur, toujours via WhatsApp." },
              { num: "4", title: "Vérification par l'administrateur", desc: "Votre capture de paiement est contrôlée avant toute création de compte." },
              { num: "5", title: "Réception de vos identifiants", desc: "Une fois le paiement confirmé, l'administrateur crée votre compte fournisseur et vous transmet votre identifiant et votre mot de passe." },
              { num: "6", title: "Connexion à l'espace fournisseur", desc: "Utilisez ces identifiants pour vous connecter et commencer à gérer votre stock." }
            ].map((etape) => (
              <div key={etape.num} className="flex gap-5 items-start">
                <span className="flex-shrink-0 w-6 h-6 rounded border border-orange-200 text-xs font-bold text-[#FF5722] bg-orange-50/50 flex items-center justify-center mt-0.5">
                  {etape.num}
                </span>
                <div className="space-y-0.5">
                  <h3 className="text-sm font-bold text-gray-950">{etape.title}</h3>
                  <p className="text-xs text-gray-400 leading-relaxed">{etape.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* BOUTON D'ACTION PRINCIPAL */}
          <div className="pt-4">
            <a 
              href="https://wa.me/237683566589" // Lien dynamique WhatsApp
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-full block text-center rounded-xl bg-[#FF5722] py-4 text-sm font-bold text-white hover:bg-[#e04e1f] transition-all shadow-md shadow-[#FF5722]/10"
            >
              Contacter l'administrateur sur WhatsApp
            </a>
          </div>

        </div>
      </main>

    </div>
  );
}
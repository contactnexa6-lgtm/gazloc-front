"use client";

import { useState } from "react";
import Link from "next/link";

export default function DashboardDepot() {
  // État local pour gérer l'activation des stocks
  const [stocks, setStocks] = useState([
    { id: 1, name: "SCTM 12.5 Kg", count: 42, active: true, color: "bg-emerald-500", percent: "80%" },
    { id: 2, name: "Totalaz 12.5 Kg", count: 37, active: true, color: "bg-emerald-500", percent: "70%" },
    { id: 3, name: "Camgaz 12.5 Kg", count: 6, active: true, color: "bg-amber-500", percent: "20%" },
    { id: 4, name: "GazLocPro 6 Kg", count: 0, active: false, color: "bg-red-500", percent: "0%" },
  ]);

  const toggleStock = (id: number) => {
    setStocks(
      stocks.map((item) => (item.id === id ? { ...item, active: !item.active } : item))
    );
  };

  return (
    <div className="flex min-h-screen flex-col bg-gray-50 text-gray-800 font-sans antialiased">
      
     {/* NAVBAR RESPONSIVE */}
      <nav className="flex items-center justify-between px-4 sm:px-12 py-4 sm:py-6 bg-[#0B0F19] border-b border-gray-800">
        <Link href="/" className="flex items-center gap-2 select-none">
          <div className="relative flex items-center justify-center h-5 w-5 rounded-full border-2 border-[#FF5722]">
            <div className="h-1.5 w-1.5 rounded-full bg-[#FF5722]"></div>
          </div>
          <span className="text-xl font-bold tracking-tight text-white">GazLoc</span>
        </Link>

        <div className="flex items-center gap-4 sm:gap-8">
          <Link href="/" className="text-xs sm:text-sm font-medium text-gray-400 hover:text-white transition-colors">
            Accueil
          </Link>
          <Link href="/devenir-depot" className="text-xs sm:text-sm font-medium text-gray-400 hover:text-white transition-colors">
            Devenir dépôt
          </Link>
        </div>
      </nav> 

      {/* CONTENU AVEC SIDEBAR */}
      <div className="flex flex-1">
        
        {/* SIDEBAR GAUCHE */}
        <aside className="w-64 bg-white border-r border-gray-100 p-6 flex flex-col justify-between hidden md:flex">
          <div className="space-y-6">
            <div>
              <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block mb-3">GESTION</span>
              <nav className="space-y-1">
                <a href="#" className="flex items-center gap-3 px-3 py-2 rounded-lg bg-orange-50 text-[#FF5722] text-xs font-bold">
                  <span>📊</span> Tableau de bord
                </a>
                <a href="#" className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-500 hover:bg-gray-50 text-xs font-medium transition-colors">
                  <span>🛢️</span> Mon stock
                </a>
                <a href="#" className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-500 hover:bg-gray-50 text-xs font-medium transition-colors">
                  <span>📋</span> Commandes
                </a>
              </nav>
            </div>

            <div>
              <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block mb-3">COMPTE</span>
              <nav className="space-y-1">
                <a href="#" className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-500 hover:bg-gray-50 text-xs font-medium transition-colors">
                  <span>💰</span> Portefeuille
                </a>
                <a href="#" className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-500 hover:bg-gray-50 text-xs font-medium transition-colors">
                  <span>⚙️</span> Paramètres
                </a>
              </nav>
            </div>
          </div>
        </aside>

        {/* CONTENU PRINCIPAL */}
        <main className="flex-1 p-8 max-w-7xl">
          
          {/* HEADER DU DASHBOARD */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
            <div>
              <h1 className="text-2xl font-black text-gray-950 tracking-tight">Dépôt Central Mendong</h1>
              <p className="text-xs text-gray-400 mt-0.5">Voici l'activité de votre dépôt aujourd'hui.</p>
            </div>
            <button className="rounded-lg bg-[#FF5722] px-4 py-2.5 text-xs font-bold text-white hover:bg-[#e04e1f] transition-all shadow-md shadow-[#FF5722]/10">
              + Nouvelle commande manuelle
            </button>
          </div>

          {/* METRIQUES / CARTE KPI */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
            <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm">
              <span className="text-[11px] font-medium text-gray-400">Commandes aujourd'hui</span>
              <div className="text-3xl font-black text-gray-950 mt-2">18</div>
              <span className="text-[10px] font-bold text-emerald-600 mt-2 block">+4 vs hier</span>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm">
              <span className="text-[11px] font-medium text-gray-400">Revenu du jour</span>
              <div className="text-3xl font-black text-gray-950 mt-2">117 000 F</div>
              <span className="text-[10px] font-bold text-emerald-600 mt-2 block">+9 500 F</span>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm">
              <span className="text-[11px] font-medium text-gray-400">Bouteilles en stock</span>
              <div className="text-3xl font-black text-gray-950 mt-2">86</div>
              <span className="text-[10px] font-bold text-amber-600 mt-2 block">3 formats sous le seuil</span>
            </div>
          </div>

          {/* SECTION GRILLE : STOCK + CARTES DROITE */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
            
            {/* GESTION DU STOCK (2 COLS) */}
            <div className="lg:col-span-2 bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-6">
              <div className="flex justify-between items-center">
                <h2 className="text-sm font-bold text-gray-950">Gestion du stock</h2>
                <span className="text-[10px] text-gray-400">Basculez pour mettre à jour l'appli en direct</span>
              </div>

              <div className="space-y-5">
                {stocks.map((item) => (
                  <div key={item.id} className="space-y-1.5">
                    <div className="flex justify-between items-center text-xs">
                      <span className="font-bold text-gray-800">{item.name}</span>
                      <div className="flex items-center gap-4">
                        <span className="text-gray-400 font-medium">{item.count} unités</span>
                        {/* SWITCH BUTTON */}
                        <button 
                          onClick={() => toggleStock(item.id)}
                          className={`w-9 h-5 flex items-center rounded-full p-0.5 transition-colors ${
                            item.active ? "bg-[#FF5722]" : "bg-gray-200"
                          }`}
                        >
                          <div className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform ${
                            item.active ? "translate-x-4" : "translate-x-0"
                          }`} />
                        </button>
                      </div>
                    </div>
                    {/* BARRE DE NIVEAU */}
                    <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                      <div 
                        className={`h-full ${item.color} rounded-full transition-all duration-300`} 
                        style={{ width: item.percent }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* BLOCS DROITE : SOLDE + ALERTE */}
            <div className="space-y-5">
              
              {/* SOLDE À REVERSER */}
              <div className="bg-[#0B0F19] text-white p-6 rounded-2xl shadow-lg relative overflow-hidden">
                <span className="text-xs text-gray-400 font-medium block">Solde à reverser</span>
                <div className="text-3xl font-black text-white mt-3">312 400 F</div>
                <button className="mt-5 rounded-lg bg-gray-800/80 border border-gray-700 px-4 py-2 text-xs font-bold text-white hover:bg-gray-700 transition-all">
                  Voir l'historique
                </button>
              </div>

              {/* ALERTE STOCK BAS */}
              <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-3">
                <h3 className="text-xs font-bold text-gray-950">Alerte stock bas</h3>
                <p className="text-[11px] text-gray-400 leading-relaxed">
                  GazDom Pro 6 Kg et Camgaz 12.5 Kg sont sous le seuil de réapprovisionnement recommandé.
                </p>
                <button className="w-full mt-2 rounded-lg border border-gray-200 py-2.5 text-xs font-bold text-gray-700 hover:bg-gray-50 transition-colors">
                  Commander du réapprovisionnement
                </button>
              </div>

            </div>
          </div>

          {/* COMMANDES RÉCENTES */}
          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-4">
            <div className="flex justify-between items-center">
              <h2 className="text-sm font-bold text-gray-950">Commandes récentes</h2>
              <span className="text-[10px] text-gray-400 font-medium">6 en attente de préparation</span>
            </div>

            <div className="space-y-3">
              {[
                { name: "Aicha N.", bottle: "SCTM 12.5 Kg", addr: "Rue 1.234, Mendong", status: "À préparer", color: "bg-amber-100 text-amber-800" },
                { name: "Paul K.", bottle: "Totalaz 12.5 Kg", addr: "Carrefour Mendong", status: "En livraison", color: "bg-emerald-100 text-emerald-800" },
                { name: "Estelle M.", bottle: "Camgaz 12.5 Kg", addr: "Nouvelle route Mendong", status: "Livrée", color: "bg-gray-100 text-gray-600" },
              ].map((cmd, i) => (
                <div key={i} className="flex items-center justify-between p-3.5 border border-gray-50 rounded-xl hover:bg-gray-50/50 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-orange-50 text-[#FF5722] flex items-center justify-center text-xs font-bold">
                      🛢️
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-gray-900">{cmd.name} — <span className="text-gray-500 font-normal">{cmd.bottle}</span></h4>
                      <p className="text-[10px] text-gray-400">{cmd.addr}</p>
                    </div>
                  </div>
                  <span className={`text-[10px] font-bold px-3 py-1 rounded-full ${cmd.color}`}>
                    {cmd.status}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </main>
      </div>

    </div>
  );
}   

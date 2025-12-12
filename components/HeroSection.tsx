import React from 'react';
import { PRICING } from '../constants';
import { Button } from './Button';
import { Map, CheckCircle } from 'lucide-react';
// IMPORTAÇÃO DE IMAGEM LOCAL REMOVIDA

export const HeroSection: React.FC = () => {
  return (
    <section className="bg-slate-900 text-white pb-12 pt-6 px-4 md:px-8 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute right-0 top-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute left-0 bottom-0 w-64 h-64 bg-orange-500 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10 text-center">
        {/* Logo/Header */}
        <div className="flex items-center justify-center gap-2 mb-6 opacity-90">
          <Map className="text-orange-400 w-6 h-6" />
          <span className="uppercase tracking-widest text-sm font-semibold">O Mapa da História da Humanidade</span>
        </div>

        {/* Headline */}
        <h1 className="text-4xl md:text-6xl font-black mb-4 leading-tight">
          DO <span className="text-orange-400 italic">SAPIENS</span> AO <span className="text-blue-400 italic">NEXUS</span>
        </h1>
        <h2 className="text-xl md:text-2xl text-slate-300 font-light mb-8 max-w-2xl mx-auto">
          Domine a História da Humanidade e o Futuro da Tecnologia em Apenas <span className="font-bold text-white">5 Horas de Áudio</span>.
        </h2>

        {/* Mockup Container */}
        <div className="relative mb-8 group">
          <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 backdrop-blur-sm inline-block">
            <img
              // === NOVO SRC COM O LINK DA WEB ===
              src="https://i.ibb.co/WvfML70W/Title-Humanidade.png"
              alt="Coleção Completa de Áudios com os 5 livros ao fundo"
              className="rounded-lg shadow-2xl max-w-full h-auto md:max-w-2xl mx-auto object-cover border-2 border-slate-600"
            />
            <div className="absolute -bottom-4 -right-4 bg-orange-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg transform rotate-3">
              20 Áudios Exclusivos
            </div>
          </div>
        </div>

        {/* Value Proposition Box */}
        <div className="bg-white text-slate-900 p-6 md:p-8 rounded-xl shadow-2xl max-w-3xl mx-auto transform -translate-y-4">
          <p className="italic text-slate-600 mb-6 border-l-4 border-orange-500 pl-4 text-left">
            "Absorva a essência de Sapiens, Homo Deus, Nexus e 21 Lições em uma jornada cronológica e analítica."
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 mb-6">
            <div className="text-center">
              <p className="text-slate-500 text-lg line-through mb-1">De R$ {PRICING.original.toFixed(2).replace('.', ',')}</p>
              <div className="flex items-baseline gap-1 justify-center">
                <span className="text-sm font-bold text-green-700">Por Apenas</span>
                <span className="text-5xl font-extrabold text-green-600">R$ {PRICING.current.toFixed(2).replace('.', ',')}</span>
              </div>
            </div>
          </div>

          <Button text="🔥 SIM, EU QUERO O MEU MAPA AGORA!" variant="primary" fullWidth={true} />
          <div className="mt-4 flex flex-wrap justify-center gap-4 text-sm text-slate-500">
            <span className="flex items-center gap-1"><CheckCircle className="w-4 h-4 text-green-500" /> Acesso Imediato</span>
            <span className="flex items-center gap-1"><CheckCircle className="w-4 h-4 text-green-500" /> Compra Segura</span>
            <span className="flex items-center gap-1"><CheckCircle className="w-4 h-4 text-green-500" /> 7 Dias de Garantia</span>
          </div>
        </div>
      </div>
    </section>
  );
};
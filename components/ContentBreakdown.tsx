import React from 'react';
import { ACTS } from '../constants';

export const ContentBreakdown: React.FC = () => {
  return (
    <section className="py-20 px-4 bg-slate-900 text-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-orange-500 font-bold tracking-widest uppercase mb-2 block">O Conteúdo</span>
          <h2 className="text-3xl md:text-5xl font-bold serif mb-6">
            4 Atos para Compreender o Universo
          </h2>
          <p className="text-slate-400 text-lg">
            Uma jornada narrativa desenhada para conectar os pontos que você não viu.
          </p>
        </div>

        <div className="space-y-8">
          {ACTS.map((act, index) => (
            <div key={act.id} className="bg-slate-800 rounded-xl p-6 md:p-8 border border-slate-700 hover:border-orange-500/50 transition-colors">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-slate-900 flex items-center justify-center border-2 border-orange-500/30">
                    {act.icon}
                  </div>
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-1">
                    {act.title}
                  </h3>
                  <h4 className="text-orange-400 font-medium mb-4 uppercase text-sm tracking-wide">
                    {act.subtitle}
                  </h4>
                  <ul className="space-y-3">
                    {act.points.map((point, i) => (
                      <li key={i} className="flex items-start gap-3 text-slate-300">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-orange-500 flex-shrink-0"></span>
                        <span className="leading-relaxed">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
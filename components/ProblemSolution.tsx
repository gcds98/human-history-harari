import React from 'react';
import { Clock, BookOpen, Check } from 'lucide-react';

export const ProblemSolution: React.FC = () => {
  return (
    <section className="py-16 px-4 bg-slate-50">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* The Problem */}
          <div className="space-y-6">
            <div className="bg-red-50 p-6 rounded-lg border border-red-100">
              <h3 className="text-2xl font-bold text-red-800 mb-4 flex items-center gap-2">
                <Clock className="w-6 h-6" /> O Problema
              </h3>
              <p className="text-slate-700 leading-relaxed mb-4">
                Você sabe que precisa entender para onde o mundo está indo. Você comprou <em>Sapiens</em>, talvez <em>Homo Deus</em>... mas eles estão parados na estante.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2 text-red-700">
                  <span className="font-bold">×</span> Mais de 2.500 páginas somadas.
                </li>
                <li className="flex items-start gap-2 text-red-700">
                  <span className="font-bold">×</span> Mais de 100 horas de leitura necessária.
                </li>
                <li className="flex items-start gap-2 text-red-700">
                  <span className="font-bold">×</span> Linguagem densa e complexa.
                </li>
              </ul>
            </div>
          </div>

          {/* The Solution */}
          <div className="space-y-6">
            <div className="bg-green-50 p-6 rounded-lg border border-green-100 shadow-lg relative">
              <div className="absolute -top-3 -right-3 bg-green-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase">
                A Solução
              </div>
              <h3 className="text-2xl font-bold text-green-800 mb-4 flex items-center gap-2">
                <BookOpen className="w-6 h-6" /> O Mapa
              </h3>
              <p className="text-slate-700 leading-relaxed mb-4">
                Condensamos a genialidade de Harari em uma experiência de áudio direta, cronológica e acionável.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2 text-green-800">
                  <Check className="w-5 h-5" /> <strong>Apenas 5 horas</strong> de conteúdo total.
                </li>
                <li className="flex items-start gap-2 text-green-800">
                  <Check className="w-5 h-5" /> <strong>Estrutura Lógica:</strong> Passado, Presente e Futuro conectados.
                </li>
                <li className="flex items-start gap-2 text-green-800">
                  <Check className="w-5 h-5" /> <strong>Formato Áudio:</strong> Aprenda no trânsito ou na academia.
                </li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
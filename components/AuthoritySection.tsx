import React from 'react';
import { BOOKS } from '../constants'; // Importando a constante atualizada

export const AuthoritySection: React.FC = () => {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 serif">
          A Biblioteca da Evolução Humana
        </h2>
        <p className="text-lg text-slate-600 mb-12 max-w-2xl mx-auto">
          Este mapa não é uma opinião. É uma síntese rigorosa baseada nos 5 pilares intelectuais que transformaram a visão moderna da história.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {BOOKS.map((book, index) => (
            <div key={index} className="flex flex-col items-center group">
              
              {/* Container clicável que leva para o link de venda */}
              <a 
                href={book.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="relative w-full aspect-[2/3] mb-4 bg-slate-200 rounded-md overflow-hidden shadow-md group-hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-2 block"
              >
                 {/* IMAGEM REAL DA CAPA: Usa o link direto fornecido */}
                 <img 
                    src={book.imageUrl} 
                    alt={book.coverAlt}
                    className="w-full h-full object-cover"
                    loading="lazy"
                 />
                 <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-white font-bold text-sm px-2 text-center">{book.title}</span>
                 </div>
              </a>
              
              <h3 className="font-bold text-slate-800">{book.title}</h3>
              <p className="text-xs text-slate-500 px-2">{book.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
import React from 'react';
import { LINKS } from '../constants';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 py-8 px-4 text-center text-sm border-t border-slate-800 pb-24 md:pb-8">
      <p className="mb-2">&copy; 2025 O Mapa da História da Humanidade. Todos os direitos reservados.</p>
      <div className="space-x-4">
        <a href={LINKS.terms} className="hover:text-white transition-colors">Termos de Uso</a>
        <span>|</span>
        <a href={LINKS.privacy} className="hover:text-white transition-colors">Política de Privacidade</a>
      </div>
    </footer>
  );
};
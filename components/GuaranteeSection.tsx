import React from 'react';
import { ShieldCheck } from 'lucide-react';
import { Button } from './Button';

export const GuaranteeSection: React.FC = () => {
  return (
    <section className="py-20 px-4 bg-slate-50">
      <div className="max-w-3xl mx-auto">
        
        {/* Guarantee Box */}
        {/* Removed overflow-hidden so the icon is fully visible. Added mt-8 for spacing above. Increased top padding. */}
        <div className="bg-white border-2 border-blue-900 rounded-xl p-8 pt-16 md:p-12 md:pt-16 text-center shadow-lg mb-12 relative mt-8">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-900 p-4 rounded-full">
            <ShieldCheck className="w-10 h-10 text-white" />
          </div>
          
          <h3 className="text-2xl font-bold text-blue-900 mt-6 mb-4">
            Garantia Incondicional de 7 Dias
          </h3>
          <p className="text-slate-700 text-lg leading-relaxed">
            Se, após 7 dias, você não achar que este é o <strong>mapa mais claro e eficiente</strong> para entender o universo Harari e o futuro da humanidade, devolvemos <strong>100% do seu investimento</strong>. Sem perguntas.
          </p>
        </div>

        {/* Final CTA */}
        <div className="text-center">
          {/* ENVOLVENDO O BOTÃO COM UM LINK <a> */}
          <a 
            href="https://pay.kiwify.com.br/mOAsb3c" 
            target="_blank" 
            rel="noopener noreferrer"
            // O 'block' garante que o link ocupe toda a largura para envolver o botão
            className="block" 
          >
            <Button 
              text="🎉 SIM, QUERO ADQUIRIR ESTE MAPA E ECONOMIZAR 100h!" 
              variant="secondary" 
              fullWidth={true}
              className="whitespace-normal h-auto py-6"
            />
          </a>
          {/* FIM DO LINK */}
          <p className="mt-4 text-sm text-slate-500">
            Acesso imediato disponibilizado no Kiwify.
          </p>
        </div>

      </div>
    </section>
  );
};
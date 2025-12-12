import React from 'react';
import { Book, Act, Pricing } from './types';
import { Scroll, Coins, Brain, Siren } from 'lucide-react';

export const PRICING: Pricing = {
  original: 497.00,
  current: 97.00,
  installments: "ou 12x de R$ 9,70"
};

export const LINKS = {
  checkout: "#link-de-compra", // Placeholder for actual checkout link
  terms: "#termos",
  privacy: "#privacidade"
};

export const BOOKS = [
  {
    title: 'Sapiens',
    description: 'Uma breve história da humanidade',
    coverAlt: 'Capa do Livro Sapiens de Yuval Noah Harari',
    // Link direto da imagem
    imageUrl: 'https://www.lpm.com.br/livros/imagens/sapiens_9788525438393_hd.jpg', 
    // Mantido o link para a página de vendas, caso necessário
    link: 'https://www.lpm.com.br/livros/go.asp?id=472660'
  },
  {
    title: 'Nexus',
    description: 'Uma história da informação',
    coverAlt: 'Capa do Livro Nexus',
    // Link direto da imagem
    imageUrl: 'https://m.media-amazon.com/images/I/71vbRyfPiXL.jpg', 
    link: 'https://www.amazon.com.br/Nexus-hist%C3%B3ria-informa%C3%A7%C3%A3o-intelig%C3%AAncia-artificial/dp/8535937811'
  },
  {
    title: 'Homo Deus',
    description: 'Uma breve história do amanhã',
    coverAlt: 'Capa do Livro Homo Deus de Yuval Noah Harari',
    // Link direto da imagem
    imageUrl: 'https://m.media-amazon.com/images/I/81ql3Ty2O2L.jpg', 
    link: 'https://www.amazon.com.br/Homo-deus-Yuval-Noah-Harari/dp/8535928197'
  },
  {
    title: '21 Lições para o Século 21',
    description: 'Um guia para o futuro',
    coverAlt: 'Capa do Livro 21 Lições para o Século 21',
    // Link direto da imagem
    imageUrl: 'https://cdn.30porcento.com.br/capas/9788535930917.jpg', 
    link: 'https://30porcento.com.br/livro/9788535930917-21-Li%C3%A7%C3%B5es-Para-o-S%C3%A9culo-21'
  },
  {
    title: 'Notas sobre a Pandemia',
    description: 'Um mundo em crise',
    coverAlt: 'Capa do Livro Notas sobre a Pandemia',
    // Link direto da imagem
    imageUrl: 'https://s2.glbimg.com/4FTu-MEaEO0m3PB2uigS0UeSUU0=/smart/e.glbimg.com/og/ed/f/original/2021/06/03/nitas.jpeg', 
    link: 'https://gq.globo.com/Cultura/noticia/2021/06/5-livros-de-yuval-harari-que-voce-precisa-ler-para-entender-o-mundo.html'
  }
];
export const ACTS: Act[] = [
  {
    id: "act-1",
    title: "Ato I: A Criação do Mito",
    subtitle: "O DNA do Engano",
    icon: <Scroll className="w-6 h-6 text-orange-500" />,
    points: [
      "Como a fofoca se tornou a primeira grande rede de comunicação (Nexus).",
      "O preço real e as consequências psicológicas da Revolução Agrícola (Sapiens).",
      "A invenção da ficção e o poder da Cooperação em Massa."
    ]
  },
  {
    id: "act-2",
    title: "Ato II: A Máquina Unificadora",
    subtitle: "Deus é o Ser Humano",
    icon: <Coins className="w-6 h-6 text-orange-500" />,
    points: [
      "O poder de coesão do Dinheiro e a ascensão dos Impérios.",
      "A Força do Humanismo e a busca incessante por Felicidade e Imortalidade.",
      "O caminho evolutivo que nos levou diretamente ao laboratório genético."
    ]
  },
  {
    id: "act-3",
    title: "Ato III: A Crise da Consciência",
    subtitle: "O Fim do Livre Arbítrio",
    icon: <Brain className="w-6 h-6 text-orange-500" />,
    points: [
      "Por que a busca por imortalidade e felicidade pode ser o fim da espécie.",
      "A evidência de que o Algoritmo está tomando o lugar da sua alma (Homo Deus).",
      "Os perigos do Dataísmo e a transferência de autoridade para os sistemas de dados."
    ]
  },
  {
    id: "act-4",
    title: "Ato IV: A Sobrevivência",
    subtitle: "21 Lições para o Caos",
    icon: <Siren className="w-6 h-6 text-orange-500" />,
    points: [
      "Como lidar com desinformação, fake news e a crise global de nacionalismo.",
      "A importância da Meditação e da Humildade como ferramentas de sobrevivência.",
      "O que aprendemos com as crises recentes e como você pode se proteger."
    ]
  }
];
import React from 'react';

export interface Book {
  title: string;
  coverAlt: string;
  description: string;
}

export interface Act {
  id: string;
  title: string;
  subtitle: string;
  points: string[];
  icon: React.ReactNode;
}

export interface Pricing {
  original: number;
  current: number;
  installments?: string;
}
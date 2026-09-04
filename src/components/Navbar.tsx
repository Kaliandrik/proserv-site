import React from 'react';
import './Navbar.css';
import { ShieldCheck } from 'lucide-react';

const WHATSAPP_PHONE = '5588997124642';
const NAVBAR_WA_MESSAGE = 'Olá! Vim pelo site da Proserv e gostaria de fazer uma simulação de crédito.';
const WA_LINK = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(NAVBAR_WA_MESSAGE)}`;

export const Navbar: React.FC = () => {
  return (
    <header className="header">
      <div className="header-container">
        <a href="#inicio" className="brand">
          <img 
            src="/logo-oficial.png" 
            alt="Proserv Consultoria" 
            className="brand-logo-img" 
            onError={(e) => {
              const target = e.currentTarget;
              if (!target.src.endsWith('/logo-oficial.jpg')) {
                target.src = '/logo-oficial.jpg';
              }
            }}
          />
        </a>

        <nav className="nav-links">
          <a href="#inicio">Início</a>
          <a href="#servicos">Serviços</a>
          <a href="#vantagens">Vantagens</a>
          <a href="#depoimentos">Depoimentos</a>
          <a href="#contato">Contato</a>
        </nav>

        <a 
          href={WA_LINK} 
          target="_blank" 
          rel="noreferrer" 
          className="btn-header"
        >
          <ShieldCheck size={18} color="#FFC700" />
          <span>Simule Agora</span>
        </a>
      </div>
    </header>
  );
};
import React from 'react';
import './Hero.css';
import { ArrowRight, CheckCircle2, ShieldCheck } from 'lucide-react';

const WHATSAPP_PHONE = '5588997124642';
const HERO_WA_MESSAGE = 'Olá! Vim pelo site da Proserv e gostaria de fazer uma simulação de crédito com as melhores taxas.';
const WA_LINK = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(HERO_WA_MESSAGE)}`;

export const Hero: React.FC = () => {
  return (
    <section id="inicio" className="hero-section">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            Te ajudamos a ter acesso ao{' '}
            <span className="text-yellow">crédito mais barato</span> e
            transparente do Brasil.
          </h1>

          <p className="hero-desc">
            Taxas justas a partir de 1,76%, sem taxas ocultas e com liberação rápida. 
            Especialistas em soluções financeiras para você realizar seus projetos com tranquilidade.
          </p>

          <div className="hero-actions">
            <a 
              href={WA_LINK} 
              target="_blank" 
              rel="noreferrer" 
              className="btn-hero-primary"
            >
              <span>SIMULE AGORA</span>
              <ArrowRight size={18} />
            </a>
            <a href="#servicos" className="btn-hero-secondary">
              Conhecer Soluções
            </a>
          </div>

          <div className="hero-badges">
            <div className="badge-item">
              <CheckCircle2 size={16} className="text-yellow" />
              <span>Taxas a partir de 1,76%</span>
            </div>
            <div className="badge-item">
              <ShieldCheck size={16} className="text-yellow" />
              <span>Atendimento Seguro</span>
            </div>
            <div className="badge-item">
              <CheckCircle2 size={16} className="text-yellow" />
              <span>Sem taxa oculta</span>
            </div>
          </div>
        </div>

        <div className="hero-media">
          <div className="hero-card-wrapper">
            <div className="hero-image-box">
              <img
                src="/imagens/senhores.png"
                alt="Aposentados atendidos pela Proserv Consultoria"
                onError={(e) => {
                  const target = e.currentTarget;
                  if (!target.src.endsWith('/senhores.png')) {
                    target.src = '/senhores.png';
                  }
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
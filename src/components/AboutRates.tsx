import React from 'react';
import './AboutRates.css';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const WHATSAPP_PHONE = '5588999780443';
const ABOUT_WA_MESSAGE = 'Olá! Vim pelo site da Proserv e gostaria de simular com as taxas reduzidas a partir de 1,76%.';
const WA_LINK = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(ABOUT_WA_MESSAGE)}`;

export const AboutRates: React.FC = () => {
  return (
    <section id="vantagens" className="rates-section">
      <div className="rates-container">
        
        {/* Coluna da Foto da Colaboradora */}
        <div className="rates-visual-column">
          <div className="collaborator-photo-wrapper">
            <img 
              src="/imagens/fotosoraia.png" 
              alt="Soraia - Consultora Proserv" 
              className="collaborator-img" 
              onError={(e) => {
                const target = e.currentTarget;
                if (!target.src.endsWith('/fotosoraia.png')) {
                  target.src = '/fotosoraia.png';
                }
              }}
            />
          </div>
        </div>

        {/* Coluna de Conteúdo Institucional */}
        <div className="rates-content-column">
          <h2 className="rates-title">
            Transformar sonhos em{' '}
            <span className="text-purple-highlight">realidade financeira</span>.
          </h2>

          <p className="rates-text-lead">
            Não comprometa o seu futuro pagando juros exorbitantes. A Proserv nasceu para abrir as portas para as melhores oportunidades de crédito com honestidade e agilidade.
          </p>

          <p className="rates-text-detail">
            Oferecemos soluções acessíveis com taxas reduzidas <strong>a partir de 1,76%</strong>, sem letras miúdas, com suporte humanizado em todas as etapas até o valor cair na sua conta.
          </p>

          <div className="benefits-checklist">
            <div className="benefit-item">
              <CheckCircle2 size={20} className="check-purple" />
              <span>Aprovação sem complicação e 100% regulamentada</span>
            </div>
            <div className="benefit-item">
              <CheckCircle2 size={20} className="check-purple" />
              <span>Sem cobrança prévia ou depósitos antecipados</span>
            </div>
            <div className="benefit-item">
              <CheckCircle2 size={20} className="check-purple" />
              <span>Especialistas dedicados ao seu benefício</span>
            </div>
          </div>

          <div className="rates-cta">
            <a 
              href={WA_LINK} 
              target="_blank" 
              rel="noreferrer" 
              className="btn-rates-primary"
            >
              <span>SIMULE AGORA</span>
              <ArrowRight size={18} />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
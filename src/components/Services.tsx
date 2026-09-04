import React from 'react';
import './Services.css';
import { Landmark, Briefcase, Zap, ArrowRight, CheckCircle2 } from 'lucide-react';

interface ServiceItem {
  id: string;
  icon: React.ReactNode;
  badge: string;
  isPopular?: boolean;
  title: string;
  description: string;
  benefits: string[];
  ctaText: string;
  whatsappMessage: string;
}

const servicesData: ServiceItem[] = [
  {
    id: 'consignado',
    icon: <Landmark size={28} />,
    badge: 'Mais Procurado',
    isPopular: true,
    title: 'Empréstimo Consignado',
    description: 'As menores taxas do mercado com débito automático em folha e aprovação ágil para beneficiários e servidores.',
    benefits: [
      'Aposentados e pensionistas do INSS',
      'Servidores Federais, Estaduais e Municipais',
      'Sem consulta ao SPC ou Serasa'
    ],
    ctaText: 'Simular Consignado',
    whatsappMessage: 'Olá! Vim pelo site da Proserv e tenho interesse em simular um Empréstimo Consignado (INSS/Servidor Público).',
  },
  {
    id: 'clt',
    icon: <Briefcase size={28} />,
    badge: 'Carteira Assinada',
    title: 'Funcionários CLT',
    description: 'Linhas exclusivas para quem trabalha com carteira assinada liberar crédito sem burocracia desnecessária.',
    benefits: [
      'Empréstimo Consignado com desconto em folha',
      'Antecipação de FGTS',
      'Liberação rápida direto na sua conta bancária'
    ],
    ctaText: 'Simular para CLT',
    whatsappMessage: 'Olá! Vim pelo site da Proserv e sou funcionário CLT. Gostaria de simular crédito / FGTS.',
  },
  {
    id: 'autonomos',
    icon: <Zap size={28} />,
    badge: 'Débito em Fatura',
    title: 'Autônomos',
    description: 'Linha ágil voltada a profissionais liberais e empreendedores, com parcelamento facilitado cobrado diretamente na sua conta de luz.',
    benefits: [
      'Empréstimo na conta de luz',
      'Exige apenas titularidade da conta e documento com foto',
      'Liberação rápida direto na sua conta bancária'
    ],
    ctaText: 'Simular na Conta de Luz',
    whatsappMessage: 'Olá! Vim pelo site da Proserv e sou autônomo. Gostaria de simular o empréstimo com débito na conta de luz.',
  },
];

const WHATSAPP_PHONE = '5588997124642';

export const Services: React.FC = () => {
  return (
    <section id="servicos" className="services-section">
      <div className="services-container">
        <header className="services-header">
          <div className="services-pill">
            <span>Nossas Linhas de Atendimento</span>
          </div>

          <h2 className="services-heading">
            Soluções financeiras pensadas para a sua tranquilidade
          </h2>

          <p className="services-subheading">
            Sem pegadinhas ou taxas ocultas. Escolha a sua categoria e receba uma proposta personalizada com atendimento humanizado.
          </p>
        </header>

        <div className="services-grid">
          {servicesData.map((item) => (
            <article
              key={item.id}
              className={`service-card ${item.isPopular ? 'popular-card' : ''}`}
            >
              <div className="card-header">
                <div className="card-icon-box">{item.icon}</div>
                <span className={`card-badge ${item.isPopular ? 'badge-yellow' : ''}`}>
                  {item.badge}
                </span>
              </div>

              <div className="card-main">
                <h3 className="card-title">{item.title}</h3>
                <p className="card-description">{item.description}</p>

                <div className="card-divider" />

                <ul className="card-list">
                  {item.benefits.map((benefit, index) => (
                    <li key={index} className="card-list-item">
                      <CheckCircle2 size={18} className="list-check-icon" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="card-action">
                <a
                  href={`https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(item.whatsappMessage)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-service"
                >
                  <span>{item.ctaText}</span>
                  <ArrowRight size={18} className="btn-arrow" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
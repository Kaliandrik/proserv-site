import React from 'react';
import './Services.css';
import { Landmark, PiggyBank, Baby, ArrowRight, CheckCircle2 } from 'lucide-react';

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
    description: 'Crédito com débito em folha, taxas reduzidas e liberação rápida para você realizar seus planos sem estresse.',
    benefits: [
      'Aposentados e pensionistas do INSS',
      'Sem consulta ao SPC ou Serasa',
      'Prazos estendidos de pagamento',
    ],
    ctaText: 'Simular Consignado',
    whatsappMessage: 'Olá! Vim pelo site da Proserv e tenho interesse em simular um Empréstimo Consignado.',
  },
  {
    id: 'fgts',
    icon: <PiggyBank size={28} />,
    badge: 'Sem Mensalidade',
    title: 'Antecipação do FGTS',
    description: 'Antecipe até 10 anos do seu Saque-Aniversário e receba o valor direto na sua conta sem parcelas mensais.',
    benefits: [
      'Desconto automático no saldo FGTS',
      'Liberação em poucas horas',
      'Disponível para quem está negativado',
    ],
    ctaText: 'Antecipar Saque',
    whatsappMessage: 'Olá! Vim pelo site da Proserv e tenho interesse na Antecipação do meu FGTS.',
  },
  {
    id: 'maternidade',
    icon: <Baby size={28} />,
    badge: 'Direito Garantido',
    title: 'Auxílio Maternidade',
    description: 'Assessoria completa para mães receberem seu benefício de forma rápida, segura e sem burocracia.',
    benefits: [
      'Válido para crianças de até 5 anos',
      'Análise documental personalizada',
      'Acompanhamento do início ao fim',
    ],
    ctaText: 'Consultar Direito',
    whatsappMessage: 'Olá! Vim pelo site da Proserv e gostaria de uma consultoria sobre o Auxílio Maternidade.',
  },
];

const WHATSAPP_PHONE = '5588999780443';

export const Services: React.FC = () => {
  return (
    <section id="servicos" className="services-section">
      <div className="services-container">
        <header className="services-header">
          <h2 className="services-heading">
            Soluções financeiras pensadas para a sua{' '}
            <span className="text-purple-highlight">tranquilidade</span>
          </h2>
          <p className="services-subheading">
            Sem pegadinhas ou taxas ocultas. Escolha a linha ideal e conte com um atendimento humanizado e transparente.
          </p>
        </header>

        <div className="services-grid">
          {servicesData.map((item) => (
            <article
              key={item.id}
              className={`service-card ${item.isPopular ? 'popular-card' : ''}`}
            >
              {item.isPopular && <div className="popular-top-stripe" />}

              <div className="card-header">
                <div className="card-icon-box">{item.icon}</div>
                <span className={`card-badge ${item.isPopular ? 'badge-popular' : ''}`}>
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
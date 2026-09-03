import React from 'react';
import './Testimonials.css';
import { Star, Quote, CheckCircle2 } from 'lucide-react';

interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  avatar: string;
  fallbackAvatar: string;
  text: string;
  service: string;
}

const testimonialsData: TestimonialItem[] = [
  {
    id: 'fatima',
    name: 'Dona Fátima',
    role: 'Aposentada do INSS',
    avatar: '/imagens/donafatima.png',
    fallbackAvatar: '/donafatima.png',
    service: 'Consignado',
    text: 'Eu gostaria de agradecer a Proserv e o atendimento da Angela. Mesmo que eu tenha desconfiado no início, ela me atendeu muito bem e aos poucos tive confiança pra confirmar o contrato. Meu dinheiro já está em conta, vou realizar meu sonho da casa própria. Muito obrigada!',
  },
  {
    id: 'nilsa',
    name: 'Dona Nilsa',
    role: 'Aposentada do INSS',
    avatar: '/imagens/donanilsa.png',
    fallbackAvatar: '/donanilsa.png',
    service: 'Consignado',
    text: 'Sou uma pessoa simples e não compreendo muito. A Proserv não me deixou nenhuma dúvida sobre a seriedade do processo. Fiquei muito feliz em conhecer a empresa, eles sabem nos tratar com o respeito e a atenção que merecemos.',
  },
  {
    id: 'maria',
    name: 'Dona Maria',
    role: 'Empréstimo FGTS',
    avatar: '/imagens/donamaria.png',
    fallbackAvatar: '/donamaria.png',
    service: 'Saque FGTS',
    text: 'Vi no Instagram que a Proserv faz empréstimo com o saldo do FGTS, entrei em contato e a atendente Thifany me explicou como solicitar com toda atenção. O trabalho deles é de extrema confiança e o valor caiu super rápido.',
  },
];

export const Testimonials: React.FC = () => {
  return (
    <section id="depoimentos" className="testimonials-section">
      <div className="testimonials-container">
        
        {/* Cabeçalho Refinado */}
        <header className="testimonials-header">
          <div className="header-text-group">
            <h2 className="testimonials-title">
              Veja o que os clientes falam da{' '}
              <span className="text-purple-gradient">Proserv</span>
            </h2>
            <p className="testimonials-desc">
              Ouvir de quem já transformou sua vida financeira com a gente é a melhor garantia de segurança e compromisso.
            </p>
          </div>

          {/* Card Resumo de Avaliações */}
          <div className="trust-rating-pill">
            <div className="stars-row">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={18} className="star-filled" />
              ))}
            </div>
            <div className="rating-metrics">
              <strong>4.9 / 5.0</strong>
              <span>+2.500 clientes atendidos</span>
            </div>
          </div>
        </header>

        {/* Grid de Depoimentos */}
        <div className="testimonials-grid">
          {testimonialsData.map((item) => (
            <article key={item.id} className="testimonial-card">
              <Quote size={32} className="quote-icon" />

              <div className="card-stars">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={15} className="star-filled" />
                ))}
              </div>

              <p className="testimonial-quote">"{item.text}"</p>

              <div className="testimonial-author">
                <div className="author-avatar-box">
                  <img
                    src={item.avatar}
                    alt={item.name}
                    className="author-avatar-img"
                    onError={(e) => {
                      const target = e.currentTarget;
                      // Tenta carregar sem a pasta /imagens caso falhe
                      if (target.src.includes('/imagens/')) {
                        target.src = item.fallbackAvatar;
                        return;
                      }
                      // Se for extensão diferente (.jpg)
                      if (target.src.endsWith('.png')) {
                        target.src = target.src.replace('.png', '.jpg');
                        return;
                      }

                      // Fallback final: inicial do nome
                      target.style.display = 'none';
                      if (target.parentElement) {
                        target.parentElement.classList.add('avatar-fallback');
                        target.parentElement.setAttribute(
                          'data-initial',
                          item.name.charAt(item.name.indexOf(' ') + 1 || 0)
                        );
                      }
                    }}
                  />
                </div>

                <div className="author-meta">
                  <div className="author-name-row">
                    <h4 className="author-name">{item.name}</h4>
                    <CheckCircle2 size={15} className="verified-icon" />
                  </div>
                  <span className="author-role">{item.role}</span>
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
};
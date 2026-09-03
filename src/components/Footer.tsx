import React from 'react';
import './Footer.css';
import { 
  MessageCircle, 
  MapPin, 
  Mail, 
  Phone 
} from 'lucide-react';

interface FooterProps {
  onOpenTerms: () => void;
  onOpenPrivacy: () => void;
}

const WHATSAPP_PHONE = '5588999780443';

const createWaLink = (message: string) => {
  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`;
};

export const Footer: React.FC<FooterProps> = ({ onOpenTerms, onOpenPrivacy }) => {
  return (
    <footer id="contato" className="footer-section">
      {/* Faixa de Redes Sociais */}
      <div className="footer-social-bar">
        <div className="footer-container social-bar-content">
          <div className="social-label-group">
            <span className="social-pill">Fique por dentro</span>
            <p className="social-callout">Conecte-se conosco em nossas redes sociais:</p>
          </div>

          <div className="social-icons-group">
            <a 
              href="https://www.instagram.com/proservconsultoria/" 
              target="_blank" 
              rel="noreferrer" 
              className="social-btn"
              aria-label="Instagram da Proserv"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
            </a>

            <a 
              href="https://www.facebook.com/p/Proserv-Consultoria-100075997115141/?locale=pt_BR" 
              target="_blank" 
              rel="noreferrer" 
              className="social-btn"
              aria-label="Facebook da Proserv"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </a>

            <a 
              href={createWaLink('Olá! Gostaria de falar com um consultor da Proserv.')}
              target="_blank" 
              rel="noreferrer" 
              className="social-btn whatsapp-highlight"
              aria-label="Falar no WhatsApp"
            >
              <MessageCircle size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Grade de Informações */}
      <div className="footer-main">
        <div className="footer-container footer-grid">
          
          {/* Coluna 1: Marca */}
          <div className="footer-col brand-col">
            <img 
              src="/logo-oficial.png" 
              alt="Proserv Consultoria" 
              className="footer-brand-logo"
              onError={(e) => {
                const target = e.currentTarget;
                if (!target.src.endsWith('/logo-oficial.jpg')) {
                  target.src = '/logo-oficial.jpg';
                }
              }}
            />
            <p className="footer-brand-desc">
              Soluções financeiras conscientes, seguras e descomplicadas em Tianguá e todo o Brasil.
            </p>
          </div>

          {/* Coluna 2: Serviços com Mensagens Pré-definidas */}
          <div className="footer-col">
            <h4 className="footer-col-title">Serviços</h4>
            <ul className="footer-links-list">
              <li>
                <a 
                  href={createWaLink('Olá! Tenho interesse em simular um Empréstimo Consignado.')}
                  target="_blank"
                  rel="noreferrer"
                >
                  Empréstimo Consignado
                </a>
              </li>
              <li>
                <a 
                  href={createWaLink('Olá! Gostaria de antecipar o meu saldo do FGTS.')}
                  target="_blank"
                  rel="noreferrer"
                >
                  Antecipação do FGTS
                </a>
              </li>
              <li>
                <a 
                  href={createWaLink('Olá! Tenho interesse em receber informações sobre o Auxílio Maternidade.')}
                  target="_blank"
                  rel="noreferrer"
                >
                  Auxílio Maternidade
                </a>
              </li>
              <li>
                <a 
                  href={createWaLink('Olá! Gostaria de informações sobre consultoria de crédito e CPF/CNPJ.')}
                  target="_blank"
                  rel="noreferrer"
                >
                  CPF / CNPJ Blindado
                </a>
              </li>
            </ul>
          </div>

          {/* Coluna 3: Links Úteis */}
          <div className="footer-col">
            <h4 className="footer-col-title">Links Úteis</h4>
            <ul className="footer-links-list">
              <li><a href="#inicio">Início</a></li>
              <li><a href="#vantagens">Quem Somos</a></li>
              <li><a href="#depoimentos">Depoimentos</a></li>
              <li>
                <a 
                  href={createWaLink('Olá! Gostaria de fazer uma simulação de crédito rápida.')}
                  target="_blank"
                  rel="noreferrer"
                >
                  Simulação Online
                </a>
              </li>
            </ul>
          </div>

          {/* Coluna 4: Contato */}
          <div className="footer-col contact-col">
            <h4 className="footer-col-title">Contato</h4>
            <ul className="contact-list">
              <li>
                <MapPin size={18} className="contact-icon" />
                <span>Rua Madalena Nunes, 579 — Centro, Tianguá - CE</span>
              </li>
              <li>
                <MessageCircle size={18} className="contact-icon" />
                <a 
                  href={createWaLink('Olá! Gostaria de tirar algumas dúvidas pelo WhatsApp.')}
                  target="_blank" 
                  rel="noreferrer"
                >
                  WhatsApp: (88) 99978-0443
                </a>
              </li>
              <li>
                <Phone size={18} className="contact-icon" />
                <a href="tel:8821330771">Fixo: (88) 2133-0771</a>
              </li>
              <li>
                <Mail size={18} className="contact-icon" />
                <a href="mailto:suporte@proservconsultoria.com.br">
                  suporte@proservconsultoria.com.br
                </a>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Faixa Inferior Legal */}
      <div className="footer-bottom">
        <div className="footer-container bottom-flex">
          <div className="legal-info">
            <p className="corporate-name">
              <strong>Proserv Consultoria e Intermediação de Negócios Ltda</strong>
            </p>
            <p className="cnpj-text">CNPJ: 45.949.372/0001-05</p>
            <p className="copyright-text">
              © {new Date().getFullYear()} Proserv Consultoria. Todos os direitos reservados.
            </p>
          </div>

          <div className="legal-nav">
            <button 
              type="button" 
              onClick={onOpenPrivacy} 
              className="legal-link-btn"
            >
              Política de Privacidade
            </button>
            <span className="divider">•</span>
            <button 
              type="button" 
              onClick={onOpenTerms} 
              className="legal-link-btn"
            >
              Termos de Uso
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
import React, { useEffect } from 'react';
import './LegalPages.css';
import { ArrowLeft } from 'lucide-react';

interface TermsOfUseProps {
  onBack: () => void;
}

export const TermsOfUse: React.FC<TermsOfUseProps> = ({ onBack }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="legal-page-wrapper">
      <header className="legal-header">
        <div className="legal-nav-container">
          <button onClick={onBack} className="legal-back-btn">
            <ArrowLeft size={18} />
            <span>Voltar para o site</span>
          </button>
          <img src="/logo-oficial.png" alt="Proserv Consultoria" className="legal-logo" />
        </div>
      </header>

      <main className="legal-container">
        <h1 className="legal-title">Termo de Uso</h1>
        <p className="legal-company-subtitle">Proserv Consultoria e Intermediação de Negócios Ltda</p>

        <div className="legal-section-block">
          <h3>1. Sobre a Proserv</h3>
          <p>
            A Proserv Consultoria e Intermediação de Negócios Ltda, inscrita no CNPJ nº 45.949.372/0001-05, 
            disponibiliza este site com o objetivo de apresentar seus serviços, facilitar simulações e 
            viabilizar o contato com pessoas interessadas em soluções de crédito.
          </p>
          <p>Ao acessar ou utilizar este site, você concorda com os termos abaixo.</p>
        </div>

        <div className="legal-section-block">
          <h3>2. Uso do site</h3>
          <p>
            O uso deste site deve ser feito de forma responsável, ética e de acordo com a legislação vigente. 
            Não é permitido utilizar o site de maneira que possa comprometer sua segurança, funcionamento 
            ou a experiência de outros usuários.
          </p>
        </div>

        <div className="legal-section-block">
          <h3>3. Conteúdo e direitos</h3>
          <p>
            Todo o conteúdo presente neste site, como textos, imagens, marcas, logotipos e materiais informativos, 
            é de propriedade da Proserv Consultoria, sendo protegido por direitos autorais e outras normas legais.
          </p>
          <p>A reprodução, cópia ou uso do conteúdo sem autorização prévia não é permitida.</p>
        </div>

        <div className="legal-section-block">
          <h3>4. Dados pessoais e consentimento</h3>
          <p>
            Ao preencher seus dados e clicar em "Continuar", você concede consentimento livre, informado e inequívoco 
            para que a Proserv Consultoria e Intermediação de Negócios Ltda entre em contato com você.
          </p>
          <p><strong>Canais de contato:</strong></p>
          <ul className="legal-list">
            <li>WhatsApp</li>
            <li>Telefone</li>
            <li>Outros meios digitais</li>
          </ul>

          <p><strong>Finalidade do contato:</strong></p>
          <ul className="legal-list">
            <li>Realização de simulações de crédito</li>
            <li>Contratação de produtos financeiros</li>
            <li>Acompanhamento, suporte e orientações relacionadas às solicitações realizadas</li>
          </ul>

          <p>
            Seus dados serão utilizados exclusivamente para essas finalidades, com segurança e confidencialidade, 
            conforme a Lei Geral de Proteção de Dados (LGPD – Lei nº 13.709/2018).
          </p>
        </div>

        <div className="legal-section-block">
          <h3>5. Links para sites externos</h3>
          <p>
            Este site pode conter links para páginas de terceiros. A Proserv não se responsabiliza por 
            conteúdos, práticas ou políticas adotadas nesses sites.
          </p>
        </div>

        <div className="legal-section-block">
          <h3>6. Limitação de responsabilidade</h3>
          <p>
            A Proserv não se responsabiliza por danos decorrentes do uso ou da indisponibilidade do site, 
            salvo nos casos expressamente previstos em lei.
          </p>
        </div>

        <div className="legal-section-block">
          <h3>7. Atualizações</h3>
          <p>
            Este Termo de Uso pode ser atualizado a qualquer momento para garantir melhorias, segurança 
            e conformidade legal. Recomendamos a consulta periódica.
          </p>
        </div>

        <div className="legal-section-block">
          <h3>8. Contato</h3>
          <p>
            Em caso de dúvidas sobre estes termos ou sobre o tratamento de dados pessoais, entre em contato pelo e-mail:
          </p>
          <p><strong>suporte@proservconsultoria.com.br</strong></p>
        </div>

        <div className="legal-section-block">
          <h3>9. Aceite</h3>
          <p>
            Ao utilizar este site e enviar seus dados, você declara que leu, compreendeu e concorda com este 
            Termo de Uso e com a Política de Privacidade da Proserv Consultoria.
          </p>
        </div>

        <div className="legal-footer-box">
          <p>© {new Date().getFullYear()} Proserv Consultoria e Intermediação de Negócios Ltda</p>
          <p>CNPJ: 45.949.372/0001-05 • Todos os direitos reservados.</p>
        </div>
      </main>
    </div>
  );
};
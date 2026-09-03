import React, { useEffect } from 'react';
import './LegalPages.css';
import { ArrowLeft } from 'lucide-react';

interface PrivacyPolicyProps {
  onBack: () => void;
}

export const PrivacyPolicy: React.FC<PrivacyPolicyProps> = ({ onBack }) => {
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
        <h1 className="legal-title">Política de Privacidade</h1>
        <p className="legal-company-subtitle">Proserv Consultoria e Intermediação de Negócios Ltda</p>

        <div className="legal-section-block">
          <p>
            A Proserv Consultoria e Intermediação de Negócios Ltda está comprometida em proteger a privacidade 
            dos usuários do seu site. Esta política de privacidade descreve como coletamos, usamos, divulgamos 
            e protegemos as informações pessoais dos visitantes do site.
          </p>
        </div>

        <div className="legal-section-block">
          <h3>Informações Coletadas</h3>
          <p>
            Ao utilizar nosso site, podemos coletar informações pessoais fornecidas voluntariamente pelos usuários, 
            como nome, endereço de e-mail, número de telefone e outras informações de contato. Além disso, 
            podemos coletar informações automaticamente, como endereço IP, tipo de navegador, páginas visitadas 
            e tempo gasto no site.
          </p>
        </div>

        <div className="legal-section-block">
          <h3>Uso das Informações</h3>
          <p>As informações coletadas podem ser usadas para os seguintes fins:</p>
          <ol className="legal-list">
            <li>Fornecer e personalizar os serviços oferecidos no site.</li>
            <li>Enviar comunicações relacionadas aos serviços, como atualizações, alertas e notificações.</li>
            <li>Analisar o uso do site e melhorar sua funcionalidade e experiência do usuário.</li>
            <li>Cumprir obrigações legais e regulatórias.</li>
          </ol>
        </div>

        <div className="legal-section-block">
          <h3>Divulgação de Informações</h3>
          <p>
            Não compartilhamos, vendemos ou alugamos informações pessoais dos usuários a terceiros, exceto conforme 
            descrito nesta política de privacidade ou quando exigido por lei.
          </p>
          <p>
            Podemos divulgar informações pessoais a prestadores de serviços terceirizados que nos auxiliam na operação 
            do site ou na prestação de serviços aos usuários, desde que esses prestadores de serviços concordem em manter 
            a confidencialidade das informações.
          </p>
        </div>

        <div className="legal-section-block">
          <h3>Cookies e Tecnologias Semelhantes</h3>
          <p>
            Nosso site pode usar cookies e outras tecnologias de rastreamento para coletar informações sobre as preferências 
            dos usuários e melhorar sua experiência no site. Os usuários podem optar por desativar cookies em seus navegadores, 
            mas isso pode afetar a funcionalidade do site.
          </p>
        </div>

        <div className="legal-section-block">
          <h3>Segurança</h3>
          <p>
            Implementamos medidas de segurança razoáveis para proteger as informações pessoais dos usuários contra 
            acesso não autorizado, uso indevido ou divulgação. No entanto, não podemos garantir a segurança absoluta 
            das informações transmitidas pela Internet.
          </p>
        </div>

        <div className="legal-section-block">
          <h3>Links para Sites de Terceiros</h3>
          <p>
            Nosso site pode conter links para sites de terceiros, que têm políticas de privacidade próprias. Não somos 
            responsáveis pelo conteúdo ou práticas de privacidade desses sites. Recomendamos que os usuários revisem as 
            políticas de privacidade desses sites antes de fornecerem informações pessoais.
          </p>
        </div>

        <div className="legal-section-block">
          <h3>Menores de Idade</h3>
          <p>
            Nosso site não se destina a crianças menores de 13 anos, e não coletamos intencionalmente informações pessoais 
            de crianças. Se tomarmos conhecimento de que coletamos informações pessoais de uma criança sem o consentimento dos 
            pais, tomaremos medidas para remover essas informações de nossos sistemas.
          </p>
        </div>

        <div className="legal-section-block">
          <h3>Alterações na Política de Privacidade</h3>
          <p>
            Reservamos o direito de modificar esta política de privacidade a qualquer momento, a nosso critério. As 
            alterações entram em vigor imediatamente após sua publicação no site. Ao continuar a usar o site após tais 
            modificações, você concorda em ficar vinculado à política de privacidade revisada.
          </p>
        </div>

        <div className="legal-section-block">
          <h3>Contato</h3>
          <p>
            Se você tiver alguma dúvida ou preocupação sobre esta política de privacidade, entre em contato conosco 
            através do e-mail:
          </p>
          <p><strong>suporte@proservconsultoria.com.br</strong></p>
          <p>
            Ao utilizar este site, você concorda com esta política de privacidade. Obrigado por visitar o site da 
            Proserv Consultoria e Intermediação de Negócios Ltda.
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
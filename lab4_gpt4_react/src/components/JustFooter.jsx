import justFooterData from "../mockData/justFooterData";

function Title({ children }) {
  return <h1 className="footerok">{children}</h1>;
}

function CtaButton({ children }) {
  return (
    <button className="last_repeat">
      {children}
    </button>
  );
}

function InfoGpt({ src, alt, text, prava }) {
  return (
    <div className="info_gpt">
      <img src={src} alt={alt} className="gpt3" />
      <p className="down_description">{text}</p>
      <p className="down_description">{prava}</p>
    </div>
  );
}

function InfoTitle({ children }) {
  return <h4 className="h_down_d">{children}</h4>;
}

function LinkItem({ path, description }) {
  return (
    <a href={path} className="grayy">
      {description}
    </a>
  );
}

function ContactLine({ text }) {
  return <p className="down_description">{text}</p>;
}

function Copyright({ children }) {
  return (
    <div className="copyright">
      <p className="copyrights">{children}</p>
    </div>
  );
}

export default function JustFooter({ data = justFooterData }) {
  const {
    title,
    button,
    infoGpt,
    infoLinksTitle,
    infoLinks,
    infoCompanyTitle,
    infoCompany,
    infoContactsTitle,
    infoMestoAndPhoneNumber,
    infoMail,
    copyright,
  } = data;

  return (
    <div className="just_footer">
      <div className="on_big_back">
        <div className="inside_big_back">
          <Title>{title}</Title>
          <CtaButton>{button}</CtaButton>

          <div className="info">
            <InfoGpt {...infoGpt} />

            <div className="info_links">
              <InfoTitle>{infoLinksTitle}</InfoTitle>
              {infoLinks.map((item, i) => (
                <LinkItem key={`links-${i}`} {...item} />
              ))}
            </div>

            <div className="info_company">
              <InfoTitle>{infoCompanyTitle}</InfoTitle>
              {infoCompany.map((item, i) => (
                <LinkItem key={`company-${i}`} {...item} />
              ))}
            </div>

            <div className="info_contacts">
              <InfoTitle>{infoContactsTitle}</InfoTitle>
              {infoMestoAndPhoneNumber.map((row, i) => (
                <ContactLine key={`contact-${i}`} {...row} />
              ))}
              <LinkItem {...infoMail} />
            </div>
          </div>
        </div>
      </div>

      <Copyright>{copyright}</Copyright>
    </div>
  );
}

import Year from "components/year";
import { useCallback, useRef, useState } from "react";
import getClassNames from "utils/getClassNames";
import { ReactComponent as CopyIcon } from "./copy-icon.svg";
import { ReactComponent as EmailIcon } from "./email-icon.svg";
import "./footer.scss";
import { ReactComponent as PhoneIcon } from "./phone-icon.svg";
import { ReactComponent as SmileIcon } from "./smile-icon.svg";

enum CopyState {
  default,
  copyEmail,
  copyPhone,
  copyNIP,
}

const Footer = () => {
  const [copyState, setCopyState] = useState(CopyState.default);
  const copyRef = useRef<ReturnType<typeof setTimeout>>();

  const copyText = useCallback((copy: CopyState) => {
    setCopyState(copy);

    let text = "";
    switch (copy) {
      case CopyState.copyEmail:
        text = "malyszko.adam@gmail.com";
        break;
      case CopyState.copyPhone:
        text = "+48726256488";
        break;
      case CopyState.copyNIP:
        text = "6312593728";
        break;
      default:
        return;
    }
    navigator.clipboard.writeText(text);

    clearTimeout(copyRef.current);
    copyRef.current = setTimeout(() => {
      setCopyState(CopyState.default);
    }, 1000);
  }, []);

  const copyEmail = () => copyText(CopyState.copyEmail);
  const copyPhone = () => copyText(CopyState.copyPhone);
  const copyNIP = () => copyText(CopyState.copyNIP);

  return (
    <footer className="footer">
      <div className="footer__info">
        <div>
          <div>ul. Juliana Tuwima 20/5</div>
          <div>41-800 Zabrze</div>
        </div>
        <div>
          <a
            href="mailto:malyszko.adam@gmail.com"
            aria-label="contact-email"
            className={getClassNames("footer__link", {
              active: copyState === CopyState.copyEmail,
              email: true,
            })}
            onClick={copyEmail}
            onKeyDown={copyEmail}
            tabIndex={0}
            role="button"
          >
            {copyState === CopyState.copyEmail ? (
              <>
                Open mail! <SmileIcon className="footer__icon" />
              </>
            ) : (
              <>
                malyszko.adam@gmail.com <EmailIcon className="footer__icon" />
              </>
            )}
          </a>
        </div>
        <div>
          <a
            href="tel:+48726256488"
            aria-label="contact-phone"
            className={getClassNames("footer__link", {
              active: copyState === CopyState.copyPhone,
              phone: true,
            })}
            onClick={copyPhone}
            onKeyDown={copyPhone}
            tabIndex={0}
            role="button"
          >
            {copyState === CopyState.copyPhone ? (
              <>
                Copy phone! <SmileIcon className="footer__icon" />
              </>
            ) : (
              <>
                +48 726 256 488 <PhoneIcon className="footer__icon" />
              </>
            )}
          </a>
        </div>
        <div>
          <span
            className={getClassNames("footer__link", {
              active: copyState === CopyState.copyNIP,
              nip: true,
            })}
            onClick={copyNIP}
            onKeyDown={copyNIP}
            tabIndex={0}
            role="button"
            aria-label="nip"
          >
            {copyState === CopyState.copyNIP ? (
              <>
                Copy success! <SmileIcon className="footer__icon" />
              </>
            ) : (
              <>
                NIP: 6312593728 <CopyIcon className="footer__icon" />
              </>
            )}
          </span>
        </div>
        <Year classNames="footer__year" />
      </div>
      <div className="footer__name">
        ProXD Adam Małyszko
        <sup className="footer__copy">&copy;</sup>
      </div>
    </footer>
  );
};
export default Footer;

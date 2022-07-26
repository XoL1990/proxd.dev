import Year from "components/year";
import "./footer.scss";

const Footer = () => (
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
          className="footer__link"
        >
          malyszko.adam@gmail.com
        </a>
      </div>
      <div>+48 726 256 488</div>
      <div>NIP: 6312593728</div>
      <Year classNames="footer__year" />
    </div>
    <div className="footer__name">
      ProXD Adam Małyszko
      <sup className="footer__copy">&copy;</sup>
    </div>
  </footer>
);
export default Footer;

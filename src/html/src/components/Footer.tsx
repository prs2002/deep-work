import "./Footer.scss";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer__content">
        <div className="footer__content__left">Recenter</div>
        <div className="footer__content__right">
          <div className="footer__content__right__items">
            <a href="#features" className="footer__content__right__items__item">Features</a>
            <div className="footer__content__right__items__item">Download</div>
          </div>
        </div>
      </div>
    </div>
  );
}

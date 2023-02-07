import "../../../assets/styles/main/footer.scss"

import footer from "../../../content/footer"

export default function Footer() {
  return (
    <div className="footer">
      <small className="footer__signature">
        { footer.text }
      </small>
    </div>
  )
}
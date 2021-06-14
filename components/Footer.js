import footerStyles from "../styles/Footer.module.css";

export default function Footer() {
    return (
        <div className={footerStyles.footer}>
            <hr className={footerStyles.hr} />
            <p className={footerStyles.footerParagraph}>Made by Christos Durro</p>
        </div>
    )
}

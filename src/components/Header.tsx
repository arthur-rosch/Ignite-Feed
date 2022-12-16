import styleHeader from "./Header.module.css";
import ignitelogo from "../assets/ignite-logo.svg";

export function Header() {
  return (
    <header className={styleHeader.header}>
      <img src={ignitelogo} alt="Logotipo do Ignite" />
    </header>
  );
}

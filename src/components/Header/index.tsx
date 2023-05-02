import igniteLogo from "assets/Logo.svg";

export function Header() {
  return (
    <header className="header">
      <div>
        <img src={igniteLogo} alt="logotipo todolist" />
      </div>
    </header>
  );
}

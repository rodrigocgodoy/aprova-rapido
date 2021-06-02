import Link from 'next/link';

export default function Header() {
  return (
    <header className="header">
      <Link href="/" passHref>
        <img src="./logo-dark.svg" alt="Logo Aprova Rápido" className="w-48 h-9 cursor-pointer" />
      </Link>
      <div className="flex items-center justify-items-end">
        <a href="/">Home</a>
        <a href="/">Quem somos</a>
        <a href="/">Planos</a>
        <a href="/">Fale conosco</a>
        <button className="btn btn-primary">
          Entrar
        </button>
      </div>
    </header>
  );
}

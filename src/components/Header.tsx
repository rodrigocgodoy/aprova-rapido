import Link from 'next/link';
import { useTranslations } from 'next-intl';

export default function Header() {
  const t = useTranslations('pages');
  
  return (
    <header className="header">
      <Link href="/" passHref>
        <img src="./logo-dark.svg" alt="Logo Aprova Rápido" className="w-48 h-9 cursor-pointer" />
      </Link>
      <div className="flex items-center justify-items-end">
        <a href="/">{t('header.nav.home')}</a>
        <a href="/">{t('header.nav.about-me')}</a>
        <a href="/">{t('header.nav.plans')}</a>
        <a href="/">{t('header.nav.contact-us')}</a>
        <button className="btn btn-primary">
          {t('header.nav.enter')}
        </button>
      </div>
    </header>
  );
}

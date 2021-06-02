import { GetStaticProps } from 'next'
import { useTranslations } from 'next-intl';
import Header from '../components/Header';

export default function Home() {
  const t = useTranslations('pages');
  
  return (
    <>
      <Header />
      <section className="section-intro">
        <div className="container mx-auto flex items-center justify-between h-full">
          <div className="flex-1">
            <span className="text-white">{t('home.title')}</span>
          </div>
          <div className="flex-1" />
        </div>
      </section>
    </>
  )
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      messages: {
        ...require(`../locales/${locale}.json`),
      },
    }
  }
}

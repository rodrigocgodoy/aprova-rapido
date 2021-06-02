import { GetStaticProps } from 'next'
import { useTranslations } from 'next-intl';

export default function Home() {
  const t = useTranslations('pages');
  
  return (
    <div className="container mx-auto">
      <span className="text-custom">{t('home.title')}</span>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const { default: messages = {} } = await import(`../locales/${locale}.json`);

  console.log(messages, require(`../locales/${locale}.json`))

  return {
    props: {
      messages: {
        ...require(`../locales/${locale}.json`),
      },
    }
  }
}

import { Head } from 'vite-react-ssg'
import { SITE_URL } from '../seo.js'

// tags que variam por rota (titulo, descricao, url); o resto fica no index.html
function SEOHead({ title, description, path }) {
  const url = SITE_URL + path
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={SITE_URL + '/og.jpg'} />
    </Head>
  )
}

export default SEOHead

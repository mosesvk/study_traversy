

import Layout from '../components/Layout'

import '../styles/globals.css'
// we can only access global css through HERE. If we want to access styles to the components then we will need to access .module.css



function MyApp({ Component, pageProps }) {
  return (
  <Layout>
    <Component {...pageProps} />
  </Layout>
  )
}

export default MyApp

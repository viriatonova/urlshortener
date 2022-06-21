import { UserProvider } from "../contexts/UserContext";
import { UrlProvider } from "../contexts/UrlContext";
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <UserProvider>
      <UrlProvider>
        <Component {...pageProps} />
      </UrlProvider>
    </UserProvider>
  )
}

export default MyApp

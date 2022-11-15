import { globalStyles } from "../styles/global";

globalStyles();
function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default App;

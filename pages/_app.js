
import '../styles/globals.css'
import { PlasmicRootProvider } from "@plasmicapp/react-web";
import Head from "next/head";
import { Web3Context } from '../components/Web3Context'
import { useState } from "react";

function App({ Component, pageProps }) {

  const [web3auth, setWeb3auth] = useState(null);
  const [provider, setProvider] = useState(null);
  const [userAddress, setUserAddress] = useState("")

  return (
    <Web3Context.Provider value={{
      web3auth, setWeb3auth,
      provider, setProvider,
      userAddress, setUserAddress,

    }}>
        <PlasmicRootProvider Head={Head}>
            <Component {...pageProps} />
        </PlasmicRootProvider>
      </Web3Context.Provider>
  );
}

export default App
  
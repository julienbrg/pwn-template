import { useContext, createContext } from "react";
import { Web3Auth } from "@web3auth/modal";
import { SafeEventEmitterProvider } from "@web3auth/base";

export type GlobalContent = {
    
    web3auth: Web3Auth | null
    setWeb3auth:(c: Web3Auth | null) => void
    provider: SafeEventEmitterProvider | null
    setProvider:(c: SafeEventEmitterProvider | null) => void
    userAddress: string
    setUserAddress:(c: string) => void
    bal: number
    setBal:(c: number) => void
    isOwner: boolean
    setIsOwner: (c: boolean) => void
    userShortenAddr: string
    setShortenAddr:(c: string) => void
    signer: any | null
    setSigner:(c: any | null) => void
}
  
export const Web3Context = createContext<GlobalContent>({
    web3auth: null, 
    setWeb3auth: () => {},
    provider: null, 
    setProvider: () => {},
    userAddress: "",
    setUserAddress: () => {},
    bal: 0,
    setBal: () => {},
    isOwner: false,
    setIsOwner: () => {},
    userShortenAddr: "", 
    setShortenAddr: () => {},
    signer: null, 
    setSigner: () => {},
})
  
export const useGlobalContext = () => useContext(Web3Context)
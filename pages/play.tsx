import * as React from "react";
import * as ph from "@plasmicapp/host";

import { PlasmicPlay } from "../components/plasmic/pwn_template/PlasmicPlay";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useGlobalContext } from '../components/Web3Context';

function Play() {

  const { 
    provider,
    userAddress
  } = useGlobalContext()

  useEffect(() => {
    
  }, [provider, userAddress]);

  const action = async () => {
    console.log("clicked")
  }
  
  return (
    <ph.PageParamsProvider
      params={useRouter()?.query}
      query={useRouter()?.query}
    >
      <PlasmicPlay 

        playground={{
          props: {
            children: (userAddress ? userAddress : "0x")
          }
        }}

        action={{
          props: {
            children: "Action",
            onClick: () => action()
          }
        }}
      
      />
    </ph.PageParamsProvider>
  );
}

export default Play;

import { Identicon } from "../Identicon";
import React from "react";
import { getTokenIcon, AddressToToken, KnownTokenMap } from "../../utils/utils";
import { useConnectionConfig } from "../../contexts/connection";
import { PublicKey } from "@solana/web3.js";


export const TokenIcon = (props: {
  mintAddress?: string| PublicKey;
  style?: React.CSSProperties;
  size?: number;
}) => {
  const { env } = useConnectionConfig();
  const icon = getTokenIcon(AddressToToken.get(env) as KnownTokenMap, props.mintAddress);

  if (icon) {
    return (
      <img
        alt="Token icon"
        key={props.mintAddress as string}
        width="20"
        height="20"
        src={icon}
        style={{
          marginRight: "0.5rem",
          marginTop: "0.11rem",
          borderRadius: "1rem",
          backgroundColor: "white",
          backgroundClip: "padding-box",
          ...props.style,
        }}
      />
    );
  }

  return (
    <Identicon
      address={props.mintAddress as string}
      style={{ marginRight: "0.5rem", ...props.style }}
    />
  );
};

export const PoolIcon = (props: {
  mintA: string;
  mintB: string;
  style?: React.CSSProperties;
}) => {
  return (
    <div style={{ display: "flex" }}>
      <TokenIcon
        mintAddress={props.mintA}
        style={{ marginRight: "-0.5rem", ...props.style }}
      />
      <TokenIcon mintAddress={props.mintB} />
    </div>
  );
};

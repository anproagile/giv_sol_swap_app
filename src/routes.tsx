import React from "react";
import { WalletProvider } from "./contexts/wallet";
import { ConnectionProvider } from "./contexts/connection";
import { AccountsProvider } from "./contexts/accounts";
import { ExchangeView } from './components/Exchange'
import { CurrencyPairProvider } from "./utils/currencyPair";

export function Routes() {
  return (
    <>
      <ConnectionProvider>
        <WalletProvider>
          <AccountsProvider>
            <CurrencyPairProvider>
              <ExchangeView />
            </CurrencyPairProvider>
          </AccountsProvider>
        </WalletProvider>
      </ConnectionProvider>
    </>
  );
}

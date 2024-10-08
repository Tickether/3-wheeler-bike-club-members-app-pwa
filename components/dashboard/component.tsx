"use client"

import { usePrivy } from "@privy-io/react-auth";
import { Logout } from "../logout";

export function Component() {
    const {user} = usePrivy();
    const smartWallet = user?.linkedAccounts.find((account) => account.type === 'smart_wallet');
    console.log(smartWallet?.address);
    // Logs the smart wallet's address
    console.log(smartWallet?.type);
    return (
      <div className="flex flex-col items-center p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <Logout/>
        <div className="text-center">
            <p>Privy x Biconomy Smart Account:</p>
            <p className="font-bold">{(smartWallet?.address)}</p>
        </div>
      </div>
    );
}
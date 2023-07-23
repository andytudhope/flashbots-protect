export const faq = [
  {
    key: 0,
    title: "What is MEV?",
    description: `Maximum Extractable Value is the maximum value anyone can extract from knowing who wants to transact in which order.
        
        Think about it this way. Really big hedge funds buy information about who is buying which stocks, because they can use it to place much bigger bets based on their ability to do sophisticated analysis. This is called "Profit From Order Flow", because it allows them to profit from knowing what the flow of orders to buy or sell a stock will be.

        This becomes an even bigger problem on public blockchains, where everyone can see every trade. If you want to swap ETH for DAI, you must sign a transaction and send it to the "mempool", where it hangs around waiting to be confirmed. Anyone can see it there, and either "frontrun" you (buy the DAI before you do) or - even worse - buy DAI before your transaction, knowing your buy will increase the price, and then sell it afterwards.
        
        MEV means we all get worse prices for our transactions and can cause us to lose out on hundreds or even thousands of dollars. Flashbots Protect is an easy solution - an RPC endpoint that protects all types of transactions from MEV.`,
  },
  {
    key: 1,
    title: "Why should I care?",
    description: `If we don't balance fairness, decentralization, privacy, and transparency, then we cannot create protocols that will lead to different outcomes than the current financial system. It will be just as ineqitious, if not more so. The mechanisms we build into our protocols are critical if we are to protect the people who participate in our networks. Finding ways to share MEV optimally is at the very heart of such protocol design.
        
        Moreover, mev-share is one of the few current examples of a regenerative mechanism. This is actually what "ReFi" looks like. It ensures that the value created by participating in a network is (i) allocated in a way that allows the network to operate securely and efficiently and (ii) that the greatest possible amount of that value finds its way back to person who made it possible in the first place.`,
  },
  {
    key: 2,
    title: "What is an RPC?",
    description: `Applications like your wallet use Remote Procedure Calls to submit transactions to the blockchain.

        Flashbots Protect RPC ensures your trades are protected from MEV. Rather than sending your transaction straight to the public mempool, we route it to a network of searchers that scan for backrunning opportunities, but cannot frontrun or sandwich your trades.`,
  },
  {
    key: 3,
    title: "What kinds of MEV does Flashbots Protect me from?",
    description: `Flashbots protects from most kinds of frontrunning, but especially from trade sandwiching, which is when a searcher trades just before and just after your transaction to make a profit.`,
  },
  {
    key: 4,
    title: "How does Flashbots Protect save my money?",
    description: `Flashbots Protect lets you benefit from backrunning. It does this by allowing searchers to “bid” in an auction to win the right to backrun your trade. When this happens, you receive 90% of the profit their backrunning opportunity created (compared with 0% when not using Flashbots Protect).The rebate is paid whomever sent the transaction (tx.origin), immediately, in the same block.

        In return for benefitting from backrunning your trade, these searchers are not allowed to frontrun or sandwich you — thus protecting you from the worst types of MEV.`,
  },
  {
    key: 5,
    title: "How do I install Flashbots Protect?",
    description: `To use Flashbots Protect, just click the button on the home page of this website. (Note that once your Flashbots Protect is added to your wallet, you might need to check that it is your selected network from time to time.)

        If your wallet does not support adding custom RPC endpoints, you may have to contact your wallet developer to get Flashbots Protect included as a supported RPC.`,
  },
  {
    key: 6,
    title: "How does Flashbots Protect work?",
    description: `Flashbots Protect facilitates an auction between a network of “searchers” who are given the opportunity to backrun your transactions.

        When searchers submit winning bids through the orderflow auction, Flashbots Protect sends the winning bid to users and validators, using a 90/10 split. Validators keep the 10% as a reward, and users pocket the other 90% as profit they'd miss out on if they weren't using Flashbots Protect.
        
        As long as you have Flashbots Protect set as the RPC in your wallet (as if it were another network), you are protected from frontrunning and sandwiching when using any Ethereum dApp. And the profit share from backrunning is deposited automatically into your wallet.`,
  },
  {
    key: 7,
    title: "Will this protect me fully?",
    description: `In short: no.
        
        There is a possibility that there can be a "chainre-org", or that the block your transaction is included in becomes "uncled", meaning it is not included in the canonical version of the chain, yet the tranactions in it become public, which means they are exposed to MEV risk.
        
        Moreover, if you are an advanced trader, you should always set slippage control to have multiple protections in place.

        The goal of RPCs like this is to prevent 99% of sandwiches, but no existing solution can provide full 100% protection.`,
  },
];

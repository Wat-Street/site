export const researchData = [
  {
    title: "WatGPT: A Quant-Based LLM",
    abstract:
      "In this paper, we introduce WatGPT, a specialized Large Language Model (LLM) designed for handling a range of quantitative finance tasks. Leveraging the latest advancements in model architectures such as Structured State Spaces (SSMs), Receptance Weighted Key Value (RWKV) RNNs, and traditional Transformers, WatGPT aims to provide robust solutions for tasks including portfolio optimization, risk management, and algorithmic trading. Unlike general-purpose models, WatGPT integrates domain-specific knowledge, which significantly enhances its performance on specialized tasks.",
    slug: "watgpt",
    author: "Reshi A, Sourish D",
    pdfLink: "/researchPapers/WatGPT.pdf",
    tags: ["LLM"],
  },
  {
    title: "Crypto Arbitrage Analysis: Poloniex and Binance",
    abstract:
      "This case study explores arbitrage opportunities between cryptocurrency exchanges Poloniex and Binance. We focus on the analysis of trade-level data from the given dataset (Aug 2022). The goal is to identify price differentials and evaluate the potential profitability of arbitrage strategies. The study analyzes various indicators including value and duration of significant differentials, driving factors, alternative exchanges, illiquidity, and limitations of the data. Findings reveal that significant arbitrage opportunities are sporadic and short-lived, meaning smart, low-latency programs must be used for profitable execution.",
    slug: "cryptoarb",
    author: "Hugh J, Piero C, Jeff, Arya M, Rebecca Z, Obafemi",
    pdfLink: "/researchPapers/CryptoArb.pdf",
    tags: ["Crypto"],
  },
  {
    title: "Reinforcement Learning for Portfolio Optimization",
    abstract:
      "This research project aims to develop a reinforcement learning-based model for optimal portfolio management. The goal is to create an AI agent that can dynamically adjust a portfolio's asset allocation to maximize returns while managing risk. Reinforcement learning, particularly deep reinforcement learning (DRL), has shown promise in sequential decision-making problems and can be applied to finance to adapt to changing market conditions in real time.",
    slug: "rl-portfolio-optimization",
    author: "Sheldon Lewis",
    pdfLink: "/researchPapers/RL_Continuous_Portfolio_Optimization.pdf",
    tags: ["Machine Learning"],
  },
];

export const tags = [
  {
    name: "LLM",
  },
  // {
  //     name: "Sentiment Analysis",
  // },
  {
    name: "Crypto",
  },
  {
    name: "Machine Learning",
  },
];

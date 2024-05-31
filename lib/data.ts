//pfps
import jaimil from "@/assets/images/jaimil.jpg";
import jai from "@/assets/images/jai.jpg";
import joseph from "@/assets/images/joseph.jpg";
import bill from "@/assets/images/bill.jpg";
import thomas from "@/assets/images/thomas.jpg";
import hugh from "@/assets/images/hugh.jpg";
import ishaan from "@/assets/images/ishaan.jpg";
import akshar from "@/assets/images/akshar.jpg";

//projgraphics
import mean from "@/assets/graphics/Mean Reversion.svg";
import sentiment from "@/assets/graphics/Sentiment Analysis.svg";
import crypto from "@/assets/graphics/Crypto Arbitrage.svg";
import llm from "@/assets/graphics/LLM.svg";
import backtesting from "@/assets/graphics/backtesting.png";
import ml from "@/assets/graphics/ml.svg";

export const execs = [
    {
        name: "Jaimil Dalwadi",
        role: "President + Co-Founder + Quant Dev Lead",
        image: jaimil,
        alt: "Placeholder",
    },
    {
        name: "Jai Betala",
        role: "Co-Founder + VP of Outreach & Research",
        image: jai,
        alt: "Placeholder",
    },
    {
        name: "Joseph Ma",
        role: "VP of Tech",
        image: joseph,
        alt: "Placeholder",
    },
] as const;

export const leads = [
    {
        name: "Bill Bai",
        role: "Crypto Analysis Lead",
        image: bill,
        alt: "Placeholder",
    },
    {
        name: "Thomas Burchat",
        role: "Crypto Analysis Lead",
        image: thomas,
        alt: "Placeholder",
    },
    {
        name: "Hugh Jiang",
        role: "Crypto Analysis Lead",
        image: hugh,
        alt: "Placeholder",
    },
    {
        name: "Ishaan Dey",
        role: "Frontend Lead",
        image: ishaan,
        alt: "Placeholder",
    },
    {
        name: "Akshar Barot",
        role: "Frontend Lead",
        image: akshar,
        alt: "Placeholder",
    },
] as const;

export const team = [
    { name: "Arshvir Chaudhary", team: "Backend" },
    { name: "Jeffery Zhao", team: "Backend" },
    { name: "Shaheer Hassan", team: "Backend" },

    { name: "Akshat Shah", team: "Frontend" },
    { name: "Vihaan Jagiasi", team: "Frontend" },

    { name: "Gurik Mangat", team: "Quant" },
    { name: "Kamakshi Sarva", team: "Quant" },
    { name: "Krish Modi", team: "Quant" },
    { name: "Megha Raj", team: "Quant" },
    { name: "Rehan Anjum", team: "Quant" },
    { name: "Reshi Adavan", team: "Quant" },
    { name: "Sheldon Lewis", team: "Quant" },
    { name: "Sourish Das", team: "Quant" },
] as const;

export const projects = [
    {
        name: "Mean Reversion",
        description:
            "Using fluctuations in the price of a stock to generate profits over time.",
        image: mean,
    },
    {
        name: "Sentiment Analysis",
        description:
            "Using fluctuations in the price of a stock to generate profits over time.",
        image: sentiment,
    },
    {
        name: "Crypto Arbitrage",
        description:
            "Analyzing opportunities for arbitrage across various exchanges.",
        image: crypto,
    },
    {
        name: "LLM Research",
        description:
            "In-house LLM to assist quant devs with training models, research, etc.",
        image: llm,
    },
    {
        name: "Backtesting Platform",
        description:
            "A way to test our models on the market and assess performance.",
        image: backtesting,
    },
    {
        name: "ML Platform",
        description:
            "A place for devs to securely utilize hardware to train models for free!",
        image: ml,
    },
] as const;

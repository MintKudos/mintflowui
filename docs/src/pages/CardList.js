import React from "react";
import NFT from "../components/cards/NFT";
import Card from "../components/cards/Card";
import CardGlass from "../components/cards/CardGlass";
import CardMini from "../components/cards/CardMini";
import CardNoImage from "../components/cards/CardNoImage";
import CardNoImageNoButton from "../components/cards/CardNoImageNoButton";
import CardWide from "../components/cards/CardWide";
import TokenGatedCard from "../components/cards/TokenGatedCard";

function CardList() {
  return (
        <div className="overflow-auto h-screen pb-44 pt-2 pr-2 pl-2 md:pt-0 md:pr-0 md:pl-0">
                <div className="w-full space-y-10">
                <div className="mb-4 p-6 rounded-xl">
                        <h1>NFT Cards</h1> 
                        <NFT />                                   
                    </div>
                    <div className="mb-4p-6 rounded-xl">
                        <h1>Cards</h1> 
                        <TokenGatedCard />                                   
                    </div>
                    <div className="mb-4 p-6 rounded-xl">
                        <h1>Cards</h1>
                        <Card />                                   
                    </div>
                    <div className="mb-4 p-6 rounded-xl">
                        <h1>Card Wide</h1>
                        <CardWide />                                   
                    </div>
                    <div className="mb-4 p-6 rounded-xl">
                        <h1>Cards</h1>
                        <CardNoImage />                                   
                    </div>
                    <div className="mb-4 p-6 rounded-xl">
                        <h1>Cards / No Image / No Button</h1>
                        <CardNoImageNoButton />                                   
                    </div>
                    <div className="mb-4 p-6 rounded-xl">
                        <h1>Card glass bg-base-100 opacity-40morphism</h1>
                        <CardGlass />                                   
                    </div>
                    <div className="mb-4 p-6 rounded-xl">
                        <h1>Card Mini</h1>
                        <CardMini />                                   
                    </div>
                </div>
        </div>
    );
}
                
export default CardList;
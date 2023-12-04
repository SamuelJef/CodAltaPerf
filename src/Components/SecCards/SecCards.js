import React from "react";
import Card from "../Card/Card";
import "./SecCards.css"

function SecCards(){
    return(
        <div className="sec">
            <Card title="Titulo" text="sla"/>
            <Card title="Titulo" text="sla"/>
            <Card title="Titulo" text="sla"/>
        </div>
    )
}

export default SecCards;
import React, { useContext } from "react";
import { Context } from "../store/appContext";

const Card = () => {

    const { store, actions } = useContext(Context)
    console.log(store)
    return (
        <div>
            <h1>Card: {store.info}</h1>
        </div>
    )
}

export default Card
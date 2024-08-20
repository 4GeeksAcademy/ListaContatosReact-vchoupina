import React, {useContext} from "react";
import { Context } from "../store/appContext";

const Info = () => {
    const {store, actions} = useContext(Context)
    return (
        <div>
            <h1>Contato</h1>
            <button className="btn btn-success" onClick={() => {
                actions.changeInfo()
            }}>Editar informação!</button>
        </div>
    )
}

export default Info
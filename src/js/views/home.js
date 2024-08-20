import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import rigoImage from "../../img/rigo-baby.jpg";
import { Link } from "react-router-dom";
import "../../styles/home.css";
import Info from "../component/Info";
import Card from "../component/Card";
import Contact from "../component/Contact";


export const Home = () => {
	const {store, actions} = useContext(Context)
	useEffect(()=>{
		actions.getAllContacts();
	}, []);
	actions.getAllContacts()
	
	return (
		<div className="text-center mt-5">
			<h1>Hello Rigo!</h1>
			{
				store.contacts.map((contact, index, value) => {
					return(
						<h1>{contact.name}</h1>
					)
				})
			}
		</div>
	)
};

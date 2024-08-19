import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import { Link } from "react-router-dom";
import "../../styles/home.css";

export const Home = () => (
	<div className="text-center mt-5">
		<h1>Hello Rigo!</h1>
		<Link to="/new-contact">
			<button className="btn btn-success">Criar novo contato</button>
		</Link>
	</div>
);

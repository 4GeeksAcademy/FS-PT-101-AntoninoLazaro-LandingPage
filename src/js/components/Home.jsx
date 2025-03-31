import React from "react";

//include images into your bundle
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { Card } from "./Card";
import { Hero } from "./Hero"

//create your first component
const Home = () => {
	return (
		<div>
			<Navbar />
			<div className="container">
				<div className="w-100 d-flex justify-content-center">
					<Hero/>
				</div>
				<div className="row">
					<Card/>
					<Card/>
					<Card/>
					<Card/>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default Home;
import React from "react";
import { ContadorSimple } from "./Contador";
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<>
			<ContadorSimple/>
		</>
	);
};

export default Home;
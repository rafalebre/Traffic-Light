import React, { useState } from "react";

//include images into your bundle


//create your first component
const TrafficLight = () => {
	const [selectedColor, setSelectorColor] = useState("");
	return (
		<div className="traffic-container">
		<div className="traffic-holder"></div>
		<div className="traffic-light">
			<div onClick={() => setSelectorColor("red")} className={"light red"+((selectedColor === "red") ? " glow" : "")}></div>
			<div onClick={() => setSelectorColor("yellow")}className={"light yellow"+((selectedColor === "yellow") ? " glow" : "")}></div>
			<div onClick={() => setSelectorColor("green")}className={"light green"+((selectedColor === "green") ? " glow" : "")}></div>
		</div>
		</div>
	);
};

export default TrafficLight;
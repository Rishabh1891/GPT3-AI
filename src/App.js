import React from "react";
import Article from "./Component/article/Article";
import Brand from "./Component/Brand/Brand";
import Cta from "./Component/cta/cta";
import Feature from "./Component/feature/Feature";
import Navbar from "./Component/navbar/Navbar";

import Blog from "./containers/blog/Blog";
import Features from "./containers/Feature/Features";
import Footer from "./containers/Footer/Footer";
import Header from "./containers/Header/Header";
import Possibility from "./containers/possibility/Possibility";
import WhatGPT3 from "./containers/whatGPT3/WhatGPT3";
import "./App.css";
class App extends React.Component{
	render() {
		return(
			<div className="App">
				<div className="gradient__bg">
					<Navbar/>
					<Header/>
				</div>
				<Brand/>
				<WhatGPT3/>
				<Features/>
				<Possibility/>
				<Cta/>
				<Blog/>
				<Footer/>
			</div>
			)
	}
};
export default App;
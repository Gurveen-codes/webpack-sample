import React from 'react';
import classes from './PizzaImage.module.css';
import PizzaImg from '../assets/pizza.jpg';

const PizzaImage = () => {
	return (
		<div className={classes.PizzaImage}>
			<img src={PizzaImg} className={classes.PizzaImg} />
		</div>
	);
};

export default PizzaImage;

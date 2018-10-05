import React from 'react';
import classes from './Coffee.css';
import CoffeeIngredients from './CoffeeIngredients/CoffeeIngredients';

const coffee = (props) => {
    return (
        <div className={classes.Coffee}>
            <CoffeeIngredients type="bread-top" />
            <CoffeeIngredients type="cheese" />
            <CoffeeIngredients type="meat" />
            <CoffeeIngredients type="bread-bottom" />
        </div>
    );
}

export default coffee;
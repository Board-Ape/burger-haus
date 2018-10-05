import React from 'react';
import classes from './Coffee.css';
import CoffeeIngredients from './CoffeeIngredients/CoffeeIngredients';

const coffee = (props) => {
    const transformedIngredients = Object.keys(props.ingredients)
        .map(igKey => {
            return [...Array(props.ingredients[igKey])].map((_, i) => {
                return <CoffeeIngredients key={igKey + i} type={igKey} />;
            }) ;
        }) 
    return (
        <div className={classes.Coffee}>
            <CoffeeIngredients type="bread-top" />
            { transformedIngredients }
            <CoffeeIngredients type="bread-bottom" />
        </div>
    );
}

export default coffee;
import React from 'react';
import classes from './Coffee.css';
import CoffeeIngredients from './CoffeeIngredients/CoffeeIngredients';

const coffee = (props) => {
    
    let transformedIngredients = Object.keys(props.ingredients)
        .map(igKey => {
            return [...Array(props.ingredients[igKey])].map((_, i) => {

                return <CoffeeIngredients key={igKey + i} type={igKey} />;
            }) ;
        }) 
        .reduce((arr, el) => {
            return arr.concat(el)
        },[]);

    if (transformedIngredients.length === 0) {
        transformedIngredients = <p>Please Start Adding Ingredients</p>
    }
    return (
        <div className={classes.Coffee}>
            <CoffeeIngredients type="bread-top" />
            { transformedIngredients }
            <CoffeeIngredients type="bread-bottom" />
        </div>
    );
}

export default coffee;
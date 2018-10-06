import React, {Component} from 'react';
import Aux from '../../hoc/Aux';
import Coffee from '../../components/Coffee/Coffee';
import BuildControls from '../../components/Coffee/BuildControls/BuildControls';

class CoffeeBuilder extends Component {
    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        }
    }


    render() {
        return(
            <Aux>
                <Coffee ingredients={this.state.ingredients}/>
                <BuildControls />
            </Aux>
        );
    }
}

export default CoffeeBuilder;
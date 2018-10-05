import React, {Component} from 'react';
import Aux from '../../hoc/Aux';
import Coffee from '../../components/Coffee/Coffee';

class CoffeeBuilder extends Component {
    state = {
        ingredients: {
            salad: 1,
            bacon: 1,
            cheese: 2,
            meat: 2
        }
    }


    render() {
        return(
            <Aux>
                <Coffee ingredients={this.state.ingredients}/>
                <div>Build Controls</div>
            </Aux>
        );
    }
}

export default CoffeeBuilder;
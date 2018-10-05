import React, {Component} from 'react';
import Aux from '../../hoc/Aux';
import Coffee from '../../components/Coffee/Coffee';

class CoffeeBuilder extends Component {
    render() {
        return(
            <Aux>
                <Coffee />
                <div>Build Controls</div>
            </Aux>
        );
    }
}

export default CoffeeBuilder;
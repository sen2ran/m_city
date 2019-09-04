import React, { Component } from 'react';
import { easePolyOut} from 'd3-ease';
import Animate from 'react-move/Animate'

class Text extends Component {
    render() {
        return (
            <div className="featured_text">
                {this.animateNumber()}
            </div>
        );
    }
}

export default Text;
import React, { Component } from 'react';
import {firebaseMatches} from '../../../firebase'
import {firebaseLooper} from '../../ui/misc'
import Slide from 'react-reveal'
import MatchBlock from './MatchBlock'

class Blocks extends Component {

    state = {
        matches : []
    }

    componentDidMount(){
        firebaseMatches.limitToFirst(6).once('value').then((snapshot) => {
            const matches =  firebaseLooper(snapshot)
            let tmpMatches = JSON.parse(JSON.stringify(matches.reverse()))
            this.setState({
                matches :tmpMatches
            })
            console.log(matches);
            
        })
    }

    showMatches = (matches) => (
        matches
        ? matches.map(match => (
            <Slide bottom key={match.id}>
                <div className="item">
                    <div className="wrapper">
                    <MatchBlock   
                            match={match} 
                        />
                    </div>
                </div>
            </Slide>
        ))
        : null
    )

    render() {
        return (
            <div className="home_matches">
                {this.showMatches(this.state.matches)}
            </div>
        );
    }
}

export default Blocks;
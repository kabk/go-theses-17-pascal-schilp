import React, {Component} from 'react';
import {connect} from 'react-redux';

/*
 * We need "if(!this.props.user)" because we set state to null by default
 * */

class Images extends Component {
    render() {
        if (!this.props.user) {
            return (<div></div>);
        }
        return (
            <div>
                <img src={this.props.user.image}></img>
                <br/>
                <p>{this.props.user.imageDescription}</p>
            </div>
        );
    }
}

// "state.activeUser" is set in reducers/index.js
function mapStateToProps(state) {
    return {
        user: state.activeUser
    };
}

export default connect(mapStateToProps)(Images);


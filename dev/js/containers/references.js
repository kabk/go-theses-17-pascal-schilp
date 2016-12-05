import React, {Component} from 'react';
import {connect} from 'react-redux';

/*
 * We need "if(!this.props.user)" because we set state to null by default
 * */

class References extends Component {
    render() {
        if (!this.props.user) {
            return (<div></div>);
        }
        return (

            <div>
                <h1>{this.props.user.test}</h1>
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

export default connect(mapStateToProps)(References);


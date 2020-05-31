import React, { Component } from 'react'
import { Link, Route} from 'react-router'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import AuthedUser  from './authedUser';
import Questions  from './questions';

class App extends Component {
    componentDidMount() {
        this.props.dispatch(handleInitialData());
    }
    render() {
        const home = this.props.authedUser === "" ? <AuthedUser /> : <Questions />;
        /*let home = <AuthedUser/>;
        if ((this.props.authedUser !== "") && (home = <div><p>empty for now</p></div>));*/
             
        return (
            <div>
                <Route exact path='/'>
                    {home}
                </Route>
            </div>
        );
    }
}

function mapStateToProps ({ authedUser }) {
    return {
        authedUser : authedUser
    }
}

export default connect(mapStateToProps)(App);

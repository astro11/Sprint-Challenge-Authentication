import React from 'react';
import axios from 'axios';

class Signin extends React.Component {
    state = {
        username: 'tony@stark.com',
        password: 'pepperpots',
    }

    inputHandler = ({ target }) => {
        const { name, value } = target;
        this.setState({ [name]: value })
        // console.log(this.state);
    }
    
    submitHandler = (event) => {
        event.preventDefault();
        axios
        .post('http://localhost:5000/api/login', this.state)
        .then(response => {
            console.log('response', response.data);
            this.props.onSignin(response.data);
            // this.props.history.push('/jokes');
        })
        .catch(err => {
            console.log('ERROR You are not authorized', err);
        });
    };

    render() {
        return (
            <form className="form" onSubmit={this.submitHandler} >
            <input className="form-row" name="username" placeholder="Username" type="text" value={this.state.username} onChange={this.inputHandler} />
            <input className="form-row" name="password" placeholder="Password" type="password" value={this.state.password} onChange={this.inputHandler} />
            <button type="submit"> Sign in </button>
            </form>
        )
    }
}

export default Signin;
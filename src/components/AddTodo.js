import React, { Component } from 'react';
import PropTypes from 'prop-types'

class AddTodo extends Component {

    state = {
        title: ''
    }

    onSubmit = (event) => {
        event.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({title: ''});
    }

    onChange = (event) => this.setState({ title: event.target.value });

    render () {
        return (
            <form onSubmit= {this.onSubmit}>
                <input type="text" name="title" placeholder="Add to do" value={this.state.title} onChange={this.onChange}/>
                <input type="submit" value="Submit" className="btn btn-primary"/>
            </form>
        )
    }
}

// PropTypes
AddTodo.propTypes = {
    addTodo: PropTypes.func.isRequired
  }


export default AddTodo;
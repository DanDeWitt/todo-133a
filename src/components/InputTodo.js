import React, { Component } from "react";

class InputTodo extends Component {
    state = {
        title: ""
    };

    onChange = e => {
        this.setState({
            title: e.target.value
        });
    };

    handleSubmit = e => {
        e.preventDefault();
        this.props.addTodoProps(this.state.title);
        this.setState({
            title: ""
        });
    };

    render() {
        return ( <
            form onSubmit = { this.handleSubmit }
            className = "f-container" >
            <
            input type = "text"
            placeholder = "Add Task..."
            value = { this.state.title }
            onChange = { this.onChange }
            className = "f-input" /
            > <
            input type = "submit"
            value = "SUBMIT"
            className = "f-submit" /
            >
            <
            /
            form >
        )
    }
}
export default InputTodo
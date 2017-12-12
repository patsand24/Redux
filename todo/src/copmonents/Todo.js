import React, {Component} from 'react';
import './Todo.css';
import {connect} from 'react-redux';
import {deleteTodo, addTodo} from '../../actions/todos';

class Todo extends Component {
    constructor(props) {
        super(props);
    }

    del = () => {
        this
            .props
            .deleteTodo(this.props.index);
    }

    render() {
        return (
            <div className="Todo">
                <span
                    className="Todo__text"
                    ref={'todo' + this.props.index}>
                    {this.props.todo.text}
                </span>
                <button className="Todo__delete" onClick={this.del}>Delete</button>
            </div>
        );
    }
}

export default connect(null, {deleteTodo, addTodo})(Todo);
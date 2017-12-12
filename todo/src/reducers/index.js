import {ADD_TODO, DELETE_TODO} from '../actions/todos';

export default(todos = [], action) => {
    switch (action.type) {

        case ADD_TODO:
            return [
                ...todos, {
                    text: action.text,
                    id: action.id,
                    completed: action.isCompleted
                }
            ];

        case DELETE_TODO:
            return todos.filter((todo) => todo.id !== action.id);

        default:
            return todos;
    }
}
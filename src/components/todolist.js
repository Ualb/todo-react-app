import React, {useState} from 'react'
import Todo from './todo';
import TodoForm from './todoform';

function TodoList() {
    const [todos, setTodos] = useState([]);

    const addTodo  = todo => {
        if(!todo.text || /^\s*$/.test(todo.text)) {
            return
        }

        const newTodos = [todo, ...todos];
        setTodos(newTodos);
    };

    const updateTodo = (todoId, newTodo) => {
        if(!newTodo.text || /^\s*$/.test(newTodo.text)) {
            return
        }

        setTodos(prev => prev.map(item => (item.id === todoId ? newTodo: item)));
    }

    const removeTodo = id => {
        const removeArr = [...todos].filter(todo => todo.id !== id);
        setTodos(removeArr);
    }

    const completeTodo = id => {
        let updatedTodos = todos.map(todo => {
            if (todo.id === id) {
                todo.isComplete = !todo.isComplete
            }
            return todo
        })
        setTodos(updatedTodos);
    }

    return (
        <div>
            <h1>What's the plain for Today?</h1>
            <TodoForm onSubmit={addTodo} />
            <Todo todos={todos} completeTodo={completeTodo} removeTodo={removeTodo} updateTodo={updateTodo}/>
        </div>
    )
}

export default TodoList;

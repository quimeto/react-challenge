import { useEffect, useState } from 'react'
import { type TodoItem } from '../../services/TodoItemService';
import { useTodoItemService } from '../../hooks/useTodoItemService';

import './TodoList.css';
import ItemFilter from '../itemfilter/ItemFilter';

function TodoList() {

    const [initialItems, setInitialItems] = useState<TodoItem[]>([])
    const [items, setItems] = useState<TodoItem[]>([])
    const serviceRef = useTodoItemService();

    useEffect(() => {
        serviceRef.current?.getTodoItems()
            .then((items) => setInitialItems(items));
    }, [serviceRef.current]);

    useEffect(() => {
        setItems(initialItems);
    }, [initialItems]);

    function filterItems(items: TodoItem[], value: string) {
        return items.filter((item) => item.text.toLowerCase().includes(value.toLowerCase()));
    }

    function onChange(event: React.ChangeEvent<HTMLInputElement>) {
        const value = event.target.value;
        setItems(filterItems(initialItems, value));
    }

    return (
        <div className="todolist">
            <h1>Todo List</h1>
            <ItemFilter
                onChange={onChange}
            />

            {items.length === 0 ?
                <div>No results</div> :
                <ul>
                    {items.map((item) => (
                        <li key={item.id}>{item.text}</li>
                    ))}
                </ul>
            }
        </div>)
}

export default TodoList;
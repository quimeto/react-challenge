import { useEffect, useState } from 'react'
import { type TodoItem } from '../../services/TodoItemService';
import { useTodoItemService } from '../../hooks/useTodoItemService';

import './TodoList.css';
import ItemFilter from '../itemfilter/ItemFilter';

function TodoList() {

    const [initialItems, setInitialItems] = useState<TodoItem[]>([])
    const [filter, setFilter] = useState('');
    const serviceRef = useTodoItemService();

    useEffect(() => {
        serviceRef.current?.getTodoItems()
            .then((items) => setInitialItems(items));
    }, [serviceRef]);

    const items = initialItems.filter((item) => 
        item.text.toLowerCase().includes(filter.toLowerCase())
    );

    function onChange(event: React.ChangeEvent<HTMLInputElement>) {
        setFilter(event.target.value);
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
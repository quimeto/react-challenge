import { MOCK_TODO_ITEMS } from "../fixtures/todoitem.mock";

export interface ITodoItemService {
    getTodoItems(): Promise<TodoItem[]>;
}

export interface TodoItem {
    id: number;
    text: string;
    type: string;
}

export class MockTodoItemService implements ITodoItemService {

    async getTodoItems(): Promise<TodoItem[]> {
        return MOCK_TODO_ITEMS;
    }
}
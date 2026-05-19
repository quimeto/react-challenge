import type { TodoItem } from "../services/TodoItemService";

export const MOCK_TODO_ITEMS: TodoItem[] = [
    {
        id: 1,
        text: 'Buy milk and eggs',
        type: 'shopping',
    },
    {
        id: 2,
        text: 'Send monthly report to accounting',
        type: 'work',
    },
    {
        id: 3,
        text: 'Call dentist for an appointment',
        type: 'health',
    },
    {
        id: 4,
        text: 'Pay electricity bill',
        type: 'finance',
    },
    {
        id: 5,
        text: 'Pick up mail package',
        type: 'errands',
    },
    {
        id: 6,
        text: 'Study for React certification',
        type: 'study',
    },
    {
        id: 7,
        text: 'Workout at the gym',
        type: 'health',
    }
]
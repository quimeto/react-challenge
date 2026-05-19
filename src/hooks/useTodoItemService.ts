import { useRef, useEffect } from "react";
import { MockTodoItemService } from "../services/TodoItemService";
import type { ITodoItemService } from "../services/TodoItemService";

export const useTodoItemService = () => {

    const serviceRef = useRef<ITodoItemService | null>(null);

    useEffect(() => {
        const service = new MockTodoItemService();
        serviceRef.current = service;
    }, [])

    return serviceRef;
}
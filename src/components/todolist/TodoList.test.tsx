import { describe, it, expect, beforeEach } from 'vitest';
import { render, waitFor, fireEvent } from '@testing-library/react';
import TodoList from './TodoList';

describe('TodoList Component', () => {

  let container: HTMLElement;

  beforeEach(() => {
    container = render(<TodoList />).container;
  });

  it('should render correctly', () => {
    expect(container.querySelector('.todolist')).toBeDefined();
    expect(container.querySelector('.todolist h1')?.textContent).toBe('Todo List');
    expect(container.querySelector('.itemfilter input')).toBeDefined();
    expect(container.querySelector('.todolist ul')).toBeDefined();
    expect(container.querySelectorAll('.todolist ul li').length).toBe(0);
    expect(container.querySelector('.todolist div')?.textContent).toBe('No results');
  });

  it('should render items from the service', async () => {
    await waitFor(() => {
      expect(container.querySelectorAll('.todolist ul li').length).toBe(7);
    });
  });

  it('should filter items when typing in the search box', () => {
  });
});

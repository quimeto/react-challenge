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
  });

  it('should render items from the service', async () => {
    await waitFor(() => {
      expect(container.querySelectorAll('.todolist ul li').length).toBe(7);
      expect(container.textContent).not.toContain('No results');
    });
  });

  it('should filter items when typing in the search box', async () => {
    await waitFor(() => {
      expect(container.querySelectorAll('.todolist ul li').length).toBe(7);
    });

    fireEvent.change(container.querySelector('.itemfilter input') as HTMLInputElement, {
      target: { value: 'il' },
    });

    await waitFor(() => {
      expect(container.querySelectorAll('.todolist ul li').length).toBe(3);
      expect(container.textContent).not.toContain('No results');
    })
  });

  it('should show "No results" when no items match the filter', async () => {
    await waitFor(() => {
      expect(container.querySelectorAll('.todolist ul li').length).toBe(7);
    });

    fireEvent.change(container.querySelector('.itemfilter input') as HTMLInputElement, {
      target: { value: 'dummy' },
    });

    await waitFor(() => {
      expect(container.querySelectorAll('.todolist ul li').length).toBe(0);
      expect(container.textContent).toContain('No results');
    });
  });

});

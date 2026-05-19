import { describe, it, expect, beforeEach, beforeAll, afterEach } from 'vitest';
import { fireEvent, render } from '@testing-library/react';
import Counter from './Counter';

describe('Counter Component', () => {

  let container: HTMLElement;
  let incrementBtn: HTMLButtonElement;
  let decrementBtn: HTMLButtonElement;
  let resetBtn: HTMLButtonElement;

  beforeEach(() => {
    container = render(<Counter />).container;
    incrementBtn = container.querySelector('.increment-btn') as HTMLButtonElement;
    decrementBtn = container.querySelector('.decrement-btn') as HTMLButtonElement;
    resetBtn = container.querySelector('.reset-btn') as HTMLButtonElement;
  });

  it('should render correctly', () => {
    expect(container.querySelector('.counter-title')).toBeDefined();
    expect(container.querySelector('.counter-value')).toBeDefined();
    expect(container.querySelector('.increment-btn')).toBeDefined();
    expect(container.querySelector('.decrement-btn')).toBeDefined();
    expect(container.querySelector('.reset-btn')).toBeDefined();
  });


  it('should initialize count from storage on mount', () => {

    expect(container.querySelector('.counter-value')?.textContent).toBe('Current Count: 0');
  });

  it('should increment count', () => {
    fireEvent.click(incrementBtn);

    expect(container.querySelector('.counter-value')?.textContent).toBe('Current Count: 1');
  });

  it('should get incremented count from storage', () => {

    expect(container.querySelector('.counter-value')?.textContent).toBe('Current Count: 1');
  });

  it('should decrement count', () => {
    fireEvent.click(decrementBtn);

    expect(container.querySelector('.counter-value')?.textContent).toBe('Current Count: 0');
  });

  it('should reset count', () => {
    fireEvent.click(incrementBtn);
    fireEvent.click(resetBtn);

    expect(container.querySelector('.counter-value')?.textContent).toBe('Current Count: 0');
  });
});

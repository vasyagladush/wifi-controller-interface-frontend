export interface CounterProps {
  setCount: (val: number) => void;
  count: number;
  min?: number;
  max?: number;
  disabled?: boolean;
  withCountInput?: boolean;
  className?: string;
}

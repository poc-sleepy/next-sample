import React, { useCallback, useRef, useState } from 'react';

type DelayInputProps = {
  onChange: React.ChangeEventHandler<HTMLInputElement>;
};

export const DelayInput = (props: DelayInputProps) => {
  const { onChange } = props;

  const [isTyping, setIsTyping] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [viewValue, setViewValue] = useState('');
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setIsTyping(true);
      setInputValue(e.target.value);

      if (timerRef.current !== null) {
        clearTimeout(timerRef.current);
      }

      timerRef.current = setTimeout(() => {
        setIsTyping(false);
        setViewValue(e.target.value);
        timerRef.current = null;
        onChange(e);
      }, 1000);
    },
    [onChange]
  );

  const text = isTyping ? 'typing...' : viewValue;

  return (
    <div>
      <input
        type="text"
        data-testid="input-text"
        value={inputValue}
        onChange={handleChange}
      />
      <span data-testid="display-text">{text}</span>
    </div>
  );
};

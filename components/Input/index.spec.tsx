import {
  RenderResult,
  screen,
  render,
  fireEvent,
} from '@testing-library/react';
import { Input } from '.';

describe('Input', () => {
  let renderResult: RenderResult;

  beforeEach(() => {
    renderResult = render(<Input label="Username" id="username" />);
  });

  afterEach(() => {
    renderResult.unmount();
  });

  // 初期描画時にinput要素が空である
  it('should empty in input on initial render', () => {
    const inputNode = screen.getByLabelText('Username') as HTMLInputElement;
    expect(inputNode).toHaveValue('');
  });

  // 文字を入力したら、入力した内容が表示される
  it('should show input text', () => {
    const inputText = 'Test Input Text';
    const inputNode = screen.getByLabelText('Username') as HTMLInputElement;

    fireEvent.change(inputNode, { target: { value: inputText } });

    expect(inputNode).toHaveValue(inputText);
  });

  // ボタンが押されたら、入力テキストがクリアされる
  it('should reset when user clicks button', () => {
    const inputText = 'Test Input Text';
    const inputNode = screen.getByLabelText('Username') as HTMLInputElement;
    fireEvent.change(inputNode, { target: { value: inputText } });

    const buttonNode = screen.getByRole('button', {
      name: 'Reset',
    }) as HTMLButtonElement;
    fireEvent.click(buttonNode);

    expect(inputNode).toHaveValue('');
  });
});

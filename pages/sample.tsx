import { Input } from '@/components/Input';
import { StyledButton } from '@/components/StyledButton';

const Sample = () => {
  return (
    <>
      <span>さんぷるぺえじ</span>
      <StyledButton variant="primary">すたいるぼたん</StyledButton>
      <Input label="おなまえ" id="name" />
    </>
  );
};

export default Sample;

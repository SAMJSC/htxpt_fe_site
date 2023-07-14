import { Container, Label } from '@/app/components/atoms/Checkbox/styled';
import Icon from '@/app/components/atoms/Icon';
import { TCheckbox } from '@/app/types/common';

const Checkbox = ({
  size = 15,
  label,
  labelAlignment: labelSide = 'left',
  checked,
  onClick,
}: TCheckbox): React.ReactElement => {
  return (
    <Container labelSide={labelSide} onClick={onClick}>
      {checked ? (
        <Icon name="ic_checked_box" size={size} />
      ) : (
        <Icon name="ic_unchecked_box" size={size} />
      )}
      {label && <Label>{label}</Label>}
    </Container>
  );
};

export default Checkbox;

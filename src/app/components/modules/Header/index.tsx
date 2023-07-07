import Button from '@/app/components/atoms/Button';
import Icon from '@/app/components/atoms/Icon';
import Input from '@/app/components/atoms/Input';
import { theme } from '@/app/components/modules/ThemeProvider/theme';

const Header = () => {
  return (
    <div>
      Header
      <Button size="md" variant="contained">
        Button
      </Button>
      <Input
        disable={false}
        id="test"
        required={false}
        type="text"
        errors={false}
        label="User name"
        showIcon={<Icon name="ic_eye_outline" color={theme.colors.darkGrey} size={24} />}
        icon={<Icon name="ic_eye_off_outline" color={theme.colors.darkGrey} size={24} />}
      />
    </div>
  );
};

export default Header;

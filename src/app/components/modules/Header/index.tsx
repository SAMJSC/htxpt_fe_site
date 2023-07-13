import Button from '@/app/components/atoms/Button';
import Input from '@/app/components/atoms/Input';
import { About } from '~/public/images';

const Header = () => {
  return (
    <div>
      Header
      <div style={{ margin: '10px' }}>
        <Button size="lg" borderRadius="normal" variant="image" isActive image={About.src} shadow>
          {/* TODO: Check hover */}
          Children
        </Button>
      </div>
      <div style={{ margin: '10px' }}>
        <Input
          id="test"
          type="text"
          label="User name"
          showIcon="ic_eye_outline"
          icon="ic_eye_off_outline"
        />
      </div>
    </div>
  );
};

export default Header;

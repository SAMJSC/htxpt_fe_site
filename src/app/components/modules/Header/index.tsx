import React, { useCallback, useState } from 'react';

import Button from '@/app/components/atoms/Button';
import Checkbox from '@/app/components/atoms/Checkbox';
import Input from '@/app/components/atoms/Input';
import { About } from '~/public/images';

const Header = () => {
  const [isCheckboxTestChecked, setIsCheckboxTestChecked] = useState(false);
  const [value, setValue] = useState('');
  const [isShowPassword, setIsShowPassword] = useState(false);

  const handleOnCheckboxTestClicked = useCallback(() => {
    setIsCheckboxTestChecked((pre) => !pre);
  }, []);

  const handelOnInputChangeTest = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleOnIconClick = () => {
    setIsShowPassword((pre) => !pre);
  };

  return (
    <div>
      Header
      <div style={{ margin: '10px' }}>
        <Button size="lg" borderRadius="normal" variant="image" isActive image={About.src} shadow>
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
          value={value}
          onChange={handelOnInputChangeTest}
          onIconClick={handleOnIconClick}
          isShowPassword={isShowPassword}
        />
      </div>
      <div style={{ margin: '10px' }}>
        <Checkbox
          checked={isCheckboxTestChecked}
          onClick={handleOnCheckboxTestClicked}
          size={12}
          labelAlignment="left"
          label="hello"
        />
      </div>
    </div>
  );
};

export default Header;

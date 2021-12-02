import React, {FC, memo} from 'react';
import {Field, Input, Label} from '@zendeskgarden/react-forms';
import styles from './InputField.css';

interface IProps {
  className?: string;
  type: string;
  onChange: () => any;
  placeholder: string;
  readOnly?: boolean;
  label?: string;
}

const InputField: FC<IProps> = memo(({placeholder, label}) => {
  return (
    <Field className={styles.field}>
      {label && <Label>{label}</Label>}
      <Input placeholder={placeholder} />
    </Field>
  );
});

export default InputField;

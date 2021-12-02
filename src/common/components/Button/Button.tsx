import React, {FC, memo} from 'react';
import {Button as ZendeskButton} from '@zendeskgarden/react-buttons';
import cx from 'classnames';
import styles from './Button.css';

type ButtonType = 'button' | 'submit' | 'reset' | undefined;
type ButtonStyle = 'transparent' | 'dark';

interface IProps {
  className?: string;
  type?: ButtonType;
  onClick: () => any;
  children: React.ReactNode;
  buttonStyle?: ButtonStyle;
}

const Button: FC<IProps> = memo(
  ({
    onClick,
    children,
    type = 'button',
    buttonStyle = 'transparent',
    className,
  }) => {
    const colorStyle = {
      transparent: styles.transparent,
      dark: styles.dark,
    };

    return (
      <ZendeskButton
        className={cx(styles.button, colorStyle[buttonStyle], className)}
        type={type}
        size="medium"
        onClick={onClick}
      >
        {children}
      </ZendeskButton>
    );
  },
);

export default Button;

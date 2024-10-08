import classNames from 'classnames';
import React from 'react';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

export interface BaseButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'onClick'> {
  LeftIcon?: React.ComponentType<{ className: string }>;
  RightIcon?: React.ComponentType<{ className: string }>;
  iconClassName?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent> | null) => void;
  shortcutKey?: string;
  isLoading?: boolean;
}

const BaseButton = React.forwardRef<HTMLButtonElement, BaseButtonProps>(
  (props, ref) => {
    const {
      LeftIcon,
      RightIcon,
      iconClassName,
      onClick,
      isLoading,
      className,
      children,
      ...rest
    } = props;

    const iconClass =
      !iconClassName?.includes('w-') || !iconClassName?.includes('h-')
        ? classNames('w-6 h-6', iconClassName)
        : iconClassName;

    return (
      <button
        ref={ref}
        className={classNames(className, (LeftIcon || RightIcon) && 'gap-x-1')}
        onClick={onClick}
        disabled={isLoading}
        {...rest}>
        {isLoading ? (
          <AiOutlineLoading3Quarters
            className={classNames(iconClass, 'animate-spin')}
          />
        ) : (
          <>
            {LeftIcon && <LeftIcon className={iconClass} />}
            {children && children}
            {RightIcon && <RightIcon className={iconClass} />}
          </>
        )}
      </button>
    );
  },
);

BaseButton.displayName = 'BaseButton';
export default React.memo(BaseButton);

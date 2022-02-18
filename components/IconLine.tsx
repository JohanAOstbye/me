import React, { HTMLAttributes } from 'react';
import { IconType } from 'react-icons';

const IconLine = ({
  Icon,
  className,
  ...props
}: { Icon: IconType } & HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span className={`${className} flex my-1 truncate`} {...props}>
      <Icon className='w-6 h-6 mr-2 truncate' />
      {props.children}
    </span>
  );
};

export default IconLine;

import { HTMLAttributes } from 'react';
import logoStyles from './logo.module.scss';

export const Logo: React.FC<LogoProps> = ({ className }) => {
  return (
    <div className={className ? className : logoStyles['logo']}>
      <svg xmlns="http://www.w3.org/2000/svg" width={90} height={121} viewBox="0 0 90 121">
        <g fill="none" fillRule="evenodd">
          <polygon
            fill="#1A1919"
            points="0 0 0 120.642 19.979 120.642 19.979 50.344 30.808 50.344 45.309 85.737 45.881 85.737 60.382 50.344 71.211 50.344 71.211 86.488 62.719 86.488 62.719 65.632 62.266 65.632 48.767 99.047 42.423 99.047 28.924 65.56 28.471 65.56 28.471 120.642 89.642 120.642 89.642 0"
          />
          <polygon fill="#F2BF02" points="62.654 99.376 71.256 99.376 71.256 92.259 62.654 92.259" />
        </g>
      </svg>
    </div>
  );
};

type LogoProps = HTMLAttributes<HTMLImageElement> & {
  className?: string;
};

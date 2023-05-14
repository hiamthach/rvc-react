import logo from '../../assets/images/logo-full.png';

interface Props {
  width?: number;
  height?: number;
}

import { Link } from 'react-router-dom';

const Logo = ({ width, height }: Props) => {
  return (
    <Link to="/" className="mb-0">
      <img src={logo} alt="logo" width={width || 420} height={height} />
    </Link>
  );
};

export default Logo;

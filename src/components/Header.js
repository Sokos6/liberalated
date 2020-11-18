import '../styles/Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav className='nav'>
      <div className='nav-menus'>
        <div className='nav-brand'>
          <Link className='nav-brand-logo' to='/'>
            Modern Liberal
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;

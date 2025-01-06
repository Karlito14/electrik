import { Link } from 'react-router';
import style from './style.module.scss';

export const Header = () => {
  const { pathname } = window.location;

  return (
    <header className={style.header}>
      <Link to={'/'}>
        <h1 className={style.title}>ElectriK</h1>
      </Link>
      <nav className={style.nav}>
        <ul className={style.list}>
          <li>
            <Link
              style={{ color: pathname === '/' ? '#ff5b00' : '' }}
              href={'/'}
              className={style.link}
            >
              Accueil
            </Link>
            <a
              style={{ color: pathname === '/prestations' ? '#ff5b00' : '' }}
              href={'#prestations'}
              className={style.link}
            >
              Nos Prestations
            </a>
            <a
              style={{ color: pathname === '/contact' ? '#ff5b00' : '' }}
              href={'#contact'}
              className={style.link}
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

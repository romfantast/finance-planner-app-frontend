import LanguageSwitcher from 'components/LanguageSwitcher/LanguageSwitcher';
import logo from '../../../images/Logo/Logo.svg';

import css from './Logo.module.css';

export const Logo = () => {
  return (
    <div className={css.wrapperLogo}>
      <img className={css.logoMobile} src={logo} alt="logo" />
      <img className={css.logoTablet} src={logo} alt="logo" />
      <img className={css.logoDesktop} src={logo} alt="logo" />
      <LanguageSwitcher />
    </div>
  );
};

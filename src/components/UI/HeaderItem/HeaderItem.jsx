import { THeaderItem } from '../../../utils/types';
import appHeader from './HeaderItem.module.css';

export const HeaderItem = ({children, text}) => {
    
  return (
    <li className="pl-5 pr-5 pb-4 pt-4">
      <a className={appHeader.link} href="/">
        {children}
        <p className="text text_type_main-default">{text}</p>
      </a>
    </li>
  );
};
HeaderItem.propTypes = THeaderItem
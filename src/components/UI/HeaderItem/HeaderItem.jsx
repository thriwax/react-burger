import appHeader from './HeaderItem.module.css';

export const HeaderItem = (props) => {
  const {text} = props
    
  return (
    <li className="pl-5 pr-5 pb-4 pt-4">
      <a className={appHeader.link} href="/">
        {props.children}
        <p className="text text_type_main-default">{text}</p>
      </a>
    </li>
  );
};

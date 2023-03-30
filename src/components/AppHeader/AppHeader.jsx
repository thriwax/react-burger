import { Logo, BurgerIcon, ListIcon, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { HeaderItem } from '../UI/HeaderItem/HeaderItem';
import appHeader from './AppHeader.module.css';

const AppHeader = () => {
    return (
        <header className={appHeader.header}>
            <nav className={appHeader.navbar}>
                <ul className={appHeader.buttons}>
                    <HeaderItem text='Конструктор'>
                        <BurgerIcon type='primary' />
                    </HeaderItem>
                    <HeaderItem text='Лента заказов'>
                        <ListIcon type='secondary' />
                    </HeaderItem>
                </ul>
                <Logo />
                <div className={appHeader.profile}>
                    <a className={`${appHeader.link} pl-5 pr-5 pb-4 pt-4`} href='/'>
                        <ProfileIcon type='secondary' />
                        <p className='text text_type_main-default text_color_inactive'>
                            Личный кабинет
                        </p>
                    </a>
                </div>
            </nav>
        </header>
    );
};

export default AppHeader;
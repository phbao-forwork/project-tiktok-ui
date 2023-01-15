import classNames from 'classnames/bind';
import styles from './SideBar.module.scss';
import Menu, { MenuItem } from './Menu';
import config from '~/config';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faSignal, faUserFriends } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Sidebar() {
    const MenuItems = [
        {
            title: 'For you',
            to: config.routes.home,
            icon: <FontAwesomeIcon icon={faHouse} />,
        },
        {
            title: 'Following',
            to: config.routes.following,
            icon: <FontAwesomeIcon icon={faUserFriends} />,
        },
        {
            title: 'Live',
            to: config.routes.live,
            icon: <FontAwesomeIcon icon={faSignal} />,
        },
    ];
    return (
        <aside className={cx('wrapper')}>
            <Menu>
                {MenuItems.map((item, index) => (
                    <MenuItem key={index} title={item.title} to={item.to} icon={item.icon} />
                ))}
            </Menu>
        </aside>
    );
}

export default Sidebar;

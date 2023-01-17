import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faSignal, faUserFriends } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import styles from './SideBar.module.scss';
import config from '~/config';
import Menu, { MenuItem } from './Menu';
import SuggestAcounts from '~/components/SuggestAcounts';

import { useState, useEffect } from 'react';
import * as userService from '~/services/userService';

const cx = classNames.bind(styles);
const INIT_PAGE = 1;
const PER_PAGE = 5;

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

    const [suggestedUser, setSuggestedUser] = useState([]);
    const [page, setPage] = useState(INIT_PAGE);

    useEffect(() => {
        userService
            .getSuggested({ page: page, perPage: PER_PAGE })
            .then((data) => {
                setSuggestedUser((prev) => [...prev, ...data]);
            })
            .catch((err) => console.log(err));
    }, [page]);

    const handleSeeAll = () => {
        setPage(page + 1);
    };

    return (
        <aside className={cx('wrapper')}>
            <Menu>
                {MenuItems.map((item, index) => (
                    <MenuItem key={index} title={item.title} to={item.to} icon={item.icon} />
                ))}
            </Menu>
            <SuggestAcounts lable="Suggested accounts" data={suggestedUser} onSeeAll={handleSeeAll} />
            <SuggestAcounts lable="Following accounts" />
        </aside>
    );
}

export default Sidebar;

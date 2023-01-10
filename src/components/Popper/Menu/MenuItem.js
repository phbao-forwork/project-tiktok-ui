import Button from '~/components/Button';
import classNames from 'classnames/bind';
import style from './Menu.module.scss';

const cx = classNames.bind(style);

function MenuItem({ data, onClick }) {
    const classes = cx('menu-item', {
        separate: data.separate,
    });

    return (
        <Button className={classes} to={data.to} icon={data.icon} onClick={onClick}>
            {data.title}
        </Button>
    );
}

export default MenuItem;

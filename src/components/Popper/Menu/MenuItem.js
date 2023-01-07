import Button from '~/components/Button';
import classNames from 'classnames/bind';
import style from './Menu.module.scss';

const cx = classNames.bind(style);

function MenuItem({ data }) {
    return (
        <Button className={cx('menu-item')} to={data.to} icon={data.icon}>
            {data.title}
        </Button>
    );
}

export default MenuItem;

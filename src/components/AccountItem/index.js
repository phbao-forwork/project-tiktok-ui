import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import style from './AccountItem.module.scss';

const cx = classNames.bind(style);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/b29b52a6cbffbf50e88b575f8f358583~c5_100x100.jpeg?x-expires=1673186400&x-signature=9W5AvmSgoSdVXp8BEpJV%2BH06Mmw%3D"
                alt="Camlyy"
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    Nguyễn Thị Cẩm Ly{' '}
                    <span>
                        <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                    </span>
                </h4>
                <span className={cx('username')}>camly13102001</span>
            </div>
        </div>
    );
}

export default AccountItem;

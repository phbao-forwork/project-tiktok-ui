import classNames from 'classnames/bind';
import Button from '~/components/Button';
import style from './AccountPreview.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
import Image from '~/components/Image';

const cx = classNames.bind(style);

function AccountPreview({ data }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <Image className={cx('avatar')} src={data.avatar} alt={data.nickname} />
                <Button primary small>
                    Follow
                </Button>
            </div>
            <div className={cx('body')}>
                <p className={cx('nickname')}>
                    <strong>{data.nickname} </strong>
                    <span>{data.tick && <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />}</span>
                </p>
                <p className={cx('name')}>{`${data.last_name} ${data.first_name}`}</p>
                <p className={cx('analytics')}>
                    <strong className={cx('value')}>{data.followers_count} </strong>
                    <span className={cx('label')}>Follower</span>
                    <strong className={cx('value')}>{data.likes_count} </strong>
                    <span className={cx('label')}>Like</span>
                </p>
            </div>
        </div>
    );
}

AccountPreview.propTypes = {
    data: PropTypes.object.isRequired,
};

export default AccountPreview;

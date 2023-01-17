import PropTypes from 'prop-types';
import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import style from './SuggestAccounts.module.scss';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import Image from '../Image';

import AccountPreview from './AccountPreview';

const cx = classNames.bind(style);

function AccountItem({ data }) {
    const renderReview = (attrs) => {
        return (
            <div tabIndex="-1" {...attrs}>
                <PopperWrapper>
                    <AccountPreview data={data} />
                </PopperWrapper>
            </div>
        );
    };

    return (
        <span>
            <Tippy delay={[800, 0]} interactive={true} placement="bottom" offset={[-15, 0]} render={renderReview}>
                <div className={cx('account-item')}>
                    <Image className={cx('avatar')} src={data.avatar} alt={data.nickname} />
                    <div className={cx('item-info')}>
                        <p className={cx('nickname')}>
                            <strong>{data.nickname} </strong>
                            <span>{data.tick && <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />}</span>
                        </p>
                        <p className={cx('name')}>
                            {data.first_name} {data.last_name}
                        </p>
                    </div>
                </div>
            </Tippy>
        </span>
    );
}

AccountItem.propTypes = { data: PropTypes.object.isRequired };

export default AccountItem;

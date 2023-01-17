import PropTypes from 'prop-types';
import AccountItem from './AccountItem';
import classNames from 'classnames/bind';
import style from './SuggestAccounts.module.scss';

const cx = classNames.bind(style);

function SuggestAcounts({ lable, data = [], onSeeAll }) {
    return (
        <div className={cx('wrapper')}>
            <p className={cx('lable')}>{lable}</p>
            {data.map((item) => (
                <AccountItem key={item.id} data={item} />
            ))}
            <p className={cx('more-btn')} onClick={onSeeAll}>
                See all
            </p>
        </div>
    );
}

SuggestAcounts.propTypes = {
    lable: PropTypes.string.isRequired,
    data: PropTypes.array,
};

export default SuggestAcounts;

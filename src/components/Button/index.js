import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import style from './Button.module.scss';

const cx = classNames.bind(style);

function Button({
    to,
    href,
    primary,
    outline,
    text,
    rounded,
    disabled,
    large,
    small,
    children,
    onClick,
    ...passProps
}) {
    let Comp = 'button';
    const props = {
        onClick,
        ...passProps,
    };

    if (disabled) {
        delete props.onClick;
    }

    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }

    const classes = cx('wrapper', {
        primary,
        outline,
        text,
        rounded,
        disabled,
        large,
        small,
    });

    return (
        <Comp className={classes} {...props}>
            {text && <FontAwesomeIcon className={cx('plus')} icon={faPlus} />}
            <span>{children}</span>
        </Comp>
    );
}

export default Button;

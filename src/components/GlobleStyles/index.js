import PropTypes from 'prop-types';
import './GlobleStyles.scss';

function GlobleStyles({ children }) {
    return children;
}

GlobleStyles.propTypes = {
    children: PropTypes.node.isRequired,
};

export default GlobleStyles;

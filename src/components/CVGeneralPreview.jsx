import PropTypes from 'prop-types';

function CVGeneralPreview({ generalInfo }) {
    return (
        <div className="cv-general-preview">
            <h3>{generalInfo.name}</h3>
            <p>Email: {generalInfo.email}</p>
            <p>Phone: {generalInfo.phone}</p>
        </div>
    );
}

// PropTypes for validation
CVGeneralPreview.propTypes = {
    generalInfo: PropTypes.shape({
        name: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
        phone: PropTypes.string.isRequired,
    }).isRequired,
};

export default CVGeneralPreview;

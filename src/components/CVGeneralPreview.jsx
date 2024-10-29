import '../styles/CVGeneralPreview.css'
import PropTypes from 'prop-types';

function CVGeneralPreview({ generalInfo }) {
    return (
        <div className="cv-general-preview">
            <h3>{generalInfo.name || "Name not provided"}</h3>
            <p>Email: {generalInfo.email || "Available upon request"}</p>
            <p>Phone: {generalInfo.phone || "Available upon request"}</p>
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

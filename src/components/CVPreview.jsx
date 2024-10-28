import PropTypes from 'prop-types';
import CVGeneralPreview from './CVGeneralPreview';
import CVEducationPreview from './CVEducationPreview';
import CVExperiencePreview from './CVExperiencePreview';

function CVPreview({ generalInfo, education, experience }) {
    return (
        <div className="cv-preview">
            <CVGeneralPreview generalInfo={generalInfo} />
            <CVEducationPreview education={education} />
            <CVExperiencePreview experience={experience} />
        </div>
    );
}

// Define PropTypes for validation
CVPreview.propTypes = {
    generalInfo: PropTypes.shape({
        name: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
        phone: PropTypes.string.isRequired,
    }).isRequired,
    education: PropTypes.arrayOf(
        PropTypes.shape({
            school: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            startdate: PropTypes.instanceOf(Date),
            enddate: PropTypes.instanceOf(Date),
        })
    ).isRequired,
    experience: PropTypes.arrayOf(
        PropTypes.shape({
            company: PropTypes.string.isRequired,
            position: PropTypes.string.isRequired,
            responsibilities: PropTypes.string.isRequired,
            startdate: PropTypes.instanceOf(Date),
            enddate: PropTypes.instanceOf(Date),
        })
    ).isRequired,
};

export default CVPreview;

import '../styles/CVExperiencePreview.css'
import PropTypes from 'prop-types';

function CVExperiencePreview({ experience }) {
    return (
        <div className="cv-experience-preview">
            <h3>Professional Experience</h3>
            {experience.map((entry, index) => (
                <div key={index} className="experience-entry">
                    <h4>{entry.company || "Company not provided"}</h4>
                    <p>Position: {entry.position || "Position not specified"}</p>
                    <p>Responsibilities: {entry.responsibilities || "Not specified"}</p>
                    <p>
                        {entry.startdate ? entry.startdate.toDateString() : ''} to {entry.enddate ? entry.enddate.toDateString() : 'Ongoing'}
                    </p>
                </div>
            ))}
        </div>
    );
}

// Define the expected prop types for validation
CVExperiencePreview.propTypes = {
    experience: PropTypes.arrayOf(
        PropTypes.shape({
            company: PropTypes.string,
            position: PropTypes.string,
            responsibilities: PropTypes.string,
            startdate: PropTypes.instanceOf(Date),
            enddate: PropTypes.instanceOf(Date),
        })
    ).isRequired,
};

export default CVExperiencePreview;

import PropTypes from 'prop-types';

function CVEducationPreview({ education }) {
    return (
        <div className="cv-education-preview">
            <h3>Education</h3>
            {education.map((entry, index) => (
                <div key={index} className="education-entry">
                    <h4>{entry.school || "School not provided"}</h4>
                    <p>Qualification: {entry.title || "Qualification not specified"}</p>
                    <p>
                        {entry.startdate ? entry.startdate.toDateString() : ''} to {entry.enddate ? entry.enddate.toDateString() : 'Ongoing'}
                    </p>
                </div>
            ))}
        </div>
    );
}

// Define the expected prop types for validation
CVEducationPreview.propTypes = {
    education: PropTypes.arrayOf(
        PropTypes.shape({
            school: PropTypes.string,
            title: PropTypes.string,
            startdate: PropTypes.instanceOf(Date),
            enddate: PropTypes.instanceOf(Date),
        })
    ).isRequired,
};

export default CVEducationPreview;

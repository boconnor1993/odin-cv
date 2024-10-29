import '../styles/EducationInfo.css';
import PropTypes from 'prop-types';

function EducationInfo({ education, setEducation }) {
    // Handler to update specific fields for each education entry
    const handleChange = (index, field, value) => {
        const updatedEducation = [...education];
        const newValue = field.includes('date') ? new Date(value) : value; // Convert to Date if date field
        updatedEducation[index] = { ...updatedEducation[index], [field]: newValue };
        setEducation(updatedEducation);
    };

    // Handler to add a new blank education entry
    const addNewEntry = () => {
        setEducation([...education, { school: '', title: '', startdate: null, enddate: null }]);
    };

    // Handler to delete an education entry by index
    const handleDelete = (index) => {
        const updatedEducation = education.filter((_, i) => i !== index);
        setEducation(updatedEducation);
    };

    return (
        <div className='education-info'>
            <h2>Education</h2>
            <div className='education-info-container'>
                {education.map((entry, index) => (
                    <div key={index} className="education-entry">
                        <label htmlFor={`school-${index}`}>School:</label>
                        <input
                            type="text"
                            id={`school-${index}`}
                            value={entry.school}
                            onChange={(e) => handleChange(index, 'school', e.target.value)}
                        />

                        <label htmlFor={`title-${index}`}>Title:</label>
                        <input
                            type="text"
                            id={`title-${index}`}
                            value={entry.title}
                            onChange={(e) => handleChange(index, 'title', e.target.value)}
                        />

                        <label htmlFor={`startdate-${index}`}>Start Date:</label>
                        <input
                            type="date"
                            id={`startdate-${index}`}
                            value={entry.startdate ? entry.startdate.toISOString().slice(0, 10) : ''}
                            onChange={(e) => handleChange(index, 'startdate', e.target.value)}
                        />

                        <label htmlFor={`enddate-${index}`}>End Date:</label>
                        <input
                            type="date"
                            id={`enddate-${index}`}
                            value={entry.enddate ? entry.enddate.toISOString().slice(0, 10) : ''}
                            onChange={(e) => handleChange(index, 'enddate', e.target.value)}
                        />

                        <button onClick={() => handleDelete(index)}>Delete</button>
                    </div>
                ))}
            </div>
            <div className='button-container'>
                <button onClick={addNewEntry}>Add New</button>
            </div>
        </div>
    );
}

// Define the expected prop types for validation
EducationInfo.propTypes = {
    education: PropTypes.arrayOf(
        PropTypes.shape({
            school: PropTypes.string,
            title: PropTypes.string,
            startdate: PropTypes.instanceOf(Date), // Use Date instance for dates
            enddate: PropTypes.instanceOf(Date),   // Use Date instance for dates
        })
    ).isRequired,
    setEducation: PropTypes.func.isRequired,
};

export default EducationInfo;

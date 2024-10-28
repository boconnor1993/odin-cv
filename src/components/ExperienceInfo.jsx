import PropTypes from 'prop-types';

function ExperienceInfo({ experience, setExperience }) {
    // Handler to update specific fields for each experience entry
    const handleChange = (index, field, value) => {
        const updatedExperience = [...experience];
        const newValue = field.includes('date') ? new Date(value) : value; // Convert to Date if date field
        updatedExperience[index] = { ...updatedExperience[index], [field]: newValue };
        setExperience(updatedExperience);
    };

    // Handler to add a new blank experience entry
    const addNewEntry = () => {
        setExperience([...experience, { company: '', position: '', responsibilities: '', startdate: null, enddate: null }]);
    };

    // Handler to delete an experience entry by index
    const handleDelete = (index) => {
        const updatedExperience = experience.filter((_, i) => i !== index);
        setExperience(updatedExperience);
    };

    return (
        <div className='experience-info'>
            <h2>Professional Experience</h2>
            <div className='experience-info-container'>
                {experience.map((entry, index) => (
                    <div key={index} className="experience-entry">
                        <label htmlFor={`company-${index}`}>Company:</label>
                        <input
                            type="text"
                            id={`company-${index}`}
                            value={entry.company}
                            onChange={(e) => handleChange(index, 'company', e.target.value)}
                        />

                        <label htmlFor={`position-${index}`}>Position:</label>
                        <input
                            type="text"
                            id={`position-${index}`}
                            value={entry.position}
                            onChange={(e) => handleChange(index, 'position', e.target.value)}
                        />

                        <label htmlFor={`responsibilities-${index}`}>Responsibilities:</label>
                        <input
                            type="text"
                            id={`responsibilities-${index}`}
                            value={entry.responsibilities}
                            onChange={(e) => handleChange(index, 'responsibilities', e.target.value)}
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
ExperienceInfo.propTypes = {
    experience: PropTypes.arrayOf(
        PropTypes.shape({
            company: PropTypes.string,
            position: PropTypes.string,
            responsibilities: PropTypes.string,
            startdate: PropTypes.instanceOf(Date),
            enddate: PropTypes.instanceOf(Date),
        })
    ).isRequired,
    setExperience: PropTypes.func.isRequired,
};

export default ExperienceInfo;

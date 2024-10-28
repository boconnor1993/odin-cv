import PropTypes from 'prop-types';

function GeneralInfo({ generalInfo, setGeneralInfo }) {
    return (
        <div className='general-info'>
            <h2>General Information</h2>
            <div className='general-info-container'>
                <label htmlFor="name">Name:</label>
                <input
                    type="text"
                    id="name"
                    value={generalInfo.name}
                    onChange={(e) => setGeneralInfo({ ...generalInfo, name: e.target.value })}
                />

                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    value={generalInfo.email}
                    onChange={(e) => setGeneralInfo({ ...generalInfo, email: e.target.value })}
                />

                <label htmlFor="phone">Phone:</label>
                <input
                    type="phone"
                    id="phone"
                    value={generalInfo.phone}
                    onChange={(e) => setGeneralInfo({ ...generalInfo, phone: e.target.value })}
                />
            </div>
        </div>
    );
}

// Define the expected prop types for validation
GeneralInfo.propTypes = {
    generalInfo: PropTypes.shape({
        name: PropTypes.string,
        email: PropTypes.string,
        phone: PropTypes.string,
    }).isRequired,
    setGeneralInfo: PropTypes.func.isRequired,
};

export default GeneralInfo;

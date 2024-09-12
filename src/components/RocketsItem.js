
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { reserveRocket } from '../redux/Rockets/RocketsSlice';

const RocketsItem = ({
  id, name, image, description, reserved,
}) => {
  const dispatch = useDispatch();
  const reserveRockets = (buttonId) => {
    dispatch(reserveRocket(buttonId));
  };

  return (
    <li className="flex flex-col md:flex-row bg-white shadow-lg rounded-lg p-4 items-start transition-shadow duration-200 hover:shadow-2xl" style={{ boxShadow: '0 4px 15px rgba(77, 191, 187, 0.5)' }}>
      <div className="w-full md:w-2/5 flex-shrink-0 mb-4 md:mb-0 flex justify-center">
        <img
          className="h-auto rounded-lg object-cover" 
          alt={name}
          src={image}
          style={{ height: '150px', width: 'auto' }} 
        />
      </div>
      <div className="flex-1 ml-0 md:ml-4 flex flex-col">
        <h2 className="text-lg font-semibold text-gray-800 mb-2">{name}</h2> {/* Rocket Name */}
        <p className="text-gray-700 mb-2 text-sm">
          {reserved && (
            <span className="bg-green-100 text-green-700 px-2 py-1 rounded-md font-semibold">
              Reserved
            </span>
          )}
          <span className="ml-2">{description}</span>
        </p>
        <div className="flex justify-center"> {/* Center the button */}
          <button
            onClick={() => reserveRockets(id)}
            className={`w-full md:w-32 px-2 py-1 rounded-lg text-white ${reserved ? 'bg-red-700 hover:bg-red-800' : 'bg-[#4dbfbb] hover:bg-orange-600'} text-xs`}
            type="button"
          >
            {reserved ? 'Cancel Reservation' : 'Reserve Rocket'}
          </button>
        </div>
      </div>
    </li>
  );
};

RocketsItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  reserved: PropTypes.bool.isRequired,
};

<<<<<<< traveler
export default RocketsItem;
=======
export default RocketsItem;
>>>>>>> developments

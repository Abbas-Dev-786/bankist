import PropTypes from "prop-types";

const MovementsRow = ({ amount, count, type, days }) => {
  return (
    <div className="movements__row">
      <div className={`movements__type movements__type--${type}`}>
        {count} {type}
      </div>
      <div className="movements__date">{days}</div>
      {/* <div className="movements__date">3 days ago</div> */}
      <div className="movements__value">{amount}€</div>
    </div>
  );
};

export default MovementsRow;

MovementsRow.propTypes = {
  amount: PropTypes.number,
  count: PropTypes.number,
  type: PropTypes.string,
  days: PropTypes.string,
};

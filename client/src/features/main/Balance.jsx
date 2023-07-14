const date = new Date();

const Balance = () => {
  return (
    <div className="balance">
      <div>
        <p className="balance__label">Current balance</p>
        <p className="balance__date">
          As of{" "}
          <span className="date">
            {`${date.getDate()}`.padStart(2, "0")}/
            {`${date.getMonth()}`.padStart(2, "0")}/{date.getFullYear()}
          </span>
        </p>
      </div>
      <p className="balance__value">0000€</p>
    </div>
  );
};

export default Balance;

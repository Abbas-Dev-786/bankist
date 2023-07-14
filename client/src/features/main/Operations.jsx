const Operations = () => {
  return (
    <>
      <div className="operation operation--loan">
        <h2>Action zone</h2>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            width: "100%",
            justifyContent: "space-between",
          }}
        >
          <button className="form__btn form__btn--loan">
            Get Mini Statement
          </button>

          <button className="form__btn form__btn--loan">
            Change Account Details
          </button>
        </div>
      </div>

      <div className="operation operation--transfer">
        <h2>Transfer money</h2>
        <form className="form form--transfer">
          <input type="text" className="form__input form__input--to" />
          <input type="number" className="form__input form__input--amount" />
          <button className="form__btn form__btn--transfer">&rarr;</button>
          <label className="form__label">Transfer to</label>
          <label className="form__label">Amount</label>
        </form>
      </div>

      <div className="operation operation--close">
        <h2>Close account</h2>
        <form className="form form--close">
          <input type="text" className="form__input form__input--user" />
          <input
            type="password"
            maxLength="6"
            className="form__input form__input--pin"
          />
          <button className="form__btn form__btn--close">&rarr;</button>
          <label className="form__label">Confirm user</label>
          <label className="form__label">Confirm PIN</label>
        </form>
      </div>
    </>
  );
};

export default Operations;

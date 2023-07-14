import MovementsRow from "./MovementsRow";

const Movements = () => {
  return (
    <div className="movements">
      <MovementsRow
        amount={4000}
        count={2}
        type="deposit"
        days={new Date().toDateString()}
      />
      <MovementsRow
        amount={-2000}
        count={1}
        type="withdrawal"
        days={new Date().toDateString()}
      />
    </div>
  );
};

export default Movements;

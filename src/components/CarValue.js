import { useSelector } from "react-redux";

function CarValue() {
  const totalCost = useSelector(({ cars: { data, searchTerm } }) =>
    data
      .filter((car) => {
        return car.name.toLowerCase().includes(searchTerm.toLowerCase());
      })
      .reduce((total, { cost }) => total + cost, 0)
  );
  return <div className="car-value">Total Value: ${totalCost}</div>;
}

export default CarValue;

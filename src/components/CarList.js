import { useSelector } from "react-redux";

function CarList() {
  const cars = useSelector((state) => {
    return state.cars.data;
  });

  return (
    <div>
      {cars.map((car) => (
        <div>{car.name} </div>
      ))}
    </div>
  );
}

export default CarList;

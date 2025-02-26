import { useParams } from "react-router-dom";
import CarDetails from "../../components/CarDetails/CarDetails.jsx";

const CarDetailsPage = () => {
  const { id } = useParams();
  return (
    <div>
      <CarDetails id={id} />
    </div>
  );
};

export default CarDetailsPage;

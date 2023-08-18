import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getProduct } from "../../../features/vehicles/vehicleActions";

const RentCar = () => {
  const { id } = useParams();

  const car = useSelector((state) => state.currentProduct);
  const dispatch = useDispatch(id);
  console.log(car);
  useEffect(() => {
    dispatch(getProduct({ id }));
  }, [id, dispatch]);

  return (
    <>
      <div className="w-[90%] container mx-auto my-8 max-w-[1080px]">
        <div className="block md:flex gap-8 ">
          {/* <img
            src={car.src}
            alt=""
            className="w-full basis-2/4 aspect-auto max-w-[480px] rounded-lg"
          />

          <div className="grow">
            <h3 className="text-2xl capitalize my-2 font-bold">{car.tile}</h3>
            <h4>Details:</h4>

            <button type="button" className="btn btn-success">
              ⭐ {car.rating}
            </button>
            <h5>
              <b>Price :</b> {car.price}
            </h5>
            <h5>
              <b>Type :</b> {car.carType}
            </h5>
            <h5>
              <b>Seats :</b> {car.seats}
            </h5>
            <form className="w-full max-w-[360px] block">
              <select className="w-full my-4 rounded-md">
                <option defaultValue>SET YOUR LOCATION</option>
                <option value="1">Delhi</option>
                <option value="2">Bangalore</option>
                <option value="3">Kolkata</option>
                <option value="3">Hyderabad</option>
                <option value="3">Chennai</option>
              </select>

              <h6 className="mb-2 text-xl font-bold">Select a time:</h6>

              <div className="flex items-center gap-4">
                <label htmlFor="from" className="basis-1/3">
                  FROM
                </label>
                <input
                  type="time"
                  id="from"
                  name="from"
                  className="w-full rounded-md"
                />
              </div>
              <div className="flex mt-4 items-center gap-4">
                <label htmlFor="To" className="basis-1/3">
                  TO
                </label>
                <input
                  type="time"
                  id="To"
                  name="To"
                  className="w-full  rounded-md"
                />
              </div>

              <Link
                to="/sucess"
                className="w-full md:w-fit text-center bg-blue-600 p-2 px-4 rounded-md inline-block my-4 text-white"
              >
                RENT THE VEHICLE
              </Link>
            </form>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default RentCar;

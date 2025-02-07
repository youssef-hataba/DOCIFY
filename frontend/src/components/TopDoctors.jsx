import {useContext} from "react";
import {Link, useNavigate} from "react-router-dom";
import {AppContext} from "../context/AppContext";

const TopDoctors = () => {
  const navigate = useNavigate();
  const {doctors} = useContext(AppContext);

  const handleDoctorClick = (doctorId) => {
    navigate(`/appointment/${doctorId}`);
    scrollTo(0, 0);
  };

  return (
    <div className="flex flex-col items-center gap-4 py-16 text-gray-900 md:px-10">
      <h1 className="text-3xl font-medium text-gray-800 leading-tight">Top Doctors to Book</h1>
      <p className="text-sm text-center sm:w-1/3">
        Simply browse through our extensive list of trusted doctors.
      </p>
      <div className="grid w-full gap-4 px-3 pt-5 grid-cols-auto sm:px-0 gap-y-6 ">
        {doctors.slice(0, 10).map((doctor, index) => (
          <div
            onClick={() => handleDoctorClick(doctor._id)}
            key={index}
            className="overflow-hidden cursor-pointer hover:-translate-y-3 transition-all duration-500
              border border-blue-200 rounded-xl ">
            <img src={doctor.image} alt={doctor.name} className="bg-second" />
            <div className="p-4">
              <p className="text-sm font-semibold text-green-500 ">
                <span className="inline-block w-2 h-2 mr-2 bg-green-500 rounded-full"></span>
                Available
              </p>
              <h3 className="text-sm font-semibold md:text-lg">{doctor.name}</h3>
              <p className="text-sm text-gray-600 ">{doctor.speciality}</p>
            </div>
          </div>
        ))}
      </div>

      <Link
        onClick={() => scrollTo(0, 0)}
        to="/doctors"
        className="bg-second mt-10 px-12 py-3 rounded-full text-gray-600 font-semibold">
        More
      </Link>
    </div>
  );
};

export default TopDoctors;

/* eslint-disable react/prop-types */
import {useNavigate} from "react-router-dom";
import {AppContext} from "../context/AppContext";
import {useContext} from "react";

const RelatedDoctors = ({docInfo}) => {
  const {doctors} = useContext(AppContext);
  const navigate = useNavigate();

  const {speciality, _id} = docInfo;

  const filterDoctors = doctors.filter((doc) => doc.speciality === speciality && doc._id !== _id);

  const handleDoctorClick = (doctorId) => {
    navigate(`/appointment/${doctorId}`);
    scrollTo(0, 0);
  };

  return (
    <div className="flex flex-col gap-4">
      <p className="text-center text-3xl leading-tight font-medium text-gray-800">
        Related Doctors
      </p>
      {filterDoctors.length > 0 ? (
        <>
          <p className="text-center text-sm text-gray-700">
            Simply browse through our extensive list of trusted doctors.
          </p>
          <div className="grid w-full gap-4 px-3 pt-5 grid-cols-auto sm:px-0 gap-y-6 ">
            {filterDoctors.slice(0, 5).map((doctor) => (
              <div
                onClick={() => handleDoctorClick(doctor._id)}
                key={doctor._id}
                className="overflow-hidden cursor-pointer hover:-translate-y-3 
                transition-all duration-500 border border-blue-200 rounded-xl">
                <img src={doctor.image} alt={doctor.name} className="bg-second" />
                <div className="p-4">
                  <p className="text-sm font-semibold text-green-500">
                    <span className="inline-block w-2 h-2 mr-2 bg-green-500 rounded-full"></span>
                    Available
                  </p>
                  <h3 className="text-sm font-semibold md:text-lg">{doctor.name}</h3>
                  <p className="text-sm text-gray-600">{doctor.speciality}</p>
                </div>
              </div>
            ))}
          </div>
        </>
      ) : (
        <p>No related doctors found.</p>
      )}
    </div>
  );
};

export default RelatedDoctors;

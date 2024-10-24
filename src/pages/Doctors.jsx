import {useContext, useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import {AppContext} from "../context/AppContext";

const Doctors = () => {
  const {speciality} = useParams();
  const {doctors} = useContext(AppContext);
  const [filterDoc, setFilterDoc] = useState(doctors);
  const [showFilter, setShowFilter] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const applyFilter = () => {
      if (speciality) {
        setFilterDoc(doctors.filter((doc) => doc.speciality === speciality));
      } else {
        setFilterDoc(doctors);
      }
    };
    applyFilter();
  }, [doctors, speciality]);

  return (
    <div>
      <p className="text-gray-600">Browse through the doctors specialist.</p>
      <div className="flex flex-col sm:flex-row items-start gap-5 mt-5">
        <button
          onClick={() => setShowFilter((prev) => !prev)}
          className={`py-1 px-3 border rounded text-sm 
            transition-all sm:hidden ${showFilter ? "bg-primary text-white" : ""}`}>
          Filters
        </button>
        <div className={`flex flex-col gap-4 text-sm text-gray-600 ${showFilter?'flex':'hidden sm:flex'}`}>
          <SpecialityItem speciality="All Doctors" activeSpeciality={speciality || "All Doctors"} />
          <SpecialityItem speciality="General physician" activeSpeciality={speciality} />
          <SpecialityItem speciality="Gynecologist" activeSpeciality={speciality} />
          <SpecialityItem speciality="Dermatologist" activeSpeciality={speciality} />
          <SpecialityItem speciality="Pediatricians" activeSpeciality={speciality} />
          <SpecialityItem speciality="Neurologist" activeSpeciality={speciality} />
          <SpecialityItem speciality="Gastroenterologist" activeSpeciality={speciality} />
        </div>
        <div className="w-full grid grid-cols-auto gap-4 gap-y-6">
          {filterDoc.map((doctor, index) => (
            <div
              onClick={() => navigate(`/appointment/${doctor._id}`)}
              key={index}
              className="overflow-hidden cursor-pointer hover:-translate-y-3 transition-all duration-500 border border-blue-200 rounded-xl">
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
      </div>
    </div>
  );
};

// eslint-disable-next-line react/prop-types
function SpecialityItem({speciality, activeSpeciality}) {
  const navigate = useNavigate();

  const handleClick = () => {
    if (speciality === "All Doctors") {
      navigate(`/doctors`);
    } else {
      navigate(`/doctors/${speciality}`);
    }
  };

  return (
    <p
      onClick={handleClick}
      className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 
      rounded transition-all cursor-pointer 
      ${speciality === activeSpeciality ? "bg-second text-black" : ""}`}>
      {speciality}
    </p>
  );
}

export default Doctors;

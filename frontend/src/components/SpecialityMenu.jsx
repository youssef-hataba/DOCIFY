import {Link} from "react-router-dom";
import {specialityData} from "../assets/assets";

const SpecialityMenu = () => {
  return (
    <div id="speciality" className="py-16 flex flex-col text-gray-800 items-center gap-4">
      <h1 className="text-3xl leading-tight font-medium text-gray-800">Find by Speciality</h1>
      <p className="flex flex-col justify-center items-start text-sm">
        <span>Simply browse through our extensive list of trusted doctors,</span>
        <span className="self-center">schedule your appointment hassle-free.</span>
      </p>
      <div className="flex sm:justify-center gap-4 pt-6 overflow-scroll ">
        {specialityData.map((item, index) => (
          <Link
            to={`/doctors/${item.speciality}`}
            onClick={() => scrollTo(0, 0)}
            key={index}
            className="flex flex-col items-center text-xs cursor-pointer flex-shrink-0 
            hover:-translate-y-3 transition-all duration-500">
            <img src={item.image} alt={item.speciality} className="w-16 sm:w-24 mb-2" />
            <p className="text-center mt-2">{item.speciality}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SpecialityMenu;

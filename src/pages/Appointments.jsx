import {useContext, useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {AppContext} from "../context/AppContext";
import {assets} from "../assets/assets";
import DoctorSlots from "../components/DoctorSlots";
import RelatedDoctors from "../components/RelatedDoctors";

const Appointments = () => {
  const {docId} = useParams();
  const {doctors} = useContext(AppContext);
  const [docInfo, setDocInfo] = useState(null);

  useEffect(() => {
    async function fetchDocInfo() {
      const foundDoc = doctors.find((doc) => doc._id === docId);
      setDocInfo(foundDoc);
    }
    fetchDocInfo();
  }, [doctors, docId]);

  if (!docInfo) {
    return <div>Loading doctor information...</div>;
  }

  return (
    <div>
      {/* ----------- Doctor Details ------------- */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div>
          <img
            className="bg-primary rounded-lg w-full sm:max-w-72"
            src={docInfo.image}
            alt={`${docInfo.name}'s profile`}
          />
        </div>

        <div className="flex flex-1 flex-col border border-gray-400 rounded-lg py-7 px-8 text-gray-600">
          {/* ---------- Doc info :name, degree, experience -------- */}
          <p className="flex items-center text-3xl text-gray-700 font-medium">
            {docInfo.name}
            <img src={assets.verified_icon} alt="Verified Icon" className="ml-2 w-5 h-5" />
          </p>

          <div className="flex gap-3 my-2">
            <p>
              {docInfo.degree} - {docInfo.speciality}
            </p>
            <span className="text-xs border rounded-full px-2 flex items-center cursor-pointer">
              {docInfo.experience}
            </span>
          </div>

          {/* Doctor About  */}
          <div>
            <p className="flex gap-1 text-gray-800 text-sm items-center font-medium ">
              About <img src={assets.info_icon} alt="Info Icon" className="h-3" />
            </p>
            <p className="my-2 text-sm max-w-[85%]">{docInfo.about}</p>
          </div>

          {/* Doctor Fee */}
          <div>
            <p className="text-gray-600 font-medium pt-2">
              Appointment fee: <span className="text-gray-800 font-medium">${docInfo.fees}</span>
            </p>
          </div>
        </div>
      </div>
      <DoctorSlots docInfo={docInfo} />
      <RelatedDoctors docInfo={docInfo} /> {/* Use consistent prop name */}
    </div>
  );
};

export default Appointments;

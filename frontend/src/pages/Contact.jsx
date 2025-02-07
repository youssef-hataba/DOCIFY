import {assets} from "../assets/assets";

const Contact = () => {
  return (
    <div>
      <div className="text-center text-2xl text-gray-500 pt-10">
        CONTACT <span className="text-gray-700 font-medium">US</span>
      </div>
      <div className="flex justify-center gap-12 mt-10 flex-wrap">
        <img className="w-full md:max-w-[360px]" src={assets.contact_image} alt="contact image" />
        <div className="flex flex-col gap-6 justify-center text-gray-500 text-sm">
          <p className="text-gray-600 text-lg font-semibold">OUR OFFICE</p>

          <p>
            00000 Willms Station <br />
            Suite 000, Washington, USA
          </p>

          <p>
            Tel: (000) 000-0000 <br />
            Email: youssefhataba1@gmail.com
          </p>

          <p className="text-gray-600 text-lg font-semibold">CAREERS AT DOCIFY</p>

          <p>Learn more about our teams and job openings.</p>

          <button
            className="self-start border border-gray-600 py-3 px-7 text-gray-500
          font-semibold text-base mt-1 hover:text-white hover:bg-primary fill-current duration-500
          hover:border-primary">
            Explore Jobs
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;

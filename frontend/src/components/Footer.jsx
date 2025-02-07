import {assets} from "../assets/assets";

const Footer = () => {
  return (
    <footer>
      <div className="md:mx-10">
        <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 mt-40 my-10 text-sm">
          <div>
            <img src={assets.logo} alt="Logo" className="mb-5 w-40" />
            <p className="w-full md:w-2/3 text-gray-600 leading-relaxed">
              <span className="font-medium">Docify</span> is an innovative platform for booking
              doctor appointments, making it easy for patients to find and schedule visits with
              trusted healthcare professionals. Patients can browse specialist profiles and book
              appointments securely, ensuring a convenient experience for all. With just a few
              clicks, access quality healthcare anytime, anywhere.
            </p>
          </div>

          <div>
            <p className="text-xl font-medium mb-5">COMPANY</p>
            <ul className="flex flex-col gap-2 text-gray-600">
              <li>Home</li>
              <li>About us</li>
              <li>Delivery</li>
              <li>Privacy policy</li>
            </ul>
          </div>

          <div>
            <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
            <ul className="flex flex-col gap-2 text-gray-600">
              <li>+0-000-000-000</li>
              <li>youssefhataba1@gmail.com</li>
            </ul>
          </div>
        </div>
        {/* -----------footer section ------------ */}
        <div>
          <hr />
          <p className="text-center my-5 text-sm">
            copyright 2024 @ Greatstack.dev - All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

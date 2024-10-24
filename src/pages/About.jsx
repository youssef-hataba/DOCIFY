import {assets} from "../assets/assets";

const About = () => {
  return (
    <div>
      <div className="text-center text-2xl text-gray-500 pt-10">
        ABOUT <span className="text-gray-700 font-medium">US</span>
      </div>
      <div className="flex gap-12 flex-col md:flex-row my-10">
        <img src={assets.about_image} alt="about image" className="w-full md:max-w-[360px]" />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600">
          <p>
            Welcome to Docify, your trusted partner in managing your healthcare needs conveniently
            and efficiently. At Docify, we understand the challenges individuals face when it comes
            to scheduling doctor appointments and managing their health records.
          </p>
          <p>
            Docify is committed to excellence in healthcare technology. We continuously strive to
            enhance our platform, integrating the latest advancements to improve user experience and
            deliver superior service. Whether you&apos;re booking your first appointment or managing
            ongoing care, Docify is here to support you every step of the way.
          </p>
          <p className="text-gray-800 font-semibold">Our Vision</p>
          <p>
            Our vision at Docify is to create a seamless healthcare experience for every user. We
            aim to bridge the gap between patients and healthcare providers, making it easier for
            you to access the care you need, when you need it.
          </p>
        </div>
      </div>

      <div className="text-xl my-4">
        <p>
          WHY <span className="text-gray-700 font-semibold">CHOOSE US</span>
        </p>
      </div>

      <div className="flex flex-col md:flex-row mb-20">
        <div
          className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] cursor-pointer
        hover:bg-primary hover:text-white transition-all duration-300 text-gray-600">
          <p className="font-semibold">EFFICIENCY:</p>
          <p>Streamlined appointment scheduling that fits into your busy lifestyle.</p>
        </div>
        <div
          className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] cursor-pointer
        hover:bg-primary hover:text-white transition-all duration-300 text-gray-600">
          <p className="font-semibold">CONVENIENCE:</p>
          <p>Access to a network of trusted healthcare professionals in your area.</p>
        </div>
        <div
          className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] cursor-pointer
        hover:bg-primary hover:text-white transition-all duration-300 text-gray-600">
          <p className="font-semibold">PERSONALIZATION:</p>
          <p>Tailored recommendations and reminders to help you stay on top of your health.</p>
        </div>
      </div>
    </div>
  );
};

export default About;

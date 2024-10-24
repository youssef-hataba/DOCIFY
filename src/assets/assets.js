import appointment_img from "./appointment_img.png";
import header_img from "./header_img.png";
import group_profiles from "./group_profiles.png";
import profile_pic from "./profile_pic.png";
import contact_image from "./contact_image.png";
import about_image from "./about_image.png";
import logo from "./logo.svg";
import dropdown_icon from "./dropdown_icon.svg";
import menu_icon from "./menu_icon.svg";
import cross_icon from "./cross_icon.png";
import chats_icon from "./chats_icon.svg";
import verified_icon from "./verified_icon.svg";
import arrow_icon from "./arrow_icon.svg";
import info_icon from "./info_icon.svg";
import upload_icon from "./upload_icon.png";
import stripe_logo from "./stripe_logo.png";
import razorpay_logo from "./razorpay_logo.png";
import doc1 from "./doc1.png";
import doc2 from "./doc2.png";
import doc3 from "./doc3.png";
import doc4 from "./doc4.png";
import doc5 from "./doc5.png";
import doc6 from "./doc6.png";
import doc7 from "./doc7.png";
import doc8 from "./doc8.png";
import doc9 from "./doc9.png";
import doc10 from "./doc10.png";
import doc11 from "./doc11.png";
import doc12 from "./doc12.png";
import doc13 from "./doc13.png";
import doc14 from "./doc14.png";
import doc15 from "./doc15.png";
import Dermatologist from "./Dermatologist.svg";
import Gastroenterologist from "./Gastroenterologist.svg";
import General_physician from "./General_physician.svg";
import Gynecologist from "./Gynecologist.svg";
import Neurologist from "./Neurologist.svg";
import Pediatricians from "./Pediatricians.svg";

export const assets = {
  appointment_img,
  header_img,
  group_profiles,
  logo,
  chats_icon,
  verified_icon,
  info_icon,
  profile_pic,
  arrow_icon,
  contact_image,
  about_image,
  menu_icon,
  cross_icon,
  dropdown_icon,
  upload_icon,
  stripe_logo,
  razorpay_logo,
};

export const specialityData = [
  {
    speciality: "General physician",
    image: General_physician,
  },
  {
    speciality: "Gynecologist",
    image: Gynecologist,
  },
  {
    speciality: "Dermatologist",
    image: Dermatologist,
  },
  {
    speciality: "Pediatricians",
    image: Pediatricians,
  },
  {
    speciality: "Neurologist",
    image: Neurologist,
  },
  {
    speciality: "Gastroenterologist",
    image: Gastroenterologist,
  },
];

export const doctors = [
  {
    _id: "doc1",
    name: "Dr. Richard James",
    image: doc1,
    speciality: "General physician",
    degree: "MBBS",
    experience: "4 Years",
    about:
      "Dr. Richard James is an experienced general physician with a strong background in treating a wide variety of medical conditions. He emphasizes preventive healthcare and personalized treatment plans to ensure optimal patient outcomes.",
    fees: 50,
    address: {
      line1: "17th Cross, Richmond",
      line2: "Circle, Ring Road, London",
    },
    time: {
      workingDays: [1, 2, 3, 4, 5],
      startTimeString: "09:00",
      endTimeString: "17:00",
    },
  },
  {
    _id: "doc2",
    name: "Dr. Emily Larson",
    image: doc2,
    speciality: "Gynecologist",
    degree: "MBBS",
    experience: "3 Years",
    about:
      "Dr. Emily Larson specializes in women's health, particularly focusing on reproductive health, pregnancy care, and gynecological issues. She provides a compassionate and supportive environment for her patients.",
    fees: 60,
    address: {
      line1: "27th Cross, Richmond",
      line2: "Circle, Ring Road, London",
    },
    time: {
      workingDays: [0, 2, 4, 6],
      startTimeString: "10:00",
      endTimeString: "18:00",
    },
  },
  {
    _id: "doc3",
    name: "Dr. Sarah Patel",
    image: doc3,
    speciality: "Dermatologist",
    degree: "MBBS",
    experience: "1 Year",
    about:
      "Dr. Sarah Patel is a dedicated dermatologist with expertise in treating skin conditions, from acne to complex dermatological diseases. She believes in using advanced treatment options to help her patients achieve healthy, glowing skin.",
    fees: 30,
    address: {
      line1: "37th Cross, Richmond",
      line2: "Circle, Ring Road, London",
    },
    time: {
      workingDays: [0, 1, 2, 3, 4],
      startTimeString: "15:00",
      endTimeString: "23:00",
    },
  },
  {
    _id: "doc4",
    name: "Dr. Christopher Lee",
    image: doc4,
    speciality: "Pediatrician",
    degree: "MBBS",
    experience: "2 Years",
    about:
      "Dr. Christopher Lee is passionate about children's health, providing comprehensive care for infants, children, and adolescents. He works closely with families to ensure the best healthcare for young patients.",
    fees: 40,
    address: {
      line1: "47th Cross, Richmond",
      line2: "Circle, Ring Road, London",
    },
    time: {
      workingDays: [1, 3, 5],
      startTimeString: "08:00",
      endTimeString: "16:00",
    },
  },
  {
    _id: "doc5",
    name: "Dr. Jennifer Garcia",
    image: doc5,
    speciality: "Gastroenterologist",
    degree: "MBBS",
    experience: "4 Years",
    about:
      "Dr. Jennifer Garcia is a skilled gastroenterologist who focuses on diagnosing and treating digestive system disorders. She believes in a holistic approach, combining lifestyle modifications with medical treatment for optimal digestive health.",
    fees: 50,
    address: {
      line1: "57th Cross, Richmond",
      line2: "Circle, Ring Road, London",
    },
    time: {
      workingDays: [0, 2, 4, 6],
      startTimeString: "12:00",
      endTimeString: "20:00",
    },
  },
  {
    _id: "doc6",
    name: "Dr. Andrew Williams",
    image: doc6,
    speciality: "Pediatricians",
    degree: "MBBS",
    experience: "4 Years",
    about:
      "Dr. Andrew Williams is a neurologist with expertise in diagnosing and treating neurological disorders, including headaches, epilepsy, and neurodegenerative diseases. He is dedicated to providing cutting-edge care for his patients.",
    fees: 50,
    address: {
      line1: "57th Cross, Richmond",
      line2: "Circle, Ring Road, London",
    },
    time: {
      workingDays: [1, 3, 5],
      startTimeString: "09:00",
      endTimeString: "17:00",
    },
  },
  {
    _id: "doc7",
    name: "Dr. Christopher Davis",
    image: doc7,
    speciality: "General physician",
    degree: "MBBS",
    experience: "4 Years",
    about:
      "Dr. Christopher Davis is committed to providing high-quality care as a general physician, focusing on preventive medicine and accurate diagnosis. His goal is to help patients lead healthier lives through effective treatment.",
    fees: 50,
    address: {
      line1: "17th Cross, Richmond",
      line2: "Circle, Ring Road, London",
    },
    time: {
      workingDays: [1, 2, 3, 4, 5],
      startTimeString: "10:00",
      endTimeString: "18:00",
    },
  },
  {
    _id: "doc8",
    name: "Dr. Timothy White",
    image: doc8,
    speciality: "Gynecologist",
    degree: "MBBS",
    experience: "3 Years",
    about:
      "Dr. Timothy White is an experienced gynecologist who focuses on women's reproductive health, providing expert care during pregnancy and treatment of gynecological conditions. He creates a comfortable environment for his patients.",
    fees: 60,
    address: {
      line1: "27th Cross, Richmond",
      line2: "Circle, Ring Road, London",
    },
    time: {
      workingDays: [0, 2, 4, 6],
      startTimeString: "10:00",
      endTimeString: "18:00",
    },
  },
  {
    _id: "doc9",
    name: "Dr. Ava Mitchell",
    image: doc9,
    speciality: "Dermatologist",
    degree: "MBBS",
    experience: "1 Year",
    about:
      "Dr. Ava Mitchell specializes in skincare, offering treatment for conditions such as eczema, acne, and skin cancer. She is committed to providing individualized care to help patients maintain healthy skin.",
    fees: 30,
    address: {
      line1: "37th Cross, Richmond",
      line2: "Circle, Ring Road, London",
    },
    time: {
      workingDays: [1, 2, 4, 5],
      startTimeString: "14:00",
      endTimeString: "22:00",
    },
  },
  {
    _id: "doc10",
    name: "Dr. Jeffrey King",
    image: doc10,
    speciality: "Pediatrician",
    degree: "MBBS",
    experience: "2 Years",
    about:
      "Dr. Jeffrey King is focused on providing compassionate healthcare for children. He is skilled in handling a range of pediatric conditions and works to ensure children are as healthy as possible from infancy to adolescence.",
    fees: 40,
    address: {
      line1: "47th Cross, Richmond",
      line2: "Circle, Ring Road, London",
    },
    time: {
      workingDays: [2, 4, 6],
      startTimeString: "09:00",
      endTimeString: "15:00",
    },
  },
  {
    _id: "doc11",
    name: "Dr. Zoe Kelly",
    image: doc11,
    speciality: "Neurologist",
    degree: "MBBS",
    experience: "4 Years",
    about:
      "Dr. Zoe Kelly is a dedicated neurologist with a passion for treating patients with disorders such as stroke, multiple sclerosis, and other neurological conditions. She combines modern techniques with a patient-centered approach.",
    fees: 50,
    address: {
      line1: "57th Cross, Richmond",
      line2: "Circle, Ring Road, London",
    },
    time: {
      workingDays: [0, 1, 3, 5],
      startTimeString: "11:00",
      endTimeString: "19:00",
    },
  },
  {
    _id: "doc12",
    name: "Dr. Patrick Harris",
    image: doc12,
    speciality: "Neurologist",
    degree: "MBBS",
    experience: "4 Years",
    about:
      "Dr. Patrick Harris specializes in neurological disorders, with a focus on conditions like epilepsy, migraines, and Alzheimer's disease. He is dedicated to using state-of-the-art treatment options to improve patients' quality of life.",
    fees: 50,
    address: {
      line1: "57th Cross, Richmond",
      line2: "Circle, Ring Road, London",
    },
    time: {
      workingDays: [1, 3, 5],
      startTimeString: "10:00",
      endTimeString: "18:00",
    },
  },
  {
    _id: "doc13",
    name: "Dr. Chloe Evans",
    image: doc13,
    speciality: "General physician",
    degree: "MBBS",
    experience: "4 Years",
    about:
      "Dr. Chloe Evans provides comprehensive care as a general physician, focusing on early diagnosis and preventive medicine. She is dedicated to helping patients maintain their health with personalized treatment plans.",
    fees: 50,
    address: {
      line1: "17th Cross, Richmond",
      line2: "Circle, Ring Road, London",
    },
    time: {
      workingDays: [2, 3, 5],
      startTimeString: "08:00",
      endTimeString: "16:00",
    },
  },
  {
    _id: "doc14",
    name: "Dr. Ryan Martinez",
    image: doc14,
    speciality: "Gynecologist",
    degree: "MBBS",
    experience: "3 Years",
    about:
      "Dr. Ryan Martinez is a highly skilled gynecologist, offering expertise in areas such as pregnancy care, fertility issues, and hormonal disorders. His approach is patient-focused, ensuring women feel supported and well-informed.",
    fees: 60,
    address: {
      line1: "27th Cross, Richmond",
      line2: "Circle, Ring Road, London",
    },
    time: {
      workingDays: [0, 2, 4, 6],
      startTimeString: "09:00",
      endTimeString: "17:00",
    },
  },
  {
    _id: "doc15",
    name: "Dr. Amelia Hill",
    image: doc15,
    speciality: "Dermatologist",
    degree: "MBBS",
    experience: "1 Year",
    about:
      "Dr. Amelia Hill is an innovative dermatologist with a passion for treating common and complex skin conditions. She focuses on helping patients improve their skin health through both cosmetic and medical dermatology.",
    fees: 30,
    address: {
      line1: "37th Cross, Richmond",
      line2: "Circle, Ring Road, London",
    },
    time: {
      workingDays: [1, 3, 5],
      startTimeString: "10:00",
      endTimeString: "18:00",
    },
  },
];

"use client";
import React, { useEffect, useRef, useState } from "react";
import TextField from "@mui/material/TextField";
import { Footer } from "../Footer";
import FAQs from "../Faqs";
import axios from "axios";
import {
  Button,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Menu,
  MenuItem,
  Skeleton,
} from "@mui/material";
import Testimonials from "../Testimonials";
import Services from "../Services";
import HealthPackage from "../Healthpackages";

interface FormData {
  name: string;
  address: {
    flatNumber: string;
    buildingNumber: string;
    landmark: string;
    city: string;
  };
  contactNumber: string;
  bookingTime: string;
}

// Homepage component
const Homepage: React.FC = () => {
  // State to manage form inputs
  const [formData, setFormData] = useState<FormData>({
    name: "",
    address: {
      flatNumber: "",
      buildingNumber: "",
      landmark: "",
      city: "",
    },
    contactNumber: "",
    bookingTime: "",
  });

  const [openDialog, setOpenDialog] = useState(false);
  const [loading, setLoading] = useState(false); // Add loading state

  // Function to handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    console.log("Form submitted:", formData);
    // const requestOptions = {
    //   headers: { "Content-Type": "application/json" },
    //   data: JSON.stringify(formData),
    // };

    try {
      const baseUrl = "https://pathlab-five.vercel.app";
      // const baseUrl = "http://localhost:3000";
      const response = await axios.post(baseUrl + "/api/send-email", formData);
      if (response.status !== 200) {
        throw new Error("Failed to insert data");
      }
      console.log("Form submitted:", formData);
      setOpenDialog(true);
    } catch (error) {
      console.error("Error inserting data:", error);
      // Handle error as needed
    } finally {
      setLoading(false); // Set loading to false regardless of success or failure
    }

    // setFormData({
    //   name: '',
    //   address: {
    //     flatNumber: '',
    //     buildingNumber: '',
    //     landmark: '',
    //     city: '',
    //   },
    //   contactNumber: '',
    //   bookingTime: '',
    // });
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  // Function to handle input changes
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Function to handle address input changes
  const handleAddressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      address: {
        ...formData.address,
        [name]: value,
      },
    });
  };

  const [imageLoaded, setImageLoaded] = useState<boolean>(false);
  useEffect(() => {
    const imageInstance = new Image();
    imageInstance.src = "./formimage.jpg";
    imageInstance.addEventListener("load", () => {
      setImageLoaded(true);
    });

    return () => {
      imageInstance.removeEventListener("load", () => {
        setImageLoaded(true);
      });
    };
  }, []);

  const [bgImageLoaded, setBgImageLoaded] = useState(false);
  useEffect(() => {
    const bgImageInstance = new Image();
    bgImageInstance.src = "./home.jpg";
    bgImageInstance.addEventListener("load", () => {
      setBgImageLoaded(true);
    });

    return () => {
      bgImageInstance.removeEventListener("load", () => {
        setBgImageLoaded(true);
      });
    };
  }, []);

  const formRef = useRef<HTMLDivElement>(null);
  const faqsRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);

  const scrollToServices = () => {
    if (servicesRef.current) {
      servicesRef.current.scrollIntoView({ behavior: "smooth" });
    }
    setMobileMenuAnchor(null);
  };

  // Function to handle scroll to the form
  const scrollToForm = () => {
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: "smooth" });
    }
    setMobileMenuAnchor(null);
  };

  // Function to handle scroll to the FAQs
  const scrollToFAQs = () => {
    if (faqsRef.current) {
      faqsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  const [mobileMenuAnchor, setMobileMenuAnchor] =
    useState<HTMLButtonElement | null>(null);

  // Function to open the mobile navigation menu
  const openMobileMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
    setMobileMenuAnchor(event.currentTarget);
  };

  // Function to close the mobile navigation menu
  const closeMobileMenu = () => {
    setMobileMenuAnchor(null);
  };

  return (
    <>
      <div className="overflow-hidden  h-screen w-screen bg-gray-50 text-black">
        <nav className="bg-black p-4 w-screen">
          <div className=" flex justify-between items-center">
            <div className="text-white font-semibold text-xl w-28">
              <img src="/Logo.jpeg" alt="Logo" />
            </div>
            <Button
              onClick={openMobileMenu}
              className="text-white hover:text-gray-200 md:hidden"
            >
              Menu
            </Button>
            {/* Mobile navigation menu */}
            <Menu
              anchorEl={mobileMenuAnchor}
              open={Boolean(mobileMenuAnchor)}
              onClose={closeMobileMenu}
              anchorOrigin={{ vertical: "bottom", horizontal: "center" }} // Set anchor origin
              transformOrigin={{ vertical: "top", horizontal: "center" }} // Set transform origin
            >
              <MenuItem onClick={scrollToServices}>Services</MenuItem>
              <MenuItem onClick={scrollToForm}>Appointment</MenuItem>
            </Menu>
            <ul className="hidden md:flex space-x-4">
              <li>
                <a
                  href="#"
                  className="text-white hover:text-gray-200 hidden sm:block"
                >
                  Home
                </a>
              </li>
              <li>
                <button
                  onClick={scrollToServices}
                  className="text-white hover:text-gray-200"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={scrollToForm}
                  className="text-white hover:text-gray-200"
                >
                  Appointment
                </button>
              </li>
            </ul>
          </div>
        </nav>
        <div
          className="hidden md:block h-full bg-cover bg-top w-screen"
          style={{
            backgroundImage: bgImageLoaded ? "url('./home.jpg')" : "none",
          }}
        >
          {!bgImageLoaded && (
            <div className="h-full w-full bg-gray-300 animate-pulse"></div>
          )}
          <div className="text-white text-4xl w-1/2 flex items-center justify-center h-full">
            <div className="mx-10">
              <span className="">We will help you to become Healthy</span>
              <div>Book an appointment</div>
              <Button
                variant="contained"
                onClick={scrollToForm}
                className="bg-[#E82B7B]"
              >
                Appointment
              </Button>
            </div>
          </div>
        </div>

        <div
          className="block md:hidden h-full bg-cover bg-center w-screen "
          style={{
            backgroundImage: "url('./homephone.jpg')",
            opacity: 0.8,
          }}
        >
          {!bgImageLoaded && (
            <div className="h-full w-full bg-gray-300 animate-pulse"></div>
          )}
          <div className="text-white text-4xl  flex items-center justify-center h-full">
            <div className="mx-10">
              <span className="">We will help you to become Healthy</span>
              <div>Book an appointment</div>
              <Button
                variant="contained"
                onClick={scrollToForm}
                className="bg-[#E82B7B]"
              >
                Appointment
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="" ref={servicesRef}>
        <Services />
      </div>
      <HealthPackage />
      <Dialog open={openDialog} onClose={handleCloseDialog}>
        <DialogTitle>Form Submitted</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Dear {formData.name}, your appointment has been confirmed for{" "}
            {formData.bookingTime}. Please make sure to arrive on time. If you
            have any questions or need to reschedule, feel free to contact us at{" "}
            <span className="text-purple-600 font-semibold">
              +91-8920020464
            </span>
            .
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} autoFocus>
            Close
          </Button>
        </DialogActions>
      </Dialog>
      <div
        className="min-h-screen w-screen flex flex-col-reverse md:flex-row justify-center items-center bg-gray-50"
        ref={formRef}
      >
        <div className="md:w-1/2 h-full flex justify-center items-center">
          <div className="w-[80%] m-4 md:m-0  border-2 border-zinc-500">
            <img src="./formimage.jpg" alt="Form" />
          </div>
        </div>
        <div className="md:w-1/2">
          <h1 className="text-3xl text-center font-semibold mb-4 text-black">
            Booking Form
          </h1>
          <form onSubmit={handleSubmit} className="max-w-md mx-4 md:mx-auto">
            <div className="mb-4">
              <TextField
                id="name"
                name="name"
                label="Name"
                value={formData.name}
                onChange={handleInputChange}
                fullWidth
                required
              />
            </div>
            <div className="flex justify-between">
              <div className="mb-4 mr-3">
                <TextField
                  id="flatNumber"
                  name="flatNumber"
                  label="Flat Number"
                  value={formData.address.flatNumber}
                  onChange={handleAddressChange}
                  fullWidth
                  required
                />
              </div>
              <div className="mb-4">
                <TextField
                  id="buildingNumber"
                  name="buildingNumber"
                  label="Building Number"
                  value={formData.address.buildingNumber}
                  onChange={handleAddressChange}
                  fullWidth
                  required
                />
              </div>
            </div>
            <div className="mb-4">
              <TextField
                id="landmark"
                name="landmark"
                label="Landmark"
                value={formData.address.landmark}
                onChange={handleAddressChange}
                fullWidth
                required
              />
            </div>
            <div className="mb-4">
              <TextField
                id="city"
                name="city"
                label="City"
                value={formData.address.city}
                onChange={handleAddressChange}
                fullWidth
                required
              />
            </div>
            <div className="flex justify-evenly">
              <div className="mb-4 w-3/5 mr-3">
                <TextField
                  id="contactNumber"
                  name="contactNumber"
                  label="Contact Number"
                  value={formData.contactNumber}
                  onChange={handleInputChange}
                  fullWidth
                  required
                />
              </div>
              <div className="mb-4 w-2/5">
                <TextField
                  id="bookingTime"
                  name="bookingTime"
                  label="Booking Time"
                  type="datetime-local"
                  value={formData.bookingTime}
                  onChange={handleInputChange}
                  placeholder=""
                  fullWidth
                  required
                  InputLabelProps={{
                    shrink: true,
                    style: { marginBottom: "8px" }, // Adjust the margin as needed
                  }}
                />
              </div>
            </div>
            <div className="text-center flex justify-center">
              <button className="cursor-pointer group relative flex gap-1.5 px-8 py-4 bg-black bg-opacity-80 text-[#f1f1f1] rounded-3xl hover:bg-opacity-70 transition font-semibold shadow-md">
                {loading ? <CircularProgress /> : "Book a Visit"}
              </button>
            </div>
          </form>
        </div>
      </div>
      <hr />
      <div className="bg-gray-50">
        <FAQs />
      </div>
      <hr />
      <Testimonials />
      <Footer
        handleservices={scrollToServices}
        handleappointment={scrollToForm}
      />
    </>
  );
};

export default Homepage;

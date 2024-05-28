import React, { useState } from "react";
import { FaCaretLeft, FaCaretRight } from "react-icons/fa";

interface Testimonial {
    name: string;
    field: string;
    message: string;
}

const Testimonials = () => {
    const [currentPage, setCurrentPage] = useState(0);
    const testimonialsPerPage = 3;
    const testimonials = [
        {
          name: "Dr. Anita Gupta",
          field: "Hematologist",
          message: "As a hematologist, I highly value the accurate and comprehensive hematology services provided by this pathlab. Their detailed blood analysis has been instrumental in diagnosing and monitoring various blood disorders in my patients, enabling me to provide effective treatment plans.",
          service: "Hematology",
          image: "https://example.com/images/dr-anita-gupta.jpg"
        },
        {
          name: "Rahul Sharma",
          field: "Patient",
          message: "I recently underwent a comprehensive biochemical analysis at this pathlab, and I was impressed by their professionalism and attention to detail. The staff explained the process clearly, and the detailed report provided valuable insights into my overall health.",
          service: "Biochemistry",
          image: "https://example.com/images/rahul-sharma.png"
        },
        {
          name: "Dr. Nisha Kapoor",
          field: "Infectious Disease Specialist",
          message: "As an infectious disease specialist, I rely heavily on accurate microbiology testing to diagnose and treat my patients effectively. This pathlab's microbiology services have consistently provided reliable results, enabling me to make informed decisions and provide appropriate treatment plans.",
          service: "Microbiology",
          image: "https://example.com/images/dr-nisha-kapoor.jpg"
        },
        {
          name: "Amit Singh",
          field: "Patient",
          message: "I have an autoimmune disorder, and the immunology services provided by this pathlab have been invaluable in monitoring my condition. The staff is knowledgeable and compassionate, and the accurate test results have helped my doctor make informed decisions about my treatment.",
          service: "Immunology",
          image: "https://example.com/images/amit-singh.png"
        },
        {
          name: "Dr. Priya Desai",
          field: "Oncologist",
          message: "As an oncologist, I heavily rely on advanced molecular diagnostics to provide personalized treatment plans for my cancer patients. This pathlab's molecular assays have been instrumental in detecting and monitoring various cancers, allowing me to make informed decisions and provide targeted therapies.",
          service: "Molecular Assays",
          image: "https://example.com/images/dr-priya-desai.jpg"
        },
        {
          name: "Ravi Patel",
          field: "Patient",
          message: "I recently underwent a comprehensive health checkup at this pathlab, and I was thoroughly impressed by their wellness package. The staff was professional and courteous, and the thorough testing provided valuable insights into my overall health and potential risk factors.",
          service: "Wellness Packages",
          image: "https://example.com/images/ravi-patel.png"
        },
        {
          name: "Dr. Sneha Sharma",
          field: "Pathologist",
          message: "As a pathologist, I highly value the accuracy and attention to detail provided by this pathlab's histology and cytology services. Their microscopic examination of tissues and cells has been instrumental in diagnosing various cancers and other diseases, enabling me to provide accurate diagnoses and facilitate appropriate treatment plans.",
          service: "Histology/Cytology",
          image: "https://example.com/images/dr-sneha-sharma.jpg"
        }
      ];

    const totalTestimonials = testimonials.length;

    const goToPreviousPage = () => {
        setCurrentPage((prevPage) =>
            prevPage === totalTestimonials - 1 ? 0 : prevPage + 1
        );
    };

    const goToNextPage = () => {
        setCurrentPage((prevPage) =>
            prevPage === 0 ? totalTestimonials - 1 : prevPage - 1
        );
    };

    return (
        <>
            <div className=" flex flex-col justify-evenly  bg-gray-50">
                <div className="text-4xl text-center p-7 text-black">What people say</div>
                <div className="flex flex-col gap-5 px-6">
                    <div className="md:grid grid-cols-1 md:grid-cols-3 gap-6 hidden ">
                        {Array.from({ length: testimonialsPerPage }, (_, index) => {
                            const testimonialIndex =
                                (currentPage + testimonialsPerPage + index) % totalTestimonials;
                            const testimonial = testimonials[testimonialIndex];
                            if (testimonialIndex < totalTestimonials) {
                                return (
                                    <div
                                        key={testimonialIndex}
                                        className="flex flex-col border border-gray-300 rounded-lg p-4 shadow-lg bg-white"
                                    >
                                        <div className="w-full">
                                            <img
                                                src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                                                className="w-10 h-10 rounded-full"
                                                alt={testimonial.name}
                                            />
                                        </div>
                                        <div className="text-start">
                                            <div className="text-xl font-semibold text-black">
                                                {testimonial.name}
                                            </div>
                                            <div className="text-sm text-gray-500">
                                                {testimonial.field}
                                            </div>
                                            <div className="text-base text-gray-700 mt-2">
                                                {testimonial.message}
                                            </div>
                                        </div>
                                    </div>
                                );
                            } else {
                                return null;
                            }
                        })}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3  md:hidden ">
                        {Array.from({ length: 1 }, (_, index) => {
                            const testimonialIndex =
                                (currentPage + testimonialsPerPage + index) % totalTestimonials;
                            const testimonial = testimonials[testimonialIndex];
                            if (testimonialIndex < totalTestimonials) {
                                return (
                                    <div
                                        key={testimonialIndex}
                                        className="flex flex-col border border-gray-300 rounded-lg p-4 shadow-lg"
                                    >
                                        <img
                                            src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                                            className="w-10 h-10 rounded-full"
                                            alt={testimonial.name}
                                        />
                                        <div className="text-start">
                                            <div className="text-xl font-semibold text-black">
                                                {testimonial.name}
                                            </div>
                                            <div className="text-sm text-gray-500">
                                                {testimonial.field}
                                            </div>
                                            <div className="text-base text-gray-700 mt-2">
                                                {testimonial.message}
                                            </div>
                                        </div>
                                    </div>
                                );
                            } else {
                                return null;
                            }
                        })}
                    </div>
                    <div className="flex justify-center gap-2 mt-4">
                        <div onClick={goToPreviousPage}>
                            <FaCaretLeft className="text-2xl  text-primary text-black" />
                        </div>
                        <div onClick={goToNextPage}>
                            <FaCaretRight className="text-2xl  text-primary text-black" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Testimonials;
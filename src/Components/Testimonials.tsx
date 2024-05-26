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
    const testimonials: Testimonial[] = [
        {
            name: "Dr. Emily Wilson",
            field: "General Practitioner",
            message:
                "As a general practitioner, I rely heavily on accurate and timely lab results for diagnosing and treating patients. This pathlab has consistently provided exceptional service with their accurate testing and prompt report delivery. Their professionalism and commitment to quality are truly commendable.",
        },
        {
            name: "Michael Johnson",
            field: "Patient",
            message:
                "I've been a patient at this pathlab for several years, and I'm always impressed by the staff's friendly and caring approach. The phlebotomists are skilled and make the process as comfortable as possible. The detailed reports are easy to understand, and I appreciate the convenience of their online portal.",
        },
        {
            name: "Dr. Sarah Thompson",
            field: "Oncologist",
            message:
                "As an oncologist, I heavily rely on accurate and comprehensive lab testing for my cancer patients. This pathlab has consistently delivered exceptional results, enabling me to provide the best possible care. Their state-of-the-art equipment and highly qualified personnel ensure reliable and timely diagnoses.",
        },
        {
            name: "David Lee",
            field: "Patient",
            message:
                "I recently had a series of tests done at this pathlab, and I was thoroughly impressed by their efficiency and attention to detail. The staff was courteous and explained the process clearly. The results were delivered promptly, and the report was easy to understand. I highly recommend their services.",
        },
        {
            name: "Dr. Samantha Miller",
            field: "Gynecologist",
            message:
                "As a gynecologist, I trust this pathlab implicitly for all my patients' testing needs. Their commitment to accuracy and confidentiality is exceptional. The clear and detailed reports they provide have been invaluable in diagnosing and treating various conditions. I'm grateful for their professionalism and expertise.",
        },
        {
            name: "Tom Wilson",
            field: "Patient",
            message:
                "I've been a patient at this pathlab for years, and I can't say enough good things about their service. The staff is always friendly and efficient, and the wait times are minimal. The online portal makes scheduling appointments and accessing results a breeze. I highly recommend their services.",
        },
        {
            name: "Dr. Robert Davis",
            field: "Endocrinologist",
            message:
                "As an endocrinologist, I rely heavily on precise lab results to diagnose and monitor various hormonal conditions. This pathlab's attention to detail and accuracy is exceptional. Their prompt report delivery and comprehensive analysis have been invaluable in providing the best possible care for my patients.",
        },
        {
            name: "Jennifer Lee",
            field: "Patient",
            message:
                "I recently had a series of tests done at this pathlab, and I was thoroughly impressed by their customer service and attention to detail. The staff was courteous and made me feel comfortable throughout the process. The results were delivered promptly, and the report was easy to understand. I highly recommend their services.",
        },
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
            <div className=" flex flex-col justify-evenly h-screen bg-gray-50">
                <div className="text-4xl text-center p-7">What people say</div>
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
                                            <div className="text-xl font-semibold">
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
                                            <div className="text-xl font-semibold">
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
                            <FaCaretLeft className="text-2xl  text-primary" />
                        </div>
                        <div onClick={goToNextPage}>
                            <FaCaretRight className="text-2xl  text-primary" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Testimonials;
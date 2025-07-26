import React, { useState, useEffect } from 'react';

const testimonialsData = [
    {
        name: 'Esther Howard',
        title: 'Patient',
        image: 'https://via.placeholder.com/50x50', // Replace with actual image
        testimonial: 'I had a great experience at this healthcare clinic. I was seen quickly, and the doctor was able to diagnose and treat my condition.',
    },
    {
        name: 'John Doe',
        title: 'Patient',
        image: 'https://via.placeholder.com/50x50', // Replace with actual image
        testimonial: 'The staff was incredibly friendly and helpful. I felt well cared for throughout my visit.',
    },
    {
        name: 'Jane Smith',
        title: 'Patient',
        image: 'https://via.placeholder.com/50x50', // Replace with actual image
        testimonial: 'I was impressed with the doctors knowledge and expertise. They took the time to explain my condition and treatment options clearly.',
    },
];

const ReviewSection = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % testimonialsData.length);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="bg-white b-[300px] justify-center p-4 rounded-lg">
            <h2 className="text-3xl font-bold mb-2">Our doctors and clinics have earned over 5,000+ reviews on Google!</h2>
            <div className="flex items-center mb-4">
                <span className="text-yellow-500">★★★★★</span>
            </div>
            <p className="text-gray-600">Average Google Rating is 4.6</p>
            <div className="relative overflow-hidden">
                <div
                    className="whitespace-nowrap transition-transform duration-500"
                    style={{
                        transform: `translateX(-${currentSlide * 100}%)`,
                    }}
                >
                    {testimonialsData.map((testimonial, index) => (
                        <div
                            key={index}
                            className="inline-block w-full bg-gray-100 p-4 rounded-lg"
                            style={{ minWidth: "100%" }}
                        >
                            <div className="flex items-center mb-2">
                                <img
                                    src={testimonial.image}
                                    alt={testimonial.name}
                                    className="rounded-full mr-2"
                                />
                                <div>
                                    <p className="font-bold">{testimonial.name}</p>
                                    <p className="text-gray-500">{testimonial.title}</p>
                                </div>
                            </div>
                            <p className="text-gray-700">{testimonial.testimonial}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex justify-center mt-4">
                {testimonialsData.map((_, index) => (
                    <div
                        key={index}
                        className={`h-2 w-2 mx-1 rounded-full cursor-pointer ${currentSlide === index ? 'bg-yellow-500' : 'bg-gray-300'}`}
                        onClick={() => setCurrentSlide(index)}
                    />
                ))}
            </div>
        </div>
    );
};

export default ReviewSection;

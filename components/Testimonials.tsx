
import React from 'react';
import { TESTIMONIALS } from '../constants/index';

const Testimonials: React.FC = () => {
    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-serif font-bold text-brand-dark text-center mb-10">What Our Customers Say</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {TESTIMONIALS.map((testimonial) => (
                        <div key={testimonial.id} className="bg-brand-light p-8 rounded-lg shadow-sm text-center">
                            <p className="text-gray-600 italic mb-6">"{testimonial.quote}"</p>
                            <div className="font-bold text-brand-primary">{testimonial.author}</div>
                            <div className="text-sm text-gray-500">{testimonial.location}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;

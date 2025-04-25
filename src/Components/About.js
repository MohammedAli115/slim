import React from 'react';
import { motion } from 'framer-motion';
import '../about.css'; 

function About() {
    return (
        <div className='about py-5 overflow-hidden'>
            <div className='container'>
                <div className='row align-items-center'>
                    <motion.div
                        className='col-md-6'
                        initial={{ opacity: 0, x: 100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7 }}
                    >
                        <div className='head'>
                            <h2 className='mb-4 fs-1 fw-bolder'>من نحن</h2>
                            <div className="smile-container">
                                <svg viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10,40 Q50,90 190,30" stroke="#00b3ff" strokeWidth="8" fill="none" strokeLinecap="round" />
                                </svg>
                            </div>


                        </div>
                        <h3 className='py-4'>عيادات سليم سمايل </h3>
                        <p>في عيادات slim Smile، بنقدملك أفضل رعاية في طب وجراحة الفم والأسنان على يد نخبة من الأطباء المتخصصين. صحتك الفموية وراحتك أولويتنا.</p>
                        <p>نستخدم أحدث التقنيات والمعدات لضمان تقديم أعلى مستوى من الخدمة. فريقنا من الأطباء المتخصصين يسعى دائمًا لتقديم أفضل الحلول العلاجية والتجميلية.</p>
                        <button type="button" className="btn btn-info mt-3">إحجز إستشارة الآن</button>
                    </motion.div>

                    <motion.div
                        className='col-md-6'
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7 }}
                    >
                        <img src="/about/about.jpg" loading='lazy' alt="About Us" className='img-fluid rounded-4' style={{ height: "450px" }} />
                    </motion.div>
                </div>
            </div>
        </div>
    );
}

export default About;

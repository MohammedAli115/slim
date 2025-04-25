
import React from 'react';
import { motion } from 'framer-motion';

function Home() {
    return (
        <div className='home-page position-relative'>
            <div className='video'>
                <video autoPlay loop muted playsInline style={{ width: "100%", minHeight: "100vh", objectFit: "cover" }}>
                    <source src="/video/video.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
            <motion.div 
                className='text position-absolute top-50 start-50 text-center text-white translate-middle'
                initial={{ opacity: 0, y: "100%" }} 
                animate={{ opacity: 1, y: "-50%" }} 
                transition={{ duration: 1 }} 
            >
                <h2 className='fs-1 mb-3'>إبتسامتك سر ثقتك</h2>
                <p>في عيادات Saleem Smile، بنقدملك أفضل رعاية في طب وجراحة الفم والأسنان على يد نخبة من الأطباء المتخصصين. صحتك الفموية وراحتك أولويتنا.</p>
                <button type="button" className="btn btn-outline-info">إحجز إستشارة الآن</button>
            </motion.div>
        </div>
    );
}

export default Home;

import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" }
    },
};

function About() {
    const logos = [
        { id: 'n8n', path: '/icones/n8n.png', fundo: 'absolute inset-0 rounded-md bg-rose-500', borda: 'relative flex items-center justify-center w-24 h-24 bg-[#090A0C] font-bold rounded-md border-[1px] border-rose-500' },
        { id: 'docker', path: '/icones/docker.png', fundo: 'absolute inset-0 rounded-md bg-sky-500', borda: 'relative flex items-center justify-center w-24 h-24 bg-[#090A0C] font-bold rounded-md border-[1px] border-sky-500' },
        { id: 'power_automate', path: '/icones/power_automate.png', fundo: 'absolute inset-0 rounded-md bg-sky-500', borda: 'relative flex items-center justify-center w-24 h-24 bg-[#090A0C] font-bold rounded-md border-[1px] border-sky-500' },
        { id: 'airflow', path: '/icones/airflow.png', fundo: 'absolute inset-0 rounded-md bg-green-400', borda: 'relative flex items-center justify-center w-24 h-24 bg-[#090A0C] font-bold rounded-md border-[1px] border-green-400' },
        { id: 'react', path: '/icones/react.png', fundo: 'absolute inset-0 rounded-md bg-cyan-300', borda: 'relative flex items-center justify-center w-24 h-24 bg-[#090A0C] font-bold rounded-md border-[1px] border-cyan-300' },
        { id: 'vite', path: '/icones/vite.png', fundo: 'absolute inset-0 rounded-md bg-purple-500', borda: 'relative flex items-center justify-center w-24 h-24 bg-[#090A0C] font-bold rounded-md border-[1px] border-purple-500' },
        { id: 'tailwind', path: '/icones/tailwind.png', fundo: 'absolute inset-0 rounded-md bg-cyan-300', borda: 'relative flex items-center justify-center w-24 h-24 bg-[#090A0C] font-bold rounded-md border-[1px] border-cyan-300' },
        { id: 'django', path: '/icones/django.png', fundo: 'absolute inset-0 rounded-md bg-green-700', borda: 'relative flex items-center justify-center w-24 h-24 bg-[#090A0C] font-bold rounded-md border-[1px] border-green-700' },
        { id: 'python', path: '/icones/python.png', fundo: 'absolute inset-0 rounded-md bg-yellow-300', borda: 'relative flex items-center justify-center w-24 h-24 bg-[#090A0C] font-bold rounded-md border-[1px] border-yellow-300' },
        { id: 'sql', path: '/icones/sql.png', fundo: 'absolute inset-0 rounded-md bg-blue-800', borda: 'relative flex items-center justify-center w-24 h-24 bg-[#090A0C] font-bold rounded-md border-[1px] border-blue-800' },
        { id: 'tensorflow', path: '/icones/tensorflow.png', fundo: 'absolute inset-0 rounded-md bg-orange-500', borda: 'relative flex items-center justify-center w-24 h-24 bg-[#090A0C] font-bold rounded-md border-[1px] border-orange-500' },
        { id: 'powerbi', path: '/icones/powerbi.png', fundo: 'absolute inset-0 rounded-md bg-yellow-300', borda: 'relative flex items-center justify-center w-24 h-24 bg-[#090A0C] font-bold rounded-md border-[1px] border-yellow-300' },
    ]

    const [hovered, setHovered] = useState(null);

    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start start', 'end end'],
    });


    const h1Y = useTransform(scrollYProgress, [0.65, 0.85], [0,0]);
    const h1Opacity = useTransform(scrollYProgress, [0.45, 0.55], [1, 0]);

    return (
        <section ref={containerRef} className="relative min-h-screen flex flex-col">
            <motion.div
                style={{ y: h1Y, opacity: h1Opacity }}
                className="sticky top-0 h-screen w-full flex justify-center items-center 
                      text-[15vw] font-extrabold uppercase leading-none text-white z-0">
                ABOUT
            </motion.div>

            <div className="relative w-full mx-auto py-[10vh] z-10">
                <motion.div
                    // Placeholders com estilo para o tema escuro
                    className="h-[1000px] w-full mb-20 flex justify-center items-center 
                    rounded-xl text-3xl"
                    variants={itemVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <div className='flex items-center justify-center'>
                        <div className='w-[40%] p-5 ml-20'>
                            <p className='about-font'>I'm <span className='about-font-bold'>Isaac Bittencourt Silva</span>, <span className='about-font-bold'>26 years old</span>,<br />
                                a Fullstack Developer with strong experience in automation and artificial intelligence.
                                I build complete web solutions using technologies like <span className='about-font-bold'>React</span>,<span className='about-font-bold'>Vite</span>, <span className='about-font-bold'>Three.js</span>, and <span className='about-font-bold'>Flask</span>,
                                and automate workflows with tools like <span className='about-font-bold'>Power Automate</span>, <span className='about-font-bold'>n8n</span>, and <span className='about-font-bold'>Python</span>.
                                I handle large-scale data processing using <span className='about-font-bold'>SQL</span>, <span className='about-font-bold'>Polars</span>, and <span className='about-font-bold'>DuckDB</span>, always focusing on performance and consistency.
                                As an AI engineer, I develop and train <span className='about-font-bold'>TensorFlow</span> models for OCR, image classification, and predictive analysis.
                                My skill set bridges development, data, and automation to deliver intelligent and scalable solutions.
                            </p>
                        </div>
                        <div className='w-[60%] grid grid-cols-4 gap-2 p-35 min-h-screen place-items-center'>
                            {logos.map((logo) => (
                                <motion.div
                                    key={logo.id}
                                    className="relative"
                                    onHoverStart={() => setHovered(logo.id)}
                                    onHoverEnd={() => setHovered(null)}
                                >
                                    {/* Borda 3D (fundo) */}
                                    <motion.div
                                        animate={{
                                            x: hovered === logo.id ? 6 : 0,
                                            y: hovered === logo.id ? 6 : 0,
                                        }}
                                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                        className={logo.fundo}
                                    />

                                    {/* Botão em si */}
                                    <motion.button
                                        animate={{
                                            // x: hovered === logo.id ? 6 : 0,
                                            y: hovered === logo.id ? -3 : 0,
                                        }}
                                        whileTap={{ scale: 0.95 }}
                                        className={logo.borda}
                                    >
                                        <img src={logo.path} alt="" className={logo.id === 'powerbi' ? 'w-[60%] mt-5 ml-3' : 'w-[50%]'} />
                                        {/* {logo.name} */}
                                    </motion.button>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>
                {/* {[1, 2, 3].map((item) => (
          <motion.div
            key={item}
            // Placeholders com estilo para o tema escuro
            className="h-[500px] w-full mb-20 flex justify-center items-center 
                       bg-gray-900 rounded-xl text-3xl text-gray-600"
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            Desenho {item}
          </motion.div>
        ))} */}
            </div>
        </section>
    );
};

export default About;
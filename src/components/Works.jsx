import React from 'react';
import { motion } from 'motion/react';

// A lógica de animação do Framer Motion continua a mesma
const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" }
    },
};

const projetos = [
    {
        id: 2,
        empresa: "Tigrinho BJJ",
        logo: "/projetos/logo_tigrinho.png",
        bg: "/projetos/fundo_tigrinho.jpg",
        desc: "Site da equipe de Jiu Jitsu do professor Hemerson Hubaldo (Tigrinho)",
        link: "#",
    },
    {
        id: 1,
        empresa: "Teste",
        logo: "/projetos/logo_teste.jpg",
        bg: "/projetos/fundo_teste.jpg",
        desc: "Resumo da empresa Teste",
        link: "#",
    },
]


function Works(){
    return (
        // .section -> relative min-h-screen flex flex-col
        <section className="relative min-h-screen flex flex-col bg-white">
            {/* .sticky-title -> classes de posicionamento, tamanho, fonte e cor */}
            <div className="sticky top-0 h-screen w-full flex justify-center items-center 
                      text-[15vw] font-extrabold uppercase leading-none text-neutral-900 z-0">
                Works
            </div>

            {/* .content -> classes de posicionamento, z-index e largura */}
            <div className="relative w-full mx-auto py-[10vh] z-10">
                {projetos.map((item) => (
                    <motion.div
                        key={item.id}
                        // .placeholder-item -> classes de estilo do card
                        className="h-[800px] w-full mb-20 flex justify-center items-center 
                       bg-gray-100 rounded-xl text-3xl text-gray-400"
                        variants={itemVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        style={{
                            backgroundImage: `url(${item.bg})`,
                            alignItems: 'center',
                            justifyContent: 'center',
                            backgroundSize: 1900,
                            backgroundRepeat: 'no-repeat'

                        }}
                    >
                        <div className="w-full h-full bg-black/70 flex items-center justify-center">
                            <div className="w-[90%] max-w-5xl flex items-center gap-52">

                                {/* Seção Esquerda */}
                                <div className="w-[50%] flex flex-col justify-center items-center gap-36">
                                    <h2 className="text-[3vw] text-center font-extrabold uppercase leading-none text-white">{item.empresa}</h2>
                                    <a
                                        href={item.link}
                                        className="bg-[#eeddcc] text-gray-800 p-10 rounded-md text-[3vw] font-extrabold uppercase leading-none transition-colors duration-300 hover:bg-[#e0cbb8]"
                                    >
                                        Visitar
                                    </a>
                                </div>

                                {/* Seção Direita */}
                                <div className="w-[50%] flex flex-col items-center">
                                    <div className="p-4 mb-5 rounded-[100%] work-shadown">
                                        <img
                                            src={item.logo}
                                            alt={`Imagem do ${item.empresa}`}
                                            className="max-w-[300px] h-[300px] rounded-[100%]"
                                        />
                                    </div>
                                    <p className="works-font text-center max-w-[400px]">
                                        {item.desc}
                                    </p>
                                </div>

                            </div>
                        </div>

                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Works;
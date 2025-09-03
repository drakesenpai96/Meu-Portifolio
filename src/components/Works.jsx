import { useState, useRef } from 'react'
import { motion, AnimatePresence, useScroll, useMotionValueEvent, useTransform } from "motion/react"

const projetos = [
    {
        id: 1,
        empresa: "Teste",
        logo: "/projetos/logo_teste.jpg",
        bg: "/projetos/fundo_teste.jpg",
        desc: "Resumo da empresa Teste",
        link: "#",
    },
    {
        id: 2,
        empresa: "Tigrinho BJJ",
        logo: "/projetos/logo_tigrinho.png",
        bg: "/projetos/fundo_tigrinho.jpg",
        desc: "Equipe de Jiu Jitsu",
        link: "#",
    },
]



function Works({ }) {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['end end', 'start start'],
    });

    const [activeIndex, setActiveIndex] = useState(0);

    const projectIndex = useTransform(
        scrollYProgress,
        [0, 0.8, 1],
        [0, 1, 1]
    );


    useMotionValueEvent(projectIndex, "change", (latest) => {
        setActiveIndex(Math.round(latest));
    });

    return (
        // O container pai define a "duração" do scroll. 200vh para 2 projetos é um bom começo.
        <div ref={containerRef} className="relative w-screen h-[100vh]">

            {/* Este container fica "preso" na tela enquanto o pai rola por baixo */}
            <div className="sticky top-0 h-screen w-screen overflow-hidden">
                {projetos.map((projeto, index) => (
                    <motion.div
                        key={projeto.id}
                        className="absolute top-0 left-0 w-full h-full bg-cover bg-center bg-fixed"
                        initial={{ opacity: 0 }}
                        animate={{
                            opacity: index === activeIndex ? 1 : 0,
                            transition: { duration: 0.5 },
                        }}
                        style={{
                            backgroundImage: `url(${projeto.bg})`,
                            display: index === activeIndex ? 'flex' : 'none',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}
                    >
                        <div className="w-full h-full bg-black/70 flex items-center justify-center">
                            <div className="w-[90%] max-w-5xl flex flex-col md:flex-row items-center justify-between gap-12">

                                {/* Seção Esquerda */}
                                <div className="flex flex-col items-center md:items-start text-center md:text-left">
                                    <h2 className="text-5xl font-bold mb-5">{projeto.empresa}</h2>
                                    <a
                                        href={projeto.link}
                                        className="bg-[#eeddcc] text-gray-800 py-4 px-8 rounded-md text-lg font-bold transition-colors duration-300 hover:bg-[#e0cbb8]"
                                    >
                                        Visitar
                                    </a>
                                </div>

                                {/* Seção Direita */}
                                <div className="flex flex-col items-center md:items-end">
                                    <div className="bg-gray-900 p-4 rounded-xl mb-5">
                                        <img
                                            src={projeto.logo}
                                            alt={`Imagem do ${projeto.empresa}`}
                                            className="max-w-[300px] h-auto rounded-md"
                                        />
                                    </div>
                                    <p className="text-lg text-center md:text-right max-w-[400px]">
                                        {projeto.desc}
                                    </p>
                                </div>

                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );



    // return (
    //     <div ref={ref} className="w-full">
    //         {/* Conteúdo sticky (fica 100vh fixo) */}
    //         <div className="top-0 h-screen overflow-hidden">
    //             {/* Fundo visível apenas para 1 viewport */}
    //             <div className="absolute inset-0 -z-10">
    //                 <AnimatePresence initial={false} mode="wait">
    //                     <motion.img
    //                         key={projects[active].bg}
    //                         src={projects[active].bg}
    //                         alt=""
    //                         className="w-full h-screen object-cover"
    //                         initial={{ opacity: 0 }}
    //                         animate={{ opacity: 1 }}
    //                         exit={{ opacity: 0 }}
    //                         transition={{ duration: 0.6 }}
    //                     />
    //                 </AnimatePresence>
    //                 <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/70" />
    //             </div>

    //             {/* Conteúdo do projeto */}
    //             <AnimatePresence initial={false} mode="wait">
    //                 <motion.div
    //                     key={projects[active].id}
    //                     initial={{ opacity: 0, y: 40 }}
    //                     animate={{ opacity: 1, y: 0 }}
    //                     exit={{ opacity: 0, y: -40 }}
    //                     transition={{ duration: 0.5 }}
    //                     className="w-full h-full flex flex-col md:flex-row items-center justify-between gap-24 text-white px-12"
    //                 >
    //                     {/* Lado esquerdo */}
    //                     <div className="w-full md:w-1/2 flex flex-col gap-8">
    //                         <h2 className="text-5xl font-bold works-title text-left">
    //                             {projects[active].empresa}
    //                         </h2>
    //                         <a
    //                             href={projects[active].link}
    //                             className="bg-[#F5EBDA] text-[#1F1D1D] py-4 px-8 rounded-2xl font-semibold text-lg w-fit"
    //                         >
    //                             Visitar
    //                         </a>
    //                     </div>

    //                     {/* Lado direito */}
    //                     <div className="w-full md:w-1/2 flex flex-col items-center gap-6">
    //                         <div className="w-full max-w-lg works-shadow rounded-3xl overflow-hidden">
    //                             <img
    //                                 src={projects[active].logo}
    //                                 alt={projects[active].empresa}
    //                                 className="w-full h-auto object-contain rounded-3xl"
    //                             />
    //                         </div>
    //                         <p className="text-center works-font text-white text-lg max-w-xl">
    //                             {projects[active].desc}
    //                         </p>
    //                     </div>
    //                 </motion.div>
    //             </AnimatePresence>
    //         </div>
    //     </div>
    // );
    //   return (
    //     <div ref={ref} className="">
    //         {projects.map((item) => {
    //             return(
    //                 <div className={`bg-[url("${item.bg}")] bg-center bg-no-repeat bg-size-[99.95%] pb-20 flex items-center justify-center`}>
    //                 </div>

    //             )
    //         })}


    //     </div>
    //   );
}


export default Works
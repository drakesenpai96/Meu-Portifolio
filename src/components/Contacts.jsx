import React from 'react';
import { motion } from 'framer-motion';

const contentVariants = {
  // AQUI ESTÁ A MUDANÇA: y: -50 faz o elemento começar 50px ACIMA de sua posição final.
  hidden: { opacity: 0, y: -50 },
  visible: {
    opacity: 1,
    y: 0, // A animação termina na posição original (y: 0)
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

 const drawAndFillVariants = {
    hidden: { 
      pathLength: 0, 
      opacity: 0,
      fill: "transparent" // Começa sem preenchimento
    },
    visible: {
      pathLength: 1, // Desenha o path
      opacity: 1,
      // fill: "white", // Cor de preenchimento azul (ou a cor do LinkedIn)
      transition: {
        pathLength: { 
          type: "spring", 
          duration: 1.5, // Duração do desenho
          bounce: 0 
        },
        fill: { // Animação do preenchimento
          delay: 1.5, // Começa o preenchimento 1.5s depois do início do desenho
          duration: 0.6 // Duração do preenchimento
        },
        opacity: { duration: 0.01 }
      }
    }
  };


function Contacts() {

  const svgLinkedinPath = "M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z";
  const svgGooglePath = "M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z";
  const svgGithubPath = "M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z";




  return (
    <section className="relative min-h-screen flex flex-col bg-white">
      <div className="sticky top-0 h-screen w-full flex justify-center items-center 
                      text-[15vw] font-extrabold uppercase leading-none text-white 
                      [text-shadow:none] [-webkit-text-stroke:2px_black] z-0">
        Contact
      </div>

      <div className="relative w-4/5 max-w-9xl mx-auto py-[10vh] z-10">
        <motion.div
          className="min-h-[80vh] flex flex-col justify-center gap-5 items-center bg-neutral-800 text-center text-black rounded-2xl"
          variants={contentVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.8 }}
        >
          <div className='flex flex-col items-center bg-gray-900 works-shadow overflow-hidden rounded-[100%]'>
            <img src='/extras/foto.png' className='w-[300px] rounded-[100%] relative left-2.5 top-2.5'></img>
          </div>
          <h2 className="text-5xl font-bold mb-4 contacts-font">Isaac Bittencourt Silva</h2>
          <div className='flex items-center justify-center gap-9'>


            <motion.button 
              className='flex flex-col items-center gap-5 p-5 contacts-font-cont border-l-[1px] border-l-gray-400 pl-10'
              initial="hidden"
              whileHover="visible"
            >
              <motion.svg
                width="40"
                height="40"
                viewBox="0 0 448 448" // viewBox é importante para o SVG escalar corretamente
                xmlns="http://www.w3.org/2000/svg"
                className="overflow-visible" // Garante que o stroke não seja cortado
              >
                <motion.path
                  d={svgGooglePath}
                  variants={drawAndFillVariants}
                  className="stroke-white" // Cor azul definida com Tailwind
                  strokeWidth="12" // Espessura da linha
                  fill="none" // Essencial para o efeito de desenho
                  />
              </motion.svg>
              {/* <span>Email</span> */}
              <span>isaac.contato96@gmail.com</span>
            </motion.button>

            <motion.button
              className='flex flex-col items-center gap-5 p-5 contacts-font-cont '
              initial="hidden"
              whileHover="visible"
              >
              <motion.svg
                width="40"
                height="40"
                viewBox="0 0 448 448" // viewBox é importante para o SVG escalar corretamente
                xmlns="http://www.w3.org/2000/svg"
                className="overflow-visible" // Garante que o stroke não seja cortado
              >
                <motion.path
                  d={svgLinkedinPath}
                  variants={drawAndFillVariants}
                  className="stroke-white" // Cor azul definida com Tailwind
                  strokeWidth="12" // Espessura da linha
                  fill="none" // Essencial para o efeito de desenho
                  />
              </motion.svg>

              {/* <span>Linkedin</span> */}
              <span>isaac-bittencourt-silva-350b92218</span>
            </motion.button>

            <motion.button 
              className='flex flex-col items-center gap-5 p-5 contacts-font-cont border-r-[1px] border-r-gray-400 pr-10'
              initial="hidden"
              whileHover="visible"
            >
              <motion.svg
                width="40"
                height="40"
                viewBox="0 0 448 448" // viewBox é importante para o SVG escalar corretamente
                xmlns="http://www.w3.org/2000/svg"
                className="overflow-visible" // Garante que o stroke não seja cortado
              >
                <motion.path
                  d={svgGithubPath}
                  variants={drawAndFillVariants}
                  className="stroke-white" // Cor azul definida com Tailwind
                  strokeWidth="12" // Espessura da linha
                  fill="none" // Essencial para o efeito de desenho
                  />
              </motion.svg>
              {/* <span>GitHub</span> */}
              <span>@drakesenpai96</span>
            </motion.button>


          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contacts;
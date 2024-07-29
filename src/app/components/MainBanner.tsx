import rectangle from '../../../public/rectangle.png';
import chatbotimg from '../../../public/chatbot-home.png';
import wave from '../../../public/wave.png';
import Image from 'next/image';

export default function MainBanner() {
    return (
        <section className="relative w-full h-auto bg-no-repeat bg-center bg-cover grid grid-cols-2 gap-8 p-[60px]" style={{ backgroundImage: `url(${rectangle.src})` }}>
            <div className="flex flex-col gap-4 items-center text-center relative z-40">
                <h2 className='text-white mb-[29px] w-full h-auto'>Sacá tu préstamo</h2>
                <div className="bg-white rounded-[15px] px-[120px] py-6 w-full">
                    <h2 className='text-lightblue-primary text-[80px] text-center font-bold'>Hasta $1.000.000</h2>
                </div>
                <div className='flex items-center gap-[31px] mt-[22px] w-full'>
                    <div className='bg-white flex flex-col items-center justify-center rounded-[15px] w-1/3 h-[220px]'></div>
                    <div className='bg-white flex flex-col items-center justify-center rounded-[15px] w-1/3 h-[220px]'></div>
                    <div className='bg-white flex flex-col items-center justify-center rounded-[15px] w-1/3 h-[220px]'></div>
                </div>
            </div>
            <div className="flex items-end justify-center relative z-40">
                <Image src={chatbotimg} alt="chat" />
            </div>
            <p className='text-white text-[20px] w-full relative z-40'>*Para acceder al préstamo deberás contar con recibo de haberes (sueldo/jubilación/prensión)</p>
            <div className="absolute bottom-0 w-full z-20">
                <Image src={wave} alt="wave" layout="responsive" />
            </div>
        </section>
    );
}

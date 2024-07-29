import Navbar from "./Navbar";

export default function Header() {
    return (
        <header className="w-full flex items-center justify-between py-6 px-[60px]">
            <div>
               <img src="./logo.png" alt="argenpesos" /> 
            </div>
            <Navbar/>
        </header>
    )
}
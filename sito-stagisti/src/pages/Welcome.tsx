import { FC } from 'react';
import { Link } from 'react-router-dom';

const Home: FC = () => {

const url = "/Stagisti/"

//Creo variabili che semplificano la modifica
const link = 'bg-gray-100 p-4 rounded-lg border border-gray-300 sm:w-1/3 w-full shadow'
const img = "object-cover aspect-square rounded-lg"
const p = "text-3xl font-bold font-seriff text-center"

    return (
        <div className="bg-gray-100 p-4 rounded border border-gray-300 max-w-7xl grid place-items-center m-4">
            <h1 className='font-bold font-mono text-8xl'>
                BENVENUTO
            </h1>
            <a href="https://jimmypc.it/" target="_blank"><img src={url + "jimmyPc.jpg"}/></a>
            <p className='my-4 text-gray-800 font-serif text-xl'>
                Benvenuto nel laboratorio di Jimmy Computers, se stai vedendo questo sito è perchè hai appena iniziato il tuo stage e ti
                serve una base di conoscenza per partire.
            </p>
            <p className='my-4 text-gray-800 font-serif text-xl'>
                Ecco qui riportate diverse guide che ti possono essere utili
            </p>

            <div className="flex flex-wrap flex-col sm:flex-row justify-evenly">
                <Link to={url + "windows"} className={link}>
                    <p className={p}>WINDOWS</p>
                    <img className={img} src={url + "/usb-stick.jpeg"}/>
                </Link>
                <Link to={url + "setup"} className={link}>
                    <p className={p} >SETUP</p>
                    <img className={img} src={url + "/first-desktop.png"}/>
                </Link>
                <Link to={url + "errori"} className={link}>
                    <p className={p}>ERRORI</p>
                    <img className={img} src={url + "/hold-power-button.jpeg"}/>
                </Link>
                <Link to={url + "hardware"} className={link}>
                    <p className={p}>HARDWARE</p>
                    <img className={img} src={url + "/gpu.jpg"}/>
                </Link>
                <Link to={url + "curiosita"} className={link}>
                    <p className={p}>CURIOSITA'</p>
                    <img className={img} src={url + "/brain.png"}/>
                </Link>
                <Link to={url + "altro"} className={link}>
                    <p className={p}>ALTRO</p>
                    <img className={img} src={url + "/other.png"}/>
                </Link>
            </div>
            
        </div>
    )
}

export default Home;
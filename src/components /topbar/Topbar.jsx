import './topbar.scss';
import { Person, Mail } from "@material-ui/icons";
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';


export default function Topbar({ menuOpen, setMenuOpen }) {
    return (
        <div className={'topbar ' + (menuOpen && 'active')}>

            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">Mani.</a>
                    <div className="itemContainer">
                        <Person className='icon' />
                        <span>7783610725</span>
                    </div>
                    <div className="itemContainer">
                        <Mail className='icon' />
                        <span>mani.tehrani.work@gmail.com</span>
                    </div>
                    <div className="itemContainer">
                        <CloudDownloadIcon className='icon' />
                        <span><a href="./assets/Mani-Meskartehrani-Resume.pdf" download > Resume</a></span>
                    </div>

                </div>

                <div className="right">
                    <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>

                        <span className='line1'></span>
                        <span className='line2'></span>
                        <span className='line3'></span>
                    </div>
                </div>


            </div>

        </div >
    )
}

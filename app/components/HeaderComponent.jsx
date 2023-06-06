import Image from "next/image"
import logo from '../../public/logo-image.svg'
import styles from '../components/HeaderComponent.module.scss'

export default function Header(){
    return (
        <header className={styles.header}>
            <div className="container">
                <Image src={logo} alt="Logo" width={65}/>
            </div>
        </header>
    )
}
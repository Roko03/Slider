import Image from "next/image"
import FutureIsHereImage from "../../public/future-is-here-image.svg"
import RainbowImage from "../../public/rainbow-image.png"
import SpiralImage from "../../public/spiral-image.svg"
import styles from '../components/HeroSection.module.scss'

export default function HeroSection(){
    return (
        <section className={styles.hero_section}>
            <div className={styles.hero_section__spiral_image}>
                <Image src={SpiralImage} alt="Spiral" />
            </div>
            <div className={styles.hero_section__container}>
                <h2>welcome to the future</h2>
                <h1>Tomorrow’s digest</h1>
                <p>Step into the future of news! Our website is a hub for trailblazers, innovators, and forward-thinkers who crave information that's fresh, dynamic, and thought-provoking. With exclusive stories, groundbreaking perspectives, and a sleek interface that matches our visionary approach, we deliver the most exciting and impactful news on the planet. Join us and experience the future of journalism today!</p>
            </div>
            <div className={styles.hero_section__rainbow_image}>
                <Image src={RainbowImage} alt="Rainbow" />
            </div>
            <div className={styles.hero_section__footer_image}>
                <Image src={FutureIsHereImage} alt="FutureIsHereImage" />
            </div>
        </section>
    )
}
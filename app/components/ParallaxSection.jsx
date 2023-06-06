"use client"
import { useState } from 'react'
import ArticleComponent from '../components/ArticleComponents.jsx'
import styles from '../components/ParallaxSection.module.scss'

export default function ParallaxSection({data}){

    const [slide,setSlide] = useState(1);

    return (
        <section className={styles.parallax_section}>
            <div className={styles.parallax_section__container}>
                <div className={styles.slider}>
                    <div className={styles.slider__circle_small}></div>
                    <div className={styles.slider__circle_big}>
                        <ul>
                            {
                                data.articles.map((data,index) => {
                                    return (
                                        <li className={slide == (index + 1) ? styles.active : ''} onClick={() => setSlide(index + 1)} key={index}>Section {index}</li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
                {
                    data.articles.map((data,index) => {
                        return (
                            <ArticleComponent
                                key={index}
                                id={index}
                                title={data.title} 
                                urlToImage={data.urlToImage} 
                                author={data.author} 
                                content={data.content}
                                isActive={slide == (index + 1) ? true : false}
                            />
                        )
                    })
                }
            </div>
        </section>
    )
}
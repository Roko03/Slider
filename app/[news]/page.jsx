import Image from "next/image";
import getArticle from "../../lib/getArticle";
import styles from '../[news]/SinglePage.module.scss'

export default async function NewsDetails({params}){
    const {news} = params;
    const data = await getArticle(news)

    return (
        <main>
            {
                data.articles.map((data,index)=>{
                    return (
                        <div className={styles.container} key={index}>
                            <div className={styles.article}>
                                <div className={styles.article__image}>
                                    <Image src={data.urlToImage} alt="Image" width={300} height={300}/>
                                </div>
                                <div className={styles.article__info}>
                                    <h3>{data.title}</h3>
                                    <h4>{data.author}</h4>
                                    <p>{data.content}</p>
                                </div>  
                            </div>
                        </div>
                    )
                })
            }
        </main>
    )
}
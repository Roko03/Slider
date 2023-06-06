import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from 'next/image'
import Link from 'next/link'
import {
  faChevronRight
} from "@fortawesome/free-solid-svg-icons";
import styles from '../components/ArticleComponents.module.scss'

export default function ArticleComponent({ id,title, urlToImage, author, content, isActive }){
    return (
        <div className={isActive ? [styles.article,styles.active].join(' ') : styles.article}>
            <div className={styles.article__info}>
                <h3>{title}</h3>
                <div className={styles.article_info_image}>
                    <Image src={urlToImage} alt="Image" width={500} height={300}/>
                </div>
            </div>
            <div className={styles.article__author}>
                <h4>{author}</h4>
                <p>{content}</p>
                <Link className={styles.article_see_more} href={`/${title}`}>
                    <div className={styles.article_see_more__circle}>
                        <FontAwesomeIcon
                            icon={faChevronRight}
                        />
                    </div>
                    <div>SEE MORE</div>
                </Link>
            </div>
        </div>
    )
}
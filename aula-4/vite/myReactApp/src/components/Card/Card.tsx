import styles from './Card.module.css'

interface Card {
    title: string
    imgUrl: string
    text: string
    ctaText: string
}


function ShowAlert() {
    window.alert("Button Clicked!")
}

const Card = (props: Card) => {
    return (
        <div className={styles.card}>
            <h1 className={styles.cardTitle}>{props.title}</h1>
            <img className={styles.cardImage} src={props.imgUrl} alt="card-image" />
            <p className={styles.cardText}>{props.text}</p>
            <button onClick={() => ShowAlert()} className={styles.cardCtaButton}>{props.ctaText}</button>
        </div>
    )
}

export default Card
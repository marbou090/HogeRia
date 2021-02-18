import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'

export default function CustomButton(props) {
    return (
        <div className={styles.container}>
            <a class={utilStyles.button} href="#">Button</a>
        </div>
        

    )
}
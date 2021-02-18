import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'

export default function CustomInput(props) {
    return (
        <div className={styles.container}>
            <div class={utilStyles.cp_iptxt}>
                <label class={utilStyles.ef}>
                    <input type="text" placeholder=""/>
                </label>
            </div>
        </div>
        

    )
}
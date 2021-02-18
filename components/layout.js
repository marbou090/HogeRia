import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'

const sitename = 'HogeRia Generater '
export const siteTitle = 'Ria Generater'
export default function Layout({ children,home }) {
    return(
        <div className={styles.container}>
            <header className={styles.header}>
                {home ?(
                    <>
                        <h1 className={utilStyles.heading2Xl}>{sitename}</h1>
                    </>
                ):(
                    <>
                        <h2 className={utilStyles.headingLg}>
                            <Link href="/">
                                <a className={utilStyles.colorInherit}>{sitename}</a>
                            </Link>
                        </h2>
                    </>
                )}
            </header>
            <main>{children}</main>
            {!home && (
                <div className={styles.backToHome}>
                <Link href="/">
                    <a>← Back to home</a>
                </Link>
                </div>
            )}
        </div>
    )
}
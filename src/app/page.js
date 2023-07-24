
import Image from 'next/image'
import styles from './page.module.css'
import Button from 'components/Button/Button';
import Header from "../../components/Header/Header";
import HeaderLinks from "../../components/Header/HeaderLinks";

export default function Home() {
  return (
    <main className={styles.main}>
        <div>
            <Header
                brand="NextJS Material Kit"
                rightLinks={<HeaderLinks />}
                fixed
                color="transparent"
                changeColorOnScroll={{
                    height: 400,
                    color: "white"
                }}


            />
        </div>
        <div className={styles.container}>
            <div className={styles.instant_container}>
                <div className={styles.instant}>
                    <Button variant="contained" className={styles.buttonSound}>SoundName</Button>
                    <Button variant="contained" className={styles.dowload}>DownLoad</Button>
                </div>
                <div className={styles.instant}>
                    <Button variant="contained" className={styles.buttonSound}>SoundName</Button>
                    <Button variant="contained" className={styles.dowload}>DownLoad</Button>

                </div>

            </div>
        </div>

    </main>
  )
}

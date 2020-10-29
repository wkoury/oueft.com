import styles from "../styles/Home.module.css";
import NAQT_LINK from "../services/NAQT";

export default function Stats(){
    return(
        <div className={styles.container}>
            <main>
                <p>Redirecting...</p>
            </main>
        </div>
    );
}

Stats.getInitialProps = async({ res }) => {
    if(res){
        res.writeHead(301, {
            Location: NAQT_LINK
        });
        res.end();
    }

    return {};
}
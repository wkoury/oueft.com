import { useEffect } from "react";
import { useRouter } from "next/router";
import styles from "../styles/Home.module.css";
import NAQT_LINK from "../services/NAQT";

export default function Stats(){
    const router = useRouter();
    
    useEffect(() => {
        router.push(NAQT_LINK);
    });

    return(
        <div className={styles.container}>
            <main>
                <p>Redirecting...</p>
            </main>
        </div>
    );
}

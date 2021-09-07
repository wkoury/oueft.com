import { useEffect } from "react";
import { useRouter } from "next/router";
import styles from "../styles/Home.module.css";

const SIGNUP_LINK = "https://docs.google.com/forms/d/e/1FAIpQLSeLuXKYQcQV0L2cNwgwdwRql0aCPiHZn6vMVZh5PcASMF8FEw/viewform";

export default function Volunteer() {
    const router = useRouter();
    
    useEffect(() => {
        router.push(SIGNUP_LINK);
    });

    return(
        <div className={styles.container}>
            <main>
                <p>Redirecting...</p>
            </main>
        </div>
    );
}

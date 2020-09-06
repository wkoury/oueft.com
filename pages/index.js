import Head from "next/head";
import React, { useState } from "react";
import Popover, { ArrowContainer } from "react-tiny-popover";
import styles from "../styles/Home.module.css";

export default function Home() {

  const [isPopoverOpen, setIsPopoverOpen] = useState(false);

  return (
    <div className={styles.container}>
      <Head>
        <title>Oklahama Early Fall Tournament</title>
      </Head>
      <main>
        <p>The <a href="https://ouquizbowl.org">Oklahoma Academic Team</a></p>
        <p>is hosting</p>
        <span>an <Popover 
          isOpen={isPopoverOpen} 
          position={"bottom"} 
          padding={10} 
          content={({ position, targetRect, popoverRect }) => (
            <ArrowContainer
              position={position}
              targetRect={targetRect}
              popoverRect={popoverRect}
              arrowColor={'lightgray'}
              arrowSize={10}
              arrowStyle={{ opacity: 1 }}
            >
              <div className="popup">
                Hi! I'm popover content..
              </div>
            </ArrowContainer>
              )}
            >
            <u onMouseEnter={() => setIsPopoverOpen(true)} onMouseLeave={() => setIsPopoverOpen(false)}>online NAQT tournament</u>
          </Popover>
        </span>
        <p>on October 24!</p>
      </main>        
    </div>
  );
}

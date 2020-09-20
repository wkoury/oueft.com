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
        <p>The <a href="https://ouquizbowl.org" rel="noopener noreferrer" target="_blank">Oklahoma Academic Team</a></p>
        <p>is hosting</p>
        <span>an <Popover
          isOpen={isPopoverOpen}
          position={"bottom"}
          padding={10}
          transitionDuration={0.}
          content={({ position, targetRect, popoverRect }) => (
            <ArrowContainer
              position={position}
              targetRect={targetRect}
              popoverRect={popoverRect}
              arrowColor={'lightgray'}
              arrowSize={5}
              arrowStyle={{ opacity: 1 }}
            >
              <div className="popup">
                The field is currently capped at 12 teams + a waitlist, but may expand. Top finishers will qualify for NAQT's Spring 2021 national championships!
              </div>
            </ArrowContainer>
              )}
            >
            <a onMouseEnter={() => setIsPopoverOpen(true)} onMouseLeave={() => setIsPopoverOpen(false)} href="https://www.notion.so/Oklahoma-Early-Fall-Tournament-2020-d3e32cef3be74fa99dd45914002474a3" rel="noopener noreferrer" target="_blank">online NAQT tournament</a>
          </Popover>
        </span>
        <p>on <a href="https://www.naqt.com/registration/field.jsp?tournament_id=11791" rel="noopener noreferrer" target="_blank">October 24</a>!</p>
      </main>
    </div>
  );
}

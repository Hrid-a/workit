import React from "react";
import { currentUser } from "@clerk/nextjs/server";
import Decoration from "@/components/Decoration";

import styles from "./Dashboard.module.css";

const Dashboard = async () => {
  const user = await currentUser();
  if (!user) return null;
  return (
    <>
      <div className={styles.wrapper}>
        <h1 className={styles.heading}>welcome {user.firstName}</h1>
        <p className={styles.description}>
          Believe in yourself, because you are capable of extraordinary things.
          The future is yours to create, and the journey you&apos;re on now is
          just the beginning of something amazing.
        </p>
      </div>
      <Decoration bgColor="var(--color-white)" />
    </>
  );
};

export default Dashboard;

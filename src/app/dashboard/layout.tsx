"use client";
import { usePathname } from "next/navigation";
import React from "react";

const Dashboard = ({
  children,
  pdfs,
  quizzes,
}: {
  children: React.ReactNode;
  pdfs: React.ReactNode;
  quizzes: React.ReactNode;
}) => {
  const pathname = usePathname();
  return (
    <div className="dashboard__wrraper">
      <main>
        {pathname === "/dashboard" ? (
          <>
            {children}
            <div className="content">
              {pdfs}
              {quizzes}
            </div>
          </>
        ) : (
          <>{children}</>
        )}
      </main>
    </div>
  );
};

export default Dashboard;

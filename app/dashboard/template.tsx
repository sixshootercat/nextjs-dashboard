"use client";
import { useEffect } from "react";

export default function DashboardTemplate({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    console.log("Dashboard Template rerendering");
  });

  return <>{children}</>;
}

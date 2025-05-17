"use client";

import dynamic from "next/dynamic";

const AdminDashboard = dynamic(() => import("../_components/dashboard"), {
  ssr: false,
});

export default AdminDashboard;

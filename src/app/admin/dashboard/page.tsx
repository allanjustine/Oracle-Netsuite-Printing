"use client";

import dynamic from "next/dynamic";

const AdminDashboard = dynamic(() => import("../_components/Dashboard"), {
  ssr: false,
});

export default AdminDashboard;

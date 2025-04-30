import api from "@/lib/axiosCall";
import { useEffect, useState } from "react";

export const useFetchMaintenanceTime = (isLoadingData: any) => {
  const [maintenanceTime, setMaintenanceTime] = useState(null);
  const [maintenanceType, setMaintenanceType] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchMaintenanceData = async () => {
      try {
        const response = await api.get("/maintenance-mode");

        if (!response.data?.maintenance_logs) return null;
        setMaintenanceTime(response.data?.maintenance_logs?.maintenance_time);
        setMaintenanceType(response.data?.maintenance_logs?.maintenance_type);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMaintenanceData();
  }, [isLoadingData]);

  return {
    maintenanceTime,
    maintenanceType,
    isLoading,
  };
};

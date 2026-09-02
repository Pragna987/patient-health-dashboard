import React, { createContext, useContext, useMemo, useState } from 'react';

const HealthContext = createContext(null);

export const HealthProvider = ({ children }) => {
  const [healthRecords, setHealthRecords] = useState([]);
  const [medications, setMedications] = useState([]);
  const [appointments, setAppointments] = useState([]);
  const [labResults, setLabResults] = useState([]);

  const value = useMemo(
    () => ({
      healthRecords,
      medications,
      appointments,
      labResults,
      setHealthRecords,
      setMedications,
      setAppointments,
      setLabResults
    }),
    [appointments, healthRecords, labResults, medications]
  );

  return <HealthContext.Provider value={value}>{children}</HealthContext.Provider>;
};

export const useHealth = () => useContext(HealthContext);

import React from 'react';
import CohortDetails from './components/CohortDetails';

function App() {
  const cohort1 = {
    name: 'React Bootcamp',
    status: 'ongoing',
    startDate: '2025-07-01'
  };

  const cohort2 = {
    name: 'Spring Boot Workshop',
    status: 'completed',
    startDate: '2025-05-15'
  };

  return (
    <div>
      <CohortDetails cohort={cohort1} />
      <CohortDetails cohort={cohort2} />
    </div>
  );
}

export default App;

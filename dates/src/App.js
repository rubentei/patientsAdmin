import React, { Fragment, useState, useEffect } from 'react';
import Form from './components/Form';
import PetDate from './components/PetDate';

function App() {

  // Dates in local storage
  let datesAtStart = JSON.parse(localStorage.getItem('dates'));

  if (!datesAtStart) {
    datesAtStart = [];
  }

  // Dates array
  const [dates, saveDates] = useState(datesAtStart);

  // Use Effect
  useEffect( () => {
    if (datesAtStart) {
      localStorage.setItem('dates', JSON.stringify(dates));
    } else {
      localStorage.setItem('dates', JSON.stringify([]));
    }
  }, [dates, datesAtStart]);

  // Function -> read current dates and add new date
  const createDate = date => {
    saveDates([
      ...dates,
      date
    ]);
  }

  // Function -> remove date by Id
  const removeDate = id => {
    const newDates = dates.filter(date => date.id !== id);

    saveDates(newDates);
  }

  // Conditional message
  const title = dates.length === 0 ? 'No hay citas' : 'Administra tus citas';

  return (
    <Fragment>

      <h1>Administrador de pacientes</h1>

      <div className="container">
        <div className="row">
          <div className="one-half column">
              <Form 
               createDate={createDate}/>
          </div>
          <div className="one-half column">
              <h2>{title}</h2>
              {dates.map(date => (
                <PetDate
                  key={date.id}
                  date={date}
                  removeDate={removeDate}
                />
              ))}
          </div>
        </div>
      </div>

    </Fragment>
  );
}

export default App;

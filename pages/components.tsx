import React from 'react';
import { NextPage } from 'next';

import Button from 'components/common/Button';
import 'styles/base.scss';
import { getCalendar } from 'utils/calendar';
import Calendar from 'components/common/Calendar';


const ComponentsPage:NextPage = () => {

  console.log(getCalendar(2019,11));
  console.log(getCalendar(2019,12));
  console.log(getCalendar(2020,12));
  console.log(getCalendar(2020,11));

  return (
    <div>
      <h1>Components Page</h1> 
      <div>
        <h2>Button</h2>
        <Button>Button1</Button>
        <Button disabled>Button2</Button>
        <Button style={{padding: 8}}>Button3</Button>
        <Button className="MyButton">Button4</Button>
        <Button onClick={()=>{alert('GGG')}} className="MyButton">Button4</Button>
      </div>
      <div>
        <h2>Calendar</h2>
        <Calendar year={2020} month={5} dates={getCalendar(2020,5)} />
        <Calendar year={2020} month={4} dates={getCalendar(2020,4)} />

      </div>
    </div>
  )
};


export default ComponentsPage;
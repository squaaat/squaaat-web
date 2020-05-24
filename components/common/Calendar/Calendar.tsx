import React from 'react';
import './Calendar.scss';

interface CalendarProps{
  [key: string]: any;
}

const Calendar:React.FC<CalendarProps> = (props) => {


  return(
    <div className="Calendar">
      <div>
         {props.year} {props.month}
      </div>
      {
        props.dates.map((row:any,index:number)=>{
          return (
            <div key={index}>
              {row.date.map((item:any,jndex:number)=> {
                return <span key={jndex} style={{margin: 4}}>{item}</span>
              })}
            </div>
          )
        })
      }
    </div>
  )
}
export default Calendar;
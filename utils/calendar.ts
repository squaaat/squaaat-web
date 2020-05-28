import moment from 'moment-timezone';

export const getCalendar = (year:number, month:number) => {
  const startWeek = moment(`${year}-${month}`).startOf('month').week();
  const endWeek = moment(`${year}-${month}`).endOf('month').week() === 1 ? 53 : moment(`${year}-${month}`).endOf('month').week();
  
  console.log(`${year}-${month}`)
  console.log(startWeek, endWeek);
  
  let calendar = []
  for(var week = startWeek; week<=endWeek;week++){
    calendar.push({
      week:week,
      date: Array(7).fill(0).map((n, i) => moment(`${year}-${month}`).week(week).startOf('week').clone().add(n + i, 'day').format('DD')),
      days:Array(7).fill(0).map((n, i) => moment(`${year}-${month}`).week(week).startOf('week').clone().add(n + i, 'day'))
    })
  }
  return calendar;
}
import dayjs from "dayjs";

export default function generateDate(
    month = dayjs().month(),
    year = dayjs().year()
)
{
   
   const firstDayOfMonth = dayjs().year(year).month(month).startOf("month");
   const lastDayOfMonth = dayjs().year(year).month(month).endOf("month");
   const arrayOfDays = [];
   for(let i = 0;i<firstDayOfMonth.day();i++)
   {
      arrayOfDays.push({
         date: firstDayOfMonth.day(i),
        currentMonth: false
      });
   }

   for(let i = firstDayOfMonth.date();i<=lastDayOfMonth.date();i++)
   {
      arrayOfDays.push({
         date: firstDayOfMonth.date(i),
         currentMonth: true,
         today: firstDayOfMonth.date(i).toDate().toDateString() === 
         dayjs().toDate().toDateString()
      });
   }
   const remainingDays = 42 - arrayOfDays.length;
   for(let i = lastDayOfMonth.date()+1;i<=lastDayOfMonth.date()+remainingDays;i++)
   {
      arrayOfDays.push({
         date: lastDayOfMonth.date(i),
         currentMonth: false
      });
   }


   return arrayOfDays
}


export const months = [
   "January", "February", "March", "April", "May", "June",
   "July", "August", "September", "October", "November", "December"
 ];
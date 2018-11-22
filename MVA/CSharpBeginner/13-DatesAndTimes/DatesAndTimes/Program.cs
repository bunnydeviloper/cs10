using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DatesAndTimes
{
    class Program
    {
        static void Main(string[] args)
        {
            DateTime myValue = DateTime.Now;
            // Console.WriteLine(myValue.ToString());
            // Console.WriteLine(myValue.ToShortDateString());
            // Console.WriteLine(myValue.ToShortTimeString());
            // Console.WriteLine(myValue.ToLongDateString());
            // Console.WriteLine(myValue.ToLongTimeString());

            // Console.WriteLine(myValue.AddDays(3).ToLongDateStrng());
            // Console.WriteLine(myValue.AddHours(-1).ToLongTimeString()); // subtract 1 hour

            // Console.WriteLine(myValue.Month);

            DateTime myBirthday = new DateTime(1992, 7, 22);
            Console.WriteLine(myBirthday.ToShortDateString());

            DateTime myBirthday1 = DateTime.Parse("7/22/1992");
            Console.WriteLine(myBirthday1.ToShortDateString());

            TimeSpan myAge = DateTime.Now.Subtract(myBirthday);
            Console.WriteLine(myAge.TotalDays);

            Console.ReadLine();
        }
    }
}

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace UnderstandingLINQ
{
    class Program
    {
        static void Main(string[] args)
        {
            List<Car> myCars = new List<Car>()
            {
                new Car() { VIN="A1", Make="BMW", Model="abc", StickerPrice=55000, Year=2010 },
                new Car() { VIN="B1", Make="Toyota", Model="def", StickerPrice=45000, Year=2011 },
                new Car() { VIN="C1", Make="BMW", Model="ghi", StickerPrice=65000, Year=2010 },
                new Car() { VIN="D1", Make="Nissan", Model="jkl", StickerPrice=35000, Year=2018 },
                new Car() { VIN="E1", Make="BMW", Model="mno", StickerPrice=75000, Year=2019 }


            };

            // LINQ query syntax:
            /*
            var bmws = from car in myCars
                       where car.Make == "BMW"
                       && car.Year == 2010
                       select car;
                       */

            /*
            var orderedCars = from car in myCars
                              orderby car.Year descending
                              select car;
                              */

            // LINQ method syntax:
            var bmws = myCars.Where(e => e.Make == "BMW" && e.Year == 2010);
            // the inner "callback function" is called lambda expression

            var orderedCars = myCars.OrderByDescending(e => e.Year);

            // test for both syntaxes:
            /*
            foreach (var car in bmws)
            {
                Console.WriteLine("LINQ query syntax result: {0} {1} {2} {3}", car.Model, car.VIN, car.Year, car.Make);
            }
            */

            /*
            foreach (var car in orderedCars)
            {
                Console.WriteLine("LINQ query syntax result: {0} {1} {2} {3}", car.Model, car.VIN, car.Year, car.Make);
            }
            */

            // method chaining
            var myFirst = myCars.OrderByDescending(e => e.Year).First(e => e.Make == "BMW");
            Console.WriteLine(myFirst.VIN);

            Console.WriteLine(myCars.TrueForAll(e => e.Year > 2009)); // return True

            myCars.ForEach(e => e.StickerPrice -= 2300);
            myCars.ForEach(e => Console.WriteLine("{0} {1:C}", e.VIN, e.StickerPrice));

            Console.WriteLine(myCars.Exists(e => e.Make == "Lamboghini")); // return False

            Console.WriteLine("Dealer total value: {0:C}\n", myCars.Sum(e => e.StickerPrice));

            Console.WriteLine(myCars.GetType()); // Generic List
            Console.WriteLine(orderedCars.GetType()); // Ordered Enumerable
            Console.WriteLine(bmws.GetType()); // Enumerable Where List Iterator
            // the "var" keyword helps us not worry able the data type

            // also: with "var" keyword, we can define data type at run-time, create anonymous data type with some attributes
            var newCars = from car in myCars
                          where car.Make == "BMW"
                          && car.Year == 2010
                          select new { car.Make, car.Model };
            Console.WriteLine(newCars.GetType()); // anonymous data type


            Console.ReadLine();
        }
    }

    class Car
    {
        public string VIN { get; set; }
        public string Make { get; set; }
        public string Model { get; set; }
        public int Year { get; set; }
        public double StickerPrice { get; set; }
    }
}

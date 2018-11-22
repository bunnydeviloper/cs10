using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ObjectLifetime
{
    class Program
    {
        // static keyword: you dont need to create an intance of the class in order to utilize its method and properties
        static void Main(string[] args)
        {
            Car myCar = new Car();
            /*
            myCar.Make = "Honda";
            myCar.Model = "Civic";
            myCar.Year = 2008;
            myCar.Color = "Red";
            */

            Car myOtherCar;
            myOtherCar = myCar;

            Console.WriteLine("{0} {1} {2} {3}",
                myOtherCar.Make,
                myOtherCar.Model,
                myOtherCar.Year,
                myOtherCar.Color);

            myOtherCar.Model = "Clarity";

            Console.WriteLine("{0} {1} {2} {3}",
                myCar.Make, myCar.Model, myCar.Year, myCar.Color);

            // when you set references to null or move out of scope, the .NET framework will do its garbage collection
            // myOtherCar = null;
            // myCar = null;

            Car myThirdCar = new Car("Bettle", "Princess", 2010, "Yellow");

            // notice: since MyMethod is a static method in Car class, you don't need to create an intance to call it
            Car.MyMethod();
            // make sure to check if you're working with 'static members' or 'instance members' of the class

            Console.ReadLine();
        }
    }

    class Car
    {
        public string Make { get; set; }
        public string Model { get; set; }
        public int Year { get; set; }
        public string Color { get; set; }

        // constructor: to put any intances of an object into a balanced (valid) state
        public Car()
        {
            // You could load from a config file, a database, etc...
            Make = "Nissan"; // same as: this.Make = "Nissan";
        }

        // overloaded constructor: same-named constructors with different input type, input params
        public Car(string make, string model, int year, string color)
        {
            Make = make;
            Model = model;
            Year = year;
            Color = color;
        }

        public static void MyMethod()
        {
            Console.WriteLine("Called the static MyMethod");
            // Console.WriteLine(Make); // can't use because static members don't keep track of state of the class
        }
    }
}

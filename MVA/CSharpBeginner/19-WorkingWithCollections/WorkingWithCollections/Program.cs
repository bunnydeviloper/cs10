using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace WorkingWithCollections
    // collections are arrays on steroids =)
    // most useful collection is list in dictionary
{
    class Program
    {
        static void Main(string[] args)
        {
            Car car1 = new Car();
            car1.Make = "Honda";
            car1.Model = "Civic";
            car1.VIN = "B123K12";

            Car car2 = new Car();
            car2.Make = "Nissan";
            car2.Model = "Zee";
            car2.VIN = "C123T12";

            Book book1 = new Book();
            book1.Title = "Me Before You";
            book1.Author = "Jojo Moyes";
            book1.ISBN = "00-0000-00000";

            // two types of collections: list && dictionary
            // list: (old way) ArrayList, which is dynamically sized, has cool features such as sorting and removing...
            // but with ArrayList, there's no way to limit the type of data that would be stored inside the array
            /*
            ArrayList myArrayList = new ArrayList();
            myArrayList.Add(car1);
            myArrayList.Add(car2);
            myArrayList.Add(book1); // cons of ArrayList: at this point, foreach will give error
            myArrayList.Remove(book1); // so it's best to remove the book item

            foreach (Car car in myArrayList)
            {
                Console.WriteLine(car.Make);
            }
            // conclusion: downside outweights the benefit, can't work with strongly typed language
            */

            // list: (new way) introducing generic: List<T> (T stands for data type)
            // pros: requires you to specify the type of data that should be allow inside of that collection
            List<Car> myList = new List<Car>();
            myList.Add(car1);
            myList.Add(car2);
            // myList.Add(book1); // this will send you an exception(error) right away
            // this list is specific to Car data type, and only allow that data type into our collection
            // now you can write the for loop with confidence
            foreach (Car car in myList)
            {
                Console.WriteLine(car.Model);
            }

            // type of collection: Dictionary<TKey, TValue>
            Dictionary<string, Car> myDictionary = new Dictionary<string, Car>();
            myDictionary.Add(car1.VIN, car1);
            myDictionary.Add(car2.VIN, car2);

            Console.WriteLine("Find make of car using VIN number: " + myDictionary["B123K12"].Make);

            // list/array initializer:
            string[] names = { "Bob", "Scott", "Brian", "Sophia" };

            // object initializer: (note: no need constructor)
            Car car3 = new Car() { Make = "BMW", Model = "Series7", VIN = "C11111" };
            Car car4 = new Car() { Make = "Toyota", Model = "Prius", VIN = "D11111" };

            // collection initializer:
            List<Car> newList = new List<Car>()
            {
                new Car { Make = "Nissan", Model = "Altima", VIN = "E11111" }, // note: comma
                new Car { Make = "Lexus", Model = "Royale", VIN = "F11111" }
            };

            Console.ReadLine();
        }
    }

    class Car
    {
        public string Make { get; set; }
        public string Model { get; set; }
        public string VIN { get; set; }
    }

    class Book
    {
        public string Title { get; set; }
        public string Author { get; set; }
        public string ISBN { get; set; }
    }
}

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace UnderstandingScope
{
    class Program
    {
        private static string k = "";

        // private vs public
        // both are accessibility modifiers, used to implement OOP concept called encapsulation
        // think of public methods as interfaces, where you can see and use
        // think of private methods as behind-the-scene, you can't see
        // A private method can be called/used by any other members/methods inside the class, but not for outsiders
        static void Main(string[] args)
        {
            string j = "";

            for (int i = 0; i < 10; i++)
            {
                j = i.ToString();
                k = i.ToString();
                Console.WriteLine(i);
            }

            Console.WriteLine("J outside of the for loop: {0}", j);
            Console.WriteLine("K outside of the for loop: {0}", k);

            HelperMethod();

            Car myCar = new Car();
            myCar.DoSomething(); // note: you can use DoSomething(), but not helperMethod()
            // encapsulation: you want to hide the implementation of our classes

            Console.ReadLine();
        }

        static void HelperMethod()
        {
            Console.WriteLine("Value of k from HelperMethod(): {0}", k);
        }
    }

    class Car
    {
        public void DoSomething()
        {
            Console.WriteLine(helperMethod());
        }
        private string helperMethod()
        {
            return "Hello World from private helperMethod()";
        }
    }
}

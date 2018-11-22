using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Variables
{
    class Program
    {
        static void Main(string[] args)
        {
            /*
            int a;
            int b;

            a = 10;
            b = a + 2;
            Console.WriteLine(b);
            Console.ReadLine();
            */

            Console.WriteLine("What is your name?");
            Console.Write("Type your first name: ");
            // string myFirstName;
            // myFirstName = Console.ReadLine();
            string myFirstName = Console.ReadLine();

            Console.Write("Type your last name: ");
            string myLastName;
            myLastName = Console.ReadLine();

            Console.WriteLine("Hello, " + myFirstName + " " + myLastName);
            Console.ReadLine();
        }
    }
}

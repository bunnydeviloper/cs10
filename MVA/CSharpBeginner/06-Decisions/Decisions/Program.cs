using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Decisions
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Fortune give away!!!");
            Console.Write("Pick a number (1, 2, or 3): ");
            string userValue = Console.ReadLine();

            /*
            if (userValue == "1")
            {
                string message = "You won a new car!";
                Console.WriteLine(message);
            }
            else if (userValue == "2")
            {
                string message = "You won a boat!";
                Console.WriteLine(message);
            }
            else if (userValue == "3")
            {
                string message = "You won a computer";
                Console.WriteLine(message);
            }
            else
            {
                string message = "Sorry, invalid input";
                Console.WriteLine(message);
            }
            */

            // -----------------
            /*
            string message = "";

            if (userValue == "1")
                message = "You won a new car!";
            if (userValue == "2")
                message = "You won a boat!";
            if (userValue == "3")
                message = "You won a computer";
            else
            {
                message = "Sorry, we didn't understand. ";
                message += "You lose.";
            }
            Console.WriteLine(message);
            */

            // -----------------

            string message = (userValue == "1") ? "new car" : "new plastic cup";
            // Console.Write("You won a ");
            // Console.Write(message);
            // Console.Write(".");
            Console.WriteLine("You entered '{1}', therefore you won a {0}.", message, userValue); // use a replacement variable
            // note: Console.WriteLine will always put a new line at the end of the line

            Console.ReadLine();
        }
    }
}

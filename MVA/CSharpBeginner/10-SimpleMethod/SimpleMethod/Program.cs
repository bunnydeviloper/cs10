using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SimpleMethod
{
    class Program
    {
        static void Main(string[] args)
        {
            Introduction();
            string myString = CollectInfo();

            DisplayResult(myString); 

            Console.ReadLine();
        }

        private static void Introduction()
        {
            Console.WriteLine("The Name Game");
        }

        // private static void CollectInfo()
        private static string CollectInfo()
        {
            Console.Write("What is your first name? ");
            string firstName = Console.ReadLine();

            Console.Write("What is your last name? ");
            string lastName = Console.ReadLine();

            Console.Write("What city were you from? ");
            string city = Console.ReadLine();

            // return String.Concat(firstName, lastName, city);
            return String.Format("{0} {1} {2}", firstName, lastName, city);
        }

        // private static void ReverseString(string message)
        private static string ReverseString(string message)
        {
            char[] messageArray = message.ToCharArray();
            Array.Reverse(messageArray);
            /*
            foreach (var item in messageArray)
            {
                Console.Write(item);
            }
            Console.Write(" ");
            */

            return String.Concat(messageArray);
        }

        private static void DisplayResult(string reversedMessage)
        {
            Console.Write("Result: ");
            string reversedString = ReverseString(reversedMessage);
            Console.Write(reversedString);
        }

        // you can create another method DisplayResult that takes in three params instead of one
    }
}

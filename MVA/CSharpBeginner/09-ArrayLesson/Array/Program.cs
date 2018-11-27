using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ArrayLesson
{
    class Program
    {
        static void Main(string[] args)
        {
            /*
            int[] numbers = new int[5]; // create an array with 5 elements

            numbers[0] = 4;
            numbers[1] = 5;
            numbers[2] = 7;
            numbers[3] = 8;
            numbers[4] = 9;

            Console.WriteLine(numbers[0]);
            Console.WriteLine(numbers.Length);
            */

            int[] myNum = new int[] { 3, 4, 5, 6 };
            string[] myStr = new string[] { "hello", "hi", "hola" };

            Console.WriteLine(myNum.Length);

            /*
            for (int i = 0; i < myStr.Length; i++)
            {
                Console.WriteLine(myStr[i]);
            }
            */

            foreach (var greeting in myStr)
            {
                Console.WriteLine(greeting);
            }

            string zig = "You can get what you want out of life" + 
                " if you have enough other people get what they want.";
            char[] myArray = zig.ToCharArray();
            Array.Reverse(myArray);
            foreach (var zigChar in myArray)
            {
                Console.Write(zigChar);
            }



            Console.ReadLine();
        }
    }
}

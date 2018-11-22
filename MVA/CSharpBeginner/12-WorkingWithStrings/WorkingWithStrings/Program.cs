using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace WorkingWithStrings
{
    class Program
    {
        static void Main(string[] args)
        {
            // string myString = "Hello is the same as \"Hi\"";
            // string myString = "Why did the chicken crossed the street? \nI don't know"; // new line
            // string myString = "This is the path: C:\\Home\\Downloads\\YourName";
            // string myString = @"This is the path: C:\Home\Downloads\YourName";
            // string myString = String.Format("{1} = {0}", "First", "Second");

            // string myString = String.Format("{0:C}", 123.45); // currency
            // string myString = String.Format("{0:N}", 12312313); // number
            // string myString = String.Format("{0:P}", .45); // percentage

            // string myString = String.Format("Phone: {0: (###) ###-####}", 4081314134325); // custom format

            // using string built-in methods
            string myString = "    Your computer is only as smart as you are.    ";
            // myString = myString.Substring(6, 14);
            // myString = myString.ToUpper();
            // myString = myString.Replace(" ", "--");
            // myString = myString.Remove(6, 14);

            myString = String.Format("Length before: {0} -- Length after: {1}",
                myString.Length,
                myString.Trim().Length); // Trim() will remove whitespaces

            string myString1 = "";
            for (int i = 0; i < 100; i++)
            {
                myString1 += "--" + i.ToString();
            }

            // using StringBuilder to achieve the same result but more efficient
            StringBuilder myString2 = new StringBuilder();
            for (int i = 0; i < 50; i++)
            {
                myString2.Append("**");
                myString2.Append(i);
            }

            Console.WriteLine(myString);
            Console.WriteLine(myString1);
            Console.WriteLine(myString2);
            Console.ReadLine();
        }
    }
}

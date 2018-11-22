using System;
using System.IO;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Net;
// namespace are like lastName for your project
// System is a namespace

namespace AssembliesAndNameSpaces
{
    class Program
    {
        // when you want to create a library to be used in multiple projects
        // you create a file with .dll extension
        // note: current references refer to the .NET class framework library
        static void Main(string[] args)
        {
            /*
            string path = @"C:\Users\v-phmai\source\repos\AssembliesAndNameSpaces\AssembliesAndNameSpaces\sample.txt";
            string text = "We want to write this text to a file.";

            File.WriteAllText(path, text); 
            Console.WriteLine("Your text has been saved to a file.");
            */

            // scraping web page and save to file
            WebClient client = new WebClient();
            string reply = client.DownloadString("https://msdn.microsoft.com");

            string path = @"C:\Users\v-phmai\source\repos\AssembliesAndNameSpaces\AssembliesAndNameSpaces\sample.txt";
            File.WriteAllText(path, reply);
            Console.WriteLine(reply);

            Console.ReadLine();
        }
    }
}

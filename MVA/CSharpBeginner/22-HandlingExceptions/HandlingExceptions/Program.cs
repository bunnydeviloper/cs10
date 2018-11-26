using System;
using System.IO;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HandlingExceptions
{
    class Program
    {
        static void Main(string[] args)
        {
            // if your data relies on a files or a network resources, treat it with great caution
            // always code defensively, always prevent problems around you

            try
            {
                string content = File.ReadAllText(@"C:\Users\v-phmai\source\repos\HandlingExceptions\Ex\Example.txt");
                Console.WriteLine(content);
                Console.ReadLine();
            }
            // KEY note: check the most specific exception first, then check the general exception last
            catch (FileNotFoundException ex)
            {
                Console.WriteLine("Error: make sure the file name is correct.");
                Console.WriteLine(ex.Message);
            }
            catch (DirectoryNotFoundException ex)
            {
                Console.WriteLine("Error: make sure the directory path exists.");
                Console.WriteLine(ex.Message);
            }
            catch (Exception ex)
            {
                Console.WriteLine("There was a problem!");
                Console.WriteLine(ex.Message);
            }
            finally // this code will run regardless if try was success or not
            {
                // code to finalize
                // setting objects to null
                // closing database connections
                Console.WriteLine("\nClosing application now...");
            }

            Console.ReadLine();
        }
    }
}

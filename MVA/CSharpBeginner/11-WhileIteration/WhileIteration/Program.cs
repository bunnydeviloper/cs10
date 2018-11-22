using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace WhileIteration
{
    class Program
    {
        static void Main(string[] args)
        {
            bool displayMenu = true;
            while (displayMenu)
            {
                displayMenu = MainMenu();
            }
        }
        
        private static bool MainMenu()
        {
            Console.Clear();
            Console.WriteLine("Choose an option:");
            Console.WriteLine("1) Eat during lunch");
            Console.WriteLine("2) Run during lunch");
            Console.WriteLine("3) Print Number Game");
            Console.WriteLine("4) Guessing Game");
            Console.WriteLine("5) Just study. Exit game.");
            string result = Console.ReadLine();

            if (result == "1")
            {
                PrintLunch();
                return true;
            }
            else if (result == "2")
            {
                PrintRunningPath();
                return true;
            }
            else if (result == "3")
            {
                PrintNumbers();
                return true;
            }
            else if (result == "4")
            {
                GuessingGame();
                return true;
            }
            else if (result == "5")
            {
                return false; // to exit
            }
            else
            {
                // if user enter anything other than 1, 2, 3, ask to choose an option again
                return true;
            }

        }

        private static void PrintNumbers()
        {
            Console.Clear();
            Console.WriteLine("Print Number Game!");
            Console.Write("Type a number: ");
            int result = int.Parse(Console.ReadLine());
            int counter = 1;
            while (counter < result + 1)
            {
                Console.Write(counter);
                Console.Write("--");
                counter++;
            }
            Console.ReadLine();
        }

        private static void GuessingGame()
        {
            Console.Clear();
            Console.WriteLine("Welcome to Guessing Game!");

            Random myRandom = new Random();
            int randomNumber = myRandom.Next(1, 11);

            int guesses = 0; // initialize guess counter
            bool incorrect = true; // initialize guess validator

            do
            {
                Console.Write("Pick a number between 1 and 10: ");
                string result = Console.ReadLine();
                guesses++;
                if (result == randomNumber.ToString())
                    incorrect = false;
                else
                    Console.WriteLine("Wrong guess!");


            } while (incorrect);
            Console.WriteLine("Yay, you guessed correctly!");
            Console.WriteLine("It took you total of {0} guesses. ^_____^", guesses);
            Console.ReadLine();

        }

        private static void PrintLunch()
        {
            Console.WriteLine("Lunch menu is grilled chicken salad!");
            Console.ReadLine();
        }

        private static void PrintRunningPath()
        {
            Console.WriteLine("You will need to run 3 rounds around soccer field!");
            Console.ReadLine();
        }

    }
}

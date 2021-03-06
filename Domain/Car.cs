using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Domain
{
    public class Car
    {
        public Car()
        {
            Reservations = new List<Reservation>();
        }
        public int Id { get; set; }
        public string Model { get; set; }
        public string RegistrationNumber { get; set; }
        public int Price { get; set; }
        public int KilometersRun { get; set; }
        public string ProductionYear { get; set; }
        public List<Reservation> Reservations { get; set; }
    }
}


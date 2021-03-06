using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Domain
{
    public class Customer
    {
        public Customer()
        {
            Reservations = new List<Reservation>();
        }
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string email { get; set; }
        public string Password { get; set; }
        public List<Reservation> Reservations { get; set; }
    }
}

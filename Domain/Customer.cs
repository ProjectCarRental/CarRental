﻿using System;
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
        public string Phone { get; set; }
        public string UserName { get; set; }
        public string Password { get; set; }
        public byte[] Image { get; set; }
        public List<Reservation> Reservations { get; set; }
    }
}

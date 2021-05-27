using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Web.RequestsAndResponses
{
    public class AddCarRequest
    {
        public string Model { get; set; }
        public string RegistrationNumber { get; set; }
        public int Price { get; set; }
        public int KilometersRun { get; set; }
        public string ProductionYear { get; set; }
    }
}

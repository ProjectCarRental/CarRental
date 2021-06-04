using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Web.RequestsAndResponses
{
    public class AddReservationRequest
    {
        public DateTime Date { get; set; }
        public int Amount { get; set; }
        public DateTime TimeReturn { get; set; }
        public int CarId { get; set; }
        public int CustomerId { get; set; }
    }
}

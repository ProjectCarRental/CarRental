using System;


namespace Domain
{
    public class Reservation
    {
        public int Id { get; set; }
        public DateTime Date { get; set; }
        public int Amount { get; set; }
        public DateTime TimeReturn { get; set; }
        public Car Car { get; set; }
        public int CarId { get; set; }
        public Customer Customer { get; set; }
        public int CustomerId { get; set; }
    }
}

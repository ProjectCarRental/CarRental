using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Web.RequestsAndResponses
{
    public class CustomerResponse
    {
        
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string email { get; set; }
        public string Password { get; set; }
       
    }
}

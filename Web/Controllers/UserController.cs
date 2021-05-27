using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CarRental.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class UserController : ControllerBase
    {
        [HttpPost("signup")]
        public ActionResult Register(User user)
        {
            var newUser = new User {
            FirstName = user.FirstName,
            LastName = user.LastName,
            Email = user.Email,
            Password = user.Password
            };
            //TODO: skapa DBContext och database 
            //UserContext.Add(newUser);
            //UserContext.SaveChanges();

            return Ok(newUser);
        }
        [HttpPost("login")]
        public ActionResult Login(User user)
        {
            var newUser = new User
            {
                Email = user.Email,
                Password = user.Password
            };
            //TODO: skapa DBContext och database 
            //UserContext.Add(newUser);
            //UserContext.SaveChanges();

            return Ok(newUser);
        }

    }
}

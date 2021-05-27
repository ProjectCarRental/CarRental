using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Data;
using Domain;
using Web.RequestsAndResponses;

namespace Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CarsController : ControllerBase
    {
        private readonly CarRentalContext _context;

        public CarsController(CarRentalContext context)
        {
            _context = context;
        }

        // GET: api/Cars
        [HttpGet]
        public async Task<ActionResult<IEnumerable<CarResponse>>> GetCars()
        {
            var carsFromDatabase = await _context.Car.ToListAsync();
            var carResponses = carsFromDatabase.Select(car => 
            new CarResponse 
            {
                Id = car.Id,
                KilometersRun = car.KilometersRun,
                Model = car.Model,
                Price = car.Price,
                ProductionYear = car.ProductionYear,
                RegistrationNumber = car.RegistrationNumber
            });
            return Ok(carResponses);
        }

        // GET: api/Cars/5
        [HttpGet("{id}", Name = "GetCar")]
        public async Task<ActionResult<CarResponse>> GetCar(int id)
        {
            var car = await _context.Car.FindAsync(id);

            if (car == null)
            {
                return NotFound();
            }

            var carResponse = new CarResponse
            {
                Id = car.Id,
                KilometersRun = car.KilometersRun,
                Model = car.Model,
                Price = car.Price,
                ProductionYear = car.ProductionYear,
                RegistrationNumber = car.RegistrationNumber
            };

            return carResponse;
        }

        // PUT: api/Cars/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutCar(int id, Car car)
        {
            // should not be able to change id.
            // change to PutCarRequest
            if (id != car.Id)
            {
                return BadRequest();
            }

            //check if CarExists sooner.

            _context.Entry(car).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CarExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Cars
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<CarResponse>> PostCar(AddCarRequest request)
        {
            var car = new Car
            {
                KilometersRun = request.KilometersRun,
                Model = request.Model,
                Price = request.Price,
                ProductionYear = request.ProductionYear,
                RegistrationNumber = request.RegistrationNumber
            };
            _context.Car.Add(car);
            await _context.SaveChangesAsync();

            var carResponse = new CarResponse
            {
                Id = car.Id,
                KilometersRun = car.KilometersRun,
                Model = car.Model,
                Price = car.Price,
                ProductionYear = car.ProductionYear,
                RegistrationNumber = car.RegistrationNumber
            };

            return CreatedAtAction("GetCar", new { id = carResponse.Id }, carResponse);
        }

        // DELETE: api/Cars/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteCar(int id)
        {
            var car = await _context.Car.FindAsync(id);
            if (car == null)
            {
                return NotFound();
            }

            _context.Car.Remove(car);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool CarExists(int id)
        {
            return _context.Car.Any(e => e.Id == id);
        }
    }
}

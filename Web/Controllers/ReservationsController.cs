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
    public class ReservationsController : ControllerBase
    {
        private readonly CarRentalContext _context;

        public ReservationsController(CarRentalContext context)
        {
            _context = context;
        }

        // GET: api/Reservations
        [HttpGet]
        public async Task<ActionResult<IEnumerable<ReservationResponse>>> GetReservations()
        {
            var reservationsFromDatabase = await _context.Reservations.ToListAsync();
            var reservationResponses = reservationsFromDatabase.Select(reservation =>
            new ReservationResponse
            {
                Id = reservation.Id,
                Date = reservation.Date,
                Amount = reservation.Amount,
                TimeReturn = reservation.TimeReturn,
                CarId = reservation.CarId,
                CustomerId = reservation.CustomerId,
            });

            return Ok(reservationResponses);
        }

        // GET: api/Reservations/5
        [HttpGet("{id}")]
        public async Task<ActionResult<ReservationResponse>> GetReservation(int id)
        {
            var reservation = await _context.Reservations.FindAsync(id);

            if (reservation == null)
            {
                return NotFound();
            }

            var reservationResponse = new ReservationResponse
            {
                Id = reservation.Id,
                Date = reservation.Date,
                Amount = reservation.Amount,
                TimeReturn = reservation.TimeReturn,
                CarId = reservation.CarId,
                CustomerId = reservation.CustomerId,
            };

            return reservationResponse;
        }

        // PUT: api/Reservations/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutReservation(int id, Reservation reservation)
        {
            if (id != reservation.Id)
            {
                return BadRequest();
            }

            _context.Entry(reservation).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ReservationExists(id))
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

        // POST: api/Reservations
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<ReservationResponse>> PostReservation(AddReservationRequest request)
        {
            var reservation = new Reservation
            {
                Date = request.Date,
                Amount = request.Amount,
                TimeReturn = request.TimeReturn,
                CarId = request.CarId,
                CustomerId = request.CustomerId,
            };

            _context.Reservations.Add(reservation);
            await _context.SaveChangesAsync();

            var reservationResponse = new ReservationResponse
            {
                Id = reservation.Id,
                Date = reservation.Date,
                Amount = reservation.Amount,
                TimeReturn = reservation.TimeReturn,
                CarId = reservation.CarId,
                CustomerId = reservation.CustomerId,
            };

            return CreatedAtAction("GetReservation", new { id = reservationResponse.Id }, reservationResponse);
        }

        // DELETE: api/Reservations/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteReservation(int id)
        {
            var reservation = await _context.Reservations.FindAsync(id);
            if (reservation == null)
            {
                return NotFound();
            }

            _context.Reservations.Remove(reservation);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool ReservationExists(int id)
        {
            return _context.Reservations.Any(e => e.Id == id);
        }
    }
}

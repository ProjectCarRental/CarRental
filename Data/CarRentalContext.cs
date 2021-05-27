using Domain;
using Microsoft.EntityFrameworkCore;

namespace Data
{
    public class CarRentalContext : DbContext
    {
        public CarRentalContext(DbContextOptions<CarRentalContext> options) : base(options)
        {
        }
        public DbSet<Car> Car { get; set; }
        public DbSet<Customer> Customer { get; set; }
        public DbSet<Reservation> Reservations { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder
                .ApplyConfiguration(new CustomerConfiguration());
            modelBuilder
                .ApplyConfiguration(new CarConfiguration());
            modelBuilder
                .ApplyConfiguration(new ReservationConfiguration());

            base.OnModelCreating(modelBuilder);
        }
    }
}

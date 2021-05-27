using Domain;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Data
{
     public class CarConfiguration : IEntityTypeConfiguration<Car>
    {
        public void Configure(EntityTypeBuilder<Car> builder)
        {
            builder
                .HasKey(x => x.Id);

            builder
                .Property(x => x.Id)
                .UseIdentityColumn(1, 1);

            builder
                .Property(x => x.Model)
                .HasMaxLength(30);

            builder
                .HasMany(Car => Car.Reservations)
                .WithOne(reservation => reservation.Car)
                .HasForeignKey(reservation => reservation.CarId);
        }
    }
}

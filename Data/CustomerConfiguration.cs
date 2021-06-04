using Domain;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Data
{
    public class CustomerConfiguration : IEntityTypeConfiguration<Customer>
    {
        public void Configure(EntityTypeBuilder<Customer> builder)
        {
            builder
                .HasKey(x => x.Id);

            builder
                .Property(x => x.Id)
                .UseIdentityColumn(1, 1);

            builder
                .HasMany(cust => cust.Reservations)
                .WithOne(reservation => reservation.Customer)
                .HasForeignKey(reservation => reservation.CustomerId);
        }
    }
}

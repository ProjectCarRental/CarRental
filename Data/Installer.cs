using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace Data
{
    public static class Installer
    {
        public static void SetupEntityFramework(this IServiceCollection services, IConfiguration configuration)
        {
            services.AddDbContext<CarRentalContext>(options =>
            {
                options.UseSqlServer(
                    configuration.GetConnectionString("Default"),
                    b => b.MigrationsAssembly("Data")
                    );
            });
        }
    }
}


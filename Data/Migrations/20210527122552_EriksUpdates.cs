using Microsoft.EntityFrameworkCore.Migrations;

namespace Data.Migrations
{
    public partial class EriksUpdates : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "KilometersRun",
                table: "Car",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<string>(
                name: "ProductionYear",
                table: "Car",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "RegistrationNumber",
                table: "Car",
                type: "nvarchar(450)",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Car_RegistrationNumber",
                table: "Car",
                column: "RegistrationNumber",
                unique: true,
                filter: "[RegistrationNumber] IS NOT NULL");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropIndex(
                name: "IX_Car_RegistrationNumber",
                table: "Car");

            migrationBuilder.DropColumn(
                name: "KilometersRun",
                table: "Car");

            migrationBuilder.DropColumn(
                name: "ProductionYear",
                table: "Car");

            migrationBuilder.DropColumn(
                name: "RegistrationNumber",
                table: "Car");
        }
    }
}

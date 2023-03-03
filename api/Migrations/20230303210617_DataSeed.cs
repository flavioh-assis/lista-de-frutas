using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace FruitsApi.Migrations
{
    public partial class DataSeed : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.Sql(
                "INSERT INTO \"Fruits\" (\"Description\", \"ValueA\", \"ValueB\") VALUES ('Amora', 1, 1), ('Banana', 2, 2), ('Caju', 3, 0), ('Damasco', 0, 6)"
            );
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.Sql(@"DELETE FROM public.Fruits WHERE 1 = 1");
        }
    }
}
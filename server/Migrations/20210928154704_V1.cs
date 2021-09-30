using Microsoft.EntityFrameworkCore.Migrations;

namespace webprog.Migrations
{
    public partial class V1 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Lokacija",
                columns: table => new
                {
                    ID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Naziv = table.Column<string>(type: "nvarchar(255)", maxLength: 255, nullable: true),
                    Kapacitet = table.Column<int>(type: "int", nullable: false),
                    MaxKapacitet = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Lokacija", x => x.ID);
                });

            migrationBuilder.CreateTable(
                name: "Meteorolog",
                columns: table => new
                {
                    ID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Ime = table.Column<string>(type: "nvarchar(255)", maxLength: 255, nullable: true),
                    Adresa = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Meteorolog", x => x.ID);
                });

            migrationBuilder.CreateTable(
                name: "Stanica",
                columns: table => new
                {
                    ID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Naziv = table.Column<string>(type: "nvarchar(255)", maxLength: 255, nullable: true),
                    Opisvremena = table.Column<string>(name: "Opis vremena", type: "nvarchar(255)", maxLength: 255, nullable: true),
                    Temperatura = table.Column<string>(type: "nvarchar(255)", maxLength: 255, nullable: true),
                    Poslednjemerenje = table.Column<string>(name: "Poslednje merenje", type: "nvarchar(255)", maxLength: 255, nullable: true),
                    MeteorologID = table.Column<int>(type: "int", nullable: true),
                    LokacijaID = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Stanica", x => x.ID);
                    table.ForeignKey(
                        name: "FK_Stanica_Lokacija_LokacijaID",
                        column: x => x.LokacijaID,
                        principalTable: "Lokacija",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Stanica_Meteorolog_MeteorologID",
                        column: x => x.MeteorologID,
                        principalTable: "Meteorolog",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Stanica_LokacijaID",
                table: "Stanica",
                column: "LokacijaID");

            migrationBuilder.CreateIndex(
                name: "IX_Stanica_MeteorologID",
                table: "Stanica",
                column: "MeteorologID");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Stanica");

            migrationBuilder.DropTable(
                name: "Lokacija");

            migrationBuilder.DropTable(
                name: "Meteorolog");
        }
    }
}

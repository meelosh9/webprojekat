using Microsoft.EntityFrameworkCore;

namespace webprog.Models
{
     public class StaniceContext : DbContext
    {
        public DbSet<Stanica> Stanice { get; set; }
        public DbSet<Lokacija> Lokacije { get; set; }
        public DbSet<Meteorolog> Meteorolog { get; set; }
        public StaniceContext(DbContextOptions options) : base(options)
        {
             
        }       

        //override za OnModelConfiguring - > podesavanje da se koristi CascadeDelete
    } 
}
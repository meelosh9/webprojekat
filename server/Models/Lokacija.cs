using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;


namespace webprog.Models
{
    [Table("Lokacija")]
    public class Lokacija
    {
        [Key]
        [Column("ID")] //ukoliko prethodno imamo bazu moramo da vodimo racuna o imenima
        public int ID { get; set; }

        [Column("Naziv")]
        [MaxLength(255)]
        public string Naziv { get; set; }

        [Column("Kapacitet")]
        public int Kapacitet { get; set; }

        [Column("MaxKapacitet")]
        public int MaxKapacitet { get; set; }

        //[JsonIgnore]
        public virtual List<Stanica> Stanice { get; set; } 
        
    }
}
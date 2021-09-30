using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;


namespace webprog.Models
{
    [Table("Stanica")]
    public class Stanica
    {
        [Key]
        [Column("ID")] //ukoliko prethodno imamo bazu moramo da vodimo racuna o imenima
        public int ID { get; set; }

        [Column("Naziv")]
        [MaxLength(255)]
        public string Naziv { get; set; }

        [Column("Opis vremena")]
        [MaxLength(255)]
        public string Opis { get; set; }

        [Column("Temperatura")]
        [MaxLength(255)]
        public string Temperatura { get; set; }

        [Column("Poslednje merenje")]
        [MaxLength(255)]
        public string Merenje { get; set; }

        //[JsonIgnore] //da izbegnemo serijalizaciju u beskonacnost
        public Meteorolog Meteorolog { get; set; } //da bi znali kuj vrt je u pitanje

        [JsonIgnore] //da izbegnemo serijalizaciju u beskonacnost
        public Lokacija Lokacija { get; set; } //da bi znali kuj vrt je u pitanje

        //koriscenje kolekcije u ovom formatu zahteva virtual propertije
        
    }
}
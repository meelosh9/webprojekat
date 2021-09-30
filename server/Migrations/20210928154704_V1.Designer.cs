﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using webprog.Models;

namespace webprog.Migrations
{
    [DbContext(typeof(StaniceContext))]
    [Migration("20210928154704_V1")]
    partial class V1
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("ProductVersion", "5.0.10")
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("webprog.Models.Lokacija", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasColumnName("ID")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int>("Kapacitet")
                        .HasColumnType("int")
                        .HasColumnName("Kapacitet");

                    b.Property<int>("MaxKapacitet")
                        .HasColumnType("int")
                        .HasColumnName("MaxKapacitet");

                    b.Property<string>("Naziv")
                        .HasMaxLength(255)
                        .HasColumnType("nvarchar(255)")
                        .HasColumnName("Naziv");

                    b.HasKey("ID");

                    b.ToTable("Lokacija");
                });

            modelBuilder.Entity("webprog.Models.Meteorolog", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasColumnName("ID")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Adresa")
                        .HasColumnType("nvarchar(max)")
                        .HasColumnName("Adresa");

                    b.Property<string>("Naziv")
                        .HasMaxLength(255)
                        .HasColumnType("nvarchar(255)")
                        .HasColumnName("Ime");

                    b.HasKey("ID");

                    b.ToTable("Meteorolog");
                });

            modelBuilder.Entity("webprog.Models.Stanica", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasColumnName("ID")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int?>("LokacijaID")
                        .HasColumnType("int");

                    b.Property<string>("Merenje")
                        .HasMaxLength(255)
                        .HasColumnType("nvarchar(255)")
                        .HasColumnName("Poslednje merenje");

                    b.Property<int?>("MeteorologID")
                        .HasColumnType("int");

                    b.Property<string>("Naziv")
                        .HasMaxLength(255)
                        .HasColumnType("nvarchar(255)")
                        .HasColumnName("Naziv");

                    b.Property<string>("Opis")
                        .HasMaxLength(255)
                        .HasColumnType("nvarchar(255)")
                        .HasColumnName("Opis vremena");

                    b.Property<string>("Temperatura")
                        .HasMaxLength(255)
                        .HasColumnType("nvarchar(255)")
                        .HasColumnName("Temperatura");

                    b.HasKey("ID");

                    b.HasIndex("LokacijaID");

                    b.HasIndex("MeteorologID");

                    b.ToTable("Stanica");
                });

            modelBuilder.Entity("webprog.Models.Stanica", b =>
                {
                    b.HasOne("webprog.Models.Lokacija", "Lokacija")
                        .WithMany("Stanice")
                        .HasForeignKey("LokacijaID");

                    b.HasOne("webprog.Models.Meteorolog", "Meteorolog")
                        .WithMany("Stanice")
                        .HasForeignKey("MeteorologID");

                    b.Navigation("Lokacija");

                    b.Navigation("Meteorolog");
                });

            modelBuilder.Entity("webprog.Models.Lokacija", b =>
                {
                    b.Navigation("Stanice");
                });

            modelBuilder.Entity("webprog.Models.Meteorolog", b =>
                {
                    b.Navigation("Stanice");
                });
#pragma warning restore 612, 618
        }
    }
}

using FruitsApi.Data.Configuration;
using FruitsApi.Entities;
using Microsoft.EntityFrameworkCore;

namespace FruitsApi.Data.Context
{
    public class FruitContext : DbContext
    {
        public FruitContext(DbContextOptions<FruitContext> options) : base(options) { }

        public DbSet<Fruit> Fruits { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.ApplyConfiguration(new FruitConfiguration());
            base.OnModelCreating(modelBuilder);
        }
    }
}
using FruitsApi.Entities;
using Microsoft.EntityFrameworkCore;

namespace FruitsApi.Data.Context
{
    public class FruitContext : DbContext
    {
        public FruitContext(DbContextOptions<FruitContext> options) : base(options)
        {
            Database.EnsureCreated();
        }

        public DbSet<Fruit> Fruits { get; set; }
    }
}
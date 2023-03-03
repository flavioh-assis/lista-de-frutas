using FruitsApi.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace FruitsApi.Data.Configuration;

public class FruitConfiguration : IEntityTypeConfiguration<Fruit>
{
    public void Configure(EntityTypeBuilder<Fruit> builder)
    {
        builder.HasKey(x => x.Id);
        builder.Property(x => x.Description).HasColumnType("varchar(255)");
        builder.Property(x => x.Id).ValueGeneratedOnAdd();
    }
}
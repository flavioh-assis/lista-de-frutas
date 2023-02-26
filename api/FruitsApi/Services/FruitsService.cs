using System.Collections.Immutable;
using FruitsApi.Data.Context;
using FruitsApi.Models;

namespace FruitsApi.Services;

public class FruitsService
{
    private readonly FruitContext _context;

    public FruitsService(FruitContext context) => _context = context;

    private async void Commit() => await _context.SaveChangesAsync();
    
    public Fruit CreateFruit(Fruit fruit)
    {
        _context.Fruits.Add(fruit);
        Commit();

        return fruit;
    }

    public IEnumerable<Fruit> GetAll()
    {
        var fruits = _context.Fruits.ToImmutableList();
        
        return fruits;
    }

    public async Task<Fruit> GetById(int id)
    {
        var fruit = await _context.Fruits.FindAsync(id);

        return fruit;
    }
}
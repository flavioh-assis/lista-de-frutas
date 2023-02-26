using FruitsApi.Data.Context;
using FruitsApi.Models;

namespace FruitsApi.Services;

public class FruitsService
{
    private readonly FruitContext _context;

    public FruitsService(FruitContext context)
    {
        _context = context;
    }

    public async Task<Fruit> CreateFruit(Fruit fruit)
    {
        _context.Fruits.Add(fruit);
        await _context.SaveChangesAsync();

        return fruit;
    }
}
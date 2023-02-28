using System.Collections.Immutable;
using FruitsApi.Data.Context;
using FruitsApi.Models;

namespace FruitsApi.Services;

public class FruitsService
{
    private readonly FruitContext _context;

    public FruitsService(FruitContext context) => _context = context;

    private async Task CommitAsync() => await _context.SaveChangesAsync();

    public async Task<Fruit> Create(Fruit fruit)
    {
        _context.Fruits.Add(fruit);
        await CommitAsync();

        return fruit;
    }

    public IEnumerable<Fruit> GetAll()
    {
        var fruits = _context.Fruits.ToImmutableList().OrderBy(p => p.Description);

        return fruits;
    }

    public async Task<Fruit> GetById(int id)
    {
        var fruit = await _context.Fruits.FindAsync(id);

        return fruit;
    }

    public async Task<Fruit> Update(int id, Fruit newData)
    {
        var fruit = await GetById(id);
        fruit.Description = newData.Description;
        fruit.ValueA = newData.ValueA;
        fruit.ValueB = newData.ValueB;

        await CommitAsync();

        return fruit;
    }

    public async Task<Fruit> Delete(int id)
    {
        var fruit = await GetById(id);

        _context.Fruits.Remove(fruit);
        await CommitAsync();

        return fruit;
    }
}
using AutoMapper;
using FruitsApi.Data.Context;
using FruitsApi.DTOs;
using FruitsApi.Entities;
using Microsoft.EntityFrameworkCore;

namespace FruitsApi.Services;

public class FruitsService
{
    private readonly FruitContext _context;
    private readonly IMapper _mapper;

    public FruitsService(FruitContext context, IMapper mapper)
    {
        _context = context;
        _mapper = mapper;
    }

    public async Task<Fruit> Create(FruitDto dto)
    {
        var fruit = _mapper.Map<Fruit>(dto);
        _context.Fruits.Add(fruit);

        await _context.SaveChangesAsync();

        return fruit;
    }

    public async Task<List<Fruit>> GetAll()
    {
        var fruits = await _context.Fruits.OrderBy(p => p.Description).ToListAsync();

        return fruits;
    }

    public async Task<Fruit> GetById(int id)
    {
        var fruit = await _context.Fruits.FindAsync(id);

        if (fruit is null)
            throw new NotFoundException("Fruit not found.");

        return fruit;
    }

    public async Task<Fruit> Update(int id, FruitDto newData)
    {
        var fruit = await GetById(id);
        _mapper.Map(newData, fruit);

        await _context.SaveChangesAsync();

        return fruit;
    }

    public async Task<Fruit> Delete(int id)
    {
        var fruit = await GetById(id);
        _context.Fruits.Remove(fruit);

        await _context.SaveChangesAsync();

        return fruit;
    }
}
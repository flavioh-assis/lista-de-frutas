using AutoMapper;
using FruitsApi.DTOs;
using FruitsApi.Entities;
using FruitsApi.Services;
using Microsoft.AspNetCore.Mvc;

namespace FruitsApi.Controllers;

[ApiController]
[Route("api/fruits")]
public class FruitsController : ControllerBase
{
    private readonly FruitsService _service;
    private readonly IMapper _mapper;

    public FruitsController(FruitsService service, IMapper mapper)
    {
        _service = service;
        _mapper = mapper;
    }

    [HttpPost]
    public async Task<ActionResult<Fruit>> Post([FromBody] FruitDto dto)
    {
        try
        {
            var fruit = _mapper.Map<Fruit>(dto);
            var createdFruit = await _service.Create(fruit);

            return Created("Fruit created.", createdFruit);
        }
        catch (Exception e)
        {
            return StatusCode(StatusCodes.Status500InternalServerError, e.Message);
        }
    }

    [HttpGet]
    public async Task<ActionResult<List<Fruit>>> GetAll()
    {
        try
        {
            var fruits = await _service.GetAll();

            return Ok(fruits);
        }
        catch (Exception e)
        {
            return StatusCode(StatusCodes.Status500InternalServerError, e.Message);
        }
    }

    [HttpGet("{id}")]
    public async Task<ActionResult<Fruit>> GetById([FromRoute] int id)
    {
        try
        {
            var fruit = await _service.GetById(id);

            return Ok(fruit);
        }
        catch (Exception e)
        {
            return StatusCode(StatusCodes.Status500InternalServerError, e.Message);
        }
    }

    [HttpPut("{id}")]
    public async Task<ActionResult<Fruit>> Update([FromRoute] int id, [FromBody] FruitDto dto)
    {
        try
        {
            var fruit = await _service.Update(id, dto);

            return Ok(fruit);
        }
        catch (Exception e)
        {
            return StatusCode(StatusCodes.Status500InternalServerError, e.Message);
        }
    }

    [HttpDelete("{id}")]
    public async Task<ActionResult<Fruit>> Delete([FromRoute] int id)
    {
        try
        {
            var deletedFruit = await _service.Delete(id);

            return Ok(deletedFruit);
        }
        catch (Exception e)
        {
            return StatusCode(StatusCodes.Status500InternalServerError, e.Message);
        }
    }
}
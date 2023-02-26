using FruitsApi.Models;
using FruitsApi.Services;
using Microsoft.AspNetCore.Mvc;

namespace FruitsApi.Controllers;

[ApiController]
[Route("api/fruits")]
public class FruitsController : ControllerBase
{
    private readonly FruitsService _service;

    public FruitsController(FruitsService service) => _service = service;

    [HttpPost]
    public async Task<ActionResult<Fruit>> PostFruit([FromBody] Fruit request)
    {
        try
        {
            var createdFruit = _service.CreateFruit(request);

            return Created("Fruit created.", createdFruit);
        }
        catch (Exception e)
        {
            return StatusCode(StatusCodes.Status500InternalServerError, e.Message);
        }
    }

    [HttpGet]
    public async Task<ActionResult<IEnumerable<Fruit>>> GetAll()
    {
        try
        {
            var fruits = _service.GetAll();

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
}
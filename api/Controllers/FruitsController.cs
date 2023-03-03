using FruitsApi.DTOs;
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
    public async Task<IActionResult> Post([FromBody] FruitDto dto)
    {
        var createdFruit = await _service.Create(dto);

        return Created("", createdFruit);
    }

    [HttpGet]
    public async Task<IActionResult> GetAll()
    {
        var fruits = await _service.GetAll();

        return Ok(fruits);
    }

    [HttpGet("{id}")]
    public async Task<IActionResult> GetById([FromRoute] int id)
    {
        var fruit = await _service.GetById(id);

        return Ok(fruit);
    }

    [HttpPut("{id}")]
    public async Task<IActionResult> Update([FromRoute] int id, [FromBody] FruitDto dto)
    {
        var fruit = await _service.Update(id, dto);

        return Ok(fruit);
    }

    [HttpDelete("{id}")]
    public async Task<IActionResult> Delete([FromRoute] int id)
    {
        await _service.Delete(id);

        return NoContent();
    }
}
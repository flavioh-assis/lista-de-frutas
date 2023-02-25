using FruitsApi.Models;
using FruitsApi.Services;
using Microsoft.AspNetCore.Mvc;

namespace FruitsApi.Controllers;

[ApiController]
[Route("api/fruits")]
public class FruitsController : ControllerBase
{
    private readonly FruitsService _service;

    public FruitsController(FruitsService service)
    {
        _service = service;
    }

    [HttpPost]
    public async Task<ActionResult<IEnumerable<Fruit>>> Post([FromBody] Fruit request)
    {
        try
        {
            var createdFruit = await _service.AddFruit(request);

            return Created("Fruit created.", createdFruit);
        }
        catch (Exception e)
        {
            return StatusCode(StatusCodes.Status500InternalServerError, e.Message);
        }
    }
}
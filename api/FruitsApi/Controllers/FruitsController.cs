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
}
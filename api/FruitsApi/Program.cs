using System.Net;
using FluentValidation;
using FluentValidation.AspNetCore;
using FruitsApi;
using FruitsApi.Data.Context;
using FruitsApi.DTOs;
using FruitsApi.Profiles;
using FruitsApi.Services;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddDbContext<FruitContext>(opt =>
{
    opt.UseNpgsql(builder.Configuration.GetConnectionString("DefaultConnection"));
});
builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddAutoMapper(cfg => cfg.AddProfile<AutoMapperProfile>());
builder.Services.AddFluentValidationAutoValidation();

builder.Services.AddScoped<FruitsService>();
builder.Services.AddScoped<FruitValidator>();
builder.Services.AddScoped<IValidator<FruitDto>, FruitValidator>();
builder.Services.AddFluentValidationAutoValidation(config => { config.DisableDataAnnotationsValidation = true; });

var app = builder.Build();

app.Use(async (context, next) =>
{
    try
    {
        await next.Invoke();
    }
    catch (NotFoundException ex)
    {
        context.Response.StatusCode = (int)HttpStatusCode.NotFound;

        await context.Response.WriteAsync(ex.Message);
    }
    catch (Exception ex)
    {
        context.Response.StatusCode = (int)HttpStatusCode.InternalServerError;

        await context.Response.WriteAsync(ex.Message);
    }
});

app.UseCors(options =>
    options.WithOrigins("http://localhost:3000")
        .AllowAnyHeader()
        .AllowAnyMethod());

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI(options =>
    {
        options.EnableTryItOutByDefault();
        options.DefaultModelRendering(Swashbuckle.AspNetCore.SwaggerUI.ModelRendering.Model);
    });
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
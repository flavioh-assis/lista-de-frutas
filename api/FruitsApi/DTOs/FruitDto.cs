using FluentValidation;

namespace FruitsApi.DTOs;

public class FruitDto
{
    public string Description { get; set; }
    public int ValueA { get; set; }
    public int ValueB { get; set; }
}

public class FruitValidator : AbstractValidator<FruitDto>
{
    public FruitValidator()
    {
        RuleFor(x => x.Description).NotEmpty();
        RuleFor(x => x.ValueA).GreaterThanOrEqualTo(0);
        RuleFor(x => x.ValueB).GreaterThanOrEqualTo(0);
    }
}
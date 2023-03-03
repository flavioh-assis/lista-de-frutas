using AutoMapper;
using FruitsApi.DTOs;
using FruitsApi.Entities;

namespace FruitsApi.Profiles;

public class AutoMapperProfile : Profile
{
    public AutoMapperProfile()
    {
        CreateMap<FruitDto, Fruit>();
    }
}
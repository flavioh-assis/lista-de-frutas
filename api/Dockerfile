﻿FROM mcr.microsoft.com/dotnet/aspnet:6.0 AS base
WORKDIR /app

FROM mcr.microsoft.com/dotnet/sdk:6.0 AS build
WORKDIR /src
COPY ["FruitsApi.csproj", "./"]
RUN dotnet restore "FruitsApi.csproj"
COPY . .
WORKDIR "/src/"
RUN dotnet build "FruitsApi.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "FruitsApi.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "FruitsApi.dll"]

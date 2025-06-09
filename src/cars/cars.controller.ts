import { Body, Controller, Get, Param, ParseIntPipe, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCarDto } from './dto/create-car.dto';

@Controller('cars')
export class CarsController {

  constructor(private readonly carsService: CarsService) {}

@Get()
  getAllCars() {
    return this.carsService.findAll() 
  }

@Get(':id')
  getCarById(@Param('id') id: string) {
    return this.carsService.findById(id);
  }

@Post()
@UsePipes(ValidationPipe)
  createCar(@Body() createCarDto: CreateCarDto) {
   return createCarDto;

}

}



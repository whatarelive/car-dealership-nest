import { Body, Controller, Delete, Get, Param, ParseUUIDPipe, Patch, Post } from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCarDto } from './dto/create-car.dto';



@Controller('cars')
export class CarsController {

  // Inyeccion de dependencias de la clase CarsService.
  constructor(
    private readonly carsService: CarsService,
  ){}

  // Metodo Get que devuelve todos los cars.
  @Get()
  getAllCars() {
    return this.carsService.findAll();
  }

  // Metodo Get que devuelve un car por su id.
  @Get(':id')
  getCarsByID( @Param('id', ParseUUIDPipe) id: string ) {
    return this.carsService.findCarsById( id );
  }

  // Metodo POST que va a agregar un nuevo carro
  @Post()
  createCar( @Body() createCarDto: CreateCarDto ) {
    return createCarDto;
  }

  // Metodo PATCH para actualizar un carro.
  @Patch(':id') 
  updateCar( 
    @Param('id', ParseUUIDPipe) id: string,
    @Body() createCarDto: CreateCarDto )
  {
    return {
      id,
      ...createCarDto
    };
  }

  // Metodo DELETE para elminar un carro.
  @Delete(':id')
  deleteCar( @Param('id', ParseUUIDPipe) id: string ) {
    return {
      method: 'DELETE',
      id
    }
  }
}

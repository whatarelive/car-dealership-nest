import { Module } from '@nestjs/common';
import { CarsModule } from './cars/cars.module';



// Modulo root de la aplicacion.
@Module({
  imports: [ CarsModule ],
  controllers: [],
  providers: [],
  exports: [],
})
export class AppModule {}

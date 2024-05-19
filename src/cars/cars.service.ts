import { Injectable, NotFoundException } from '@nestjs/common';
import { Car } from './interfaces/car.interface';
import { v4 as uuid } from "uuid";



@Injectable()
export class CarsService {

    // Data de los carros.
  private cars: Car[] = [
        {
            id: uuid(),
            brand: 'Toyota',
            model: 'Corolla' 
        },
        {
            id: uuid(),
            brand: 'Honda',
            model: 'Civic' 
        },
        {
            id: uuid(),
            brand: 'Jeep',
            model: 'Cherokee'
        }
    ];

    // Metodo para obtener de la Data todos los carros.
    findAll(){
        return this.cars;
    }

    // Metodo para obtener de la Data un carro por el Id.
    findCarsById( id: string ) {
        // Buscamos el carro por el ID proporcionado.
        const car = this.cars.find( car => car.id === id );
        
        // Si el carro no se encuentra se lanza una Excepcion.
        if ( !car ) throw new NotFoundException(`No se encontro el carro con el id: ${id}`);

        return car;
    }
} 

import { Injectable, NotFoundException } from '@nestjs/common';
import { Car } from './interfaces/car.interface';
import { v4 as uuid} from 'uuid';

@Injectable()
export class CarsService {
    private cars: Car[] = [
        {
            id: uuid(),
            model: 'Model S',
            brand: 'Tesla',
        },
        {
            id: uuid(),
            model: 'Mustang',
            brand: 'Ford',
        },
        {
            id: uuid(),
            model: 'Civic',
            brand: 'Honda',
        },
        {
            id: uuid(),
            model: 'Corolla',
            brand: 'Toyota',
        },
        {
            id: uuid(),
            model: 'Model 3',
            brand: 'Tesla',
        },
  
    ];

   findAll() {
        return this.cars;
    }

    findById(id: string) {
          
            const car = this.cars.find(car => car.id === id);
          

          if (!car) {
              throw new NotFoundException('Car not found');
          }

          return car;
    }
    }            

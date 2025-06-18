import { Injectable } from '@nestjs/common';
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';
import { v4 as uuid } from 'uuid';
import { Brand } from './entities/brand.entity';


@Injectable()
export class BrandsService {
  fillCarsWithSeedData(BRANDS_SEED: Brand[]) {
    throw new Error('Method not implemented.');
  }

  private brands: Brand[] = [
    {
      id: uuid(),
      name: 'Toyota',
      createdAt: new Date().getTime(),
    }
  ];

  create(createBrandDto: CreateBrandDto) {
    const brand = new Brand({
      id: Date.now().toString(),
      ...createBrandDto,
      createdAt: Date.now(),
    });
    this.brands.push(brand);
    return brand;
  }

  findAll() {
    return `This action returns all brands`;
  }

  findOne(id: number) {
    return `This action returns a #${id} brand`;
  }

  update(id: number, updateBrandDto: UpdateBrandDto) {
    return `This action updates a #${id} brand`;
  }

  remove(id: number) {
    return `This action removes a #${id} brand`;
  }
}

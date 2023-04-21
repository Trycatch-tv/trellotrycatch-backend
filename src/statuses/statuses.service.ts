import { Injectable, BadRequestException } from '@nestjs/common';
import { CreateStatusDto } from './dto/create-status.dto';
import { UpdateStatusDto } from './dto/update-status.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Status } from './entities/status.entity';
import { Repository, UpdateResult } from 'typeorm';

@Injectable()
export class StatusesService {
  constructor(
    @InjectRepository(Status)
    private statusesRepository: Repository<Status>
  ) {}

  async create(createStatusDto: CreateStatusDto):Promise<Status> {
    const status: Status = this.statusesRepository.create(createStatusDto);
    return await this.statusesRepository.save(status);
  }

  async findAll(): Promise<Status[]>{
    return await this.statusesRepository.find()
  }

  async findOne(id: string): Promise<Status> {
    return await this.statusesRepository.findOneBy({ id });
  }

  async update(id: string, updateStatusDto: UpdateStatusDto): Promise<UpdateResult> {
    const staus: Status = await this.findOne(id);
    if (!staus) throw new BadRequestException('El proyecto no existe')
    return await this.statusesRepository.update({ id }, updateStatusDto);
  }

  async remove(id: string): Promise<Status> {
    const status: Status = await this.findOne(id);
    if (!status) throw new BadRequestException('El proyecto no existe')
    return await this.statusesRepository.softRemove(status)
  }
}
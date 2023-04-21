import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { StatusesService } from './statuses.service';
import { CreateStatusDto } from './dto/create-status.dto';
import { UpdateStatusDto } from './dto/update-status.dto';
import { Status } from './entities/status.entity';
import { UpdateResult } from 'typeorm';

@Controller('statuses')
export class StatusesController {
  constructor(private readonly statusesService: StatusesService) {}

  @Post()
  create(@Body() createStatusDto: CreateStatusDto) {
    return this.statusesService.create(createStatusDto);
  }

  @Get()
  findAll():Promise<Status[]> {
    return this.statusesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Status> {
    return this.statusesService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateStatusDto: UpdateStatusDto):Promise<UpdateResult> {
    return this.statusesService.update(id, updateStatusDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<Status> {
    return this.statusesService.remove(id);
  }
}

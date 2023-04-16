import { Get, Controller, Post, Body, Patch, Param, Delete } from "@nestjs/common";
import { ProjectsService } from "./projects.service";
import { Project } from "./entities/project.entity";
import { CreateProjectDto } from "./dto/create-project.dto";
import { UpdateResult } from "typeorm";
import { UpdateProjectDto } from "./dto/update-project.dto";

@Controller('projects')
export class ProjectsController {
  constructor(private readonly ProjectsService: ProjectsService) {}
  @Get()
  findAll(): Promise<Project[]>{
    return this.ProjectsService.finAll()
  }

  @Post()
  create(@Body() createProjectDto: CreateProjectDto): Promise<Project> {
    return this.ProjectsService.create(createProjectDto)
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateProjectDto: UpdateProjectDto
   ): Promise<UpdateResult> {
    return this.ProjectsService.update(id, updateProjectDto)
  }

  @Delete(':id')
  delete(
    @Param('id') id: string,
  ): Promise<Project> {
    return this.ProjectsService.delete(id)
  }

}
import { Repository, UpdateResult } from "typeorm";
import { Project } from "./entities/project.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { BadRequestException } from "@nestjs/common";
import { CreateProjectDto } from "./dto/create-project.dto";
import { UpdateProjectDto } from "./dto/update-project.dto";

export class ProjectsService {

  constructor(
    @InjectRepository(Project)
    private projectsRepository: Repository<Project>
  ) {}


  async finAll(): Promise<Project[]>{
    return await this.projectsRepository.find()
  }

  async findOne(id: string): Promise<Project> {
    return await this.projectsRepository.findOneBy({ id });
  }

  async create(createProjectDto: CreateProjectDto): Promise<Project> {
    const project: Project = this.projectsRepository.create(createProjectDto);
    return await this.projectsRepository.save(project);
  }

  async update(id: string, updateProjectDto: UpdateProjectDto): Promise<UpdateResult> {
    const project: Project = await this.findOne(id);
    if (!project) throw new BadRequestException('El proyecto no existe')
    return await this.projectsRepository.update({ id }, updateProjectDto);
  }

async delete(id: string): Promise<Project> {
  const project: Project = await this.findOne(id);
  if (!project) throw new BadRequestException('El proyecto no existe')
  return await this.projectsRepository.softRemove(project)
}
}
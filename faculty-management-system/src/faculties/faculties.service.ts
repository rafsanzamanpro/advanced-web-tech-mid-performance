import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateFacultyDto } from './dto/create-faculty.dto.js';
import { Faculty } from './entities/faculty.entity.js';

@Injectable()
export class FacultiesService {
  constructor(
    @InjectRepository(Faculty)
    private readonly facultyRepository: Repository<Faculty>,
  ) {}

  create(createFacultyDto: CreateFacultyDto) {
    const faculty = this.facultyRepository.create({
      id: createFacultyDto.Id,
      name: createFacultyDto.Name,
      expertise: createFacultyDto.expertise,
      noOfPublication: createFacultyDto.noOfPublication,
    });

    return this.facultyRepository.save(faculty);
  }
}
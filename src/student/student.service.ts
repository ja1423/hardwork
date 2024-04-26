import { Injectable } from '@nestjs/common';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Student } from './entities/student.entity';
import { Repository } from 'typeorm';

@Injectable()
export class StudentService {
  findOneandUpdate(arg0: number, updateStudentDto: UpdateStudentDto) {
    throw new Error('Method not implemented.');
  }

  constructor(
    @InjectRepository(Student)
    private readonly studentRepo: Repository<Student>,
  ) {}
  create(createStudentDto: CreateStudentDto) {
    return this.studentRepo.create(createStudentDto);
  }

  findAll() {
    return this.studentRepo.find();
  }

  findOne(id: number) {
    return this.studentRepo.findOne(id
    );
  }

  update(id: number, updateStudentDto: UpdateStudentDto) {
    return this.studentRepo.update(id, updateStudentDto);
  }

  remove(id: number) {
    return this.studentRepo.delete(id);
  }
}

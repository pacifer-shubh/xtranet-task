package com.section.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.section.entity.Course;

public interface CourseRepository extends JpaRepository<Course, String> {

}

package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entity.Course;
import com.example.demo.service.CourseService;

@RestController
@RequestMapping("/course")
@CrossOrigin("*")
public class CourseController {

	@Autowired
	CourseService courseService;
	
	
	@GetMapping("/all")
	public ResponseEntity<List<Course>> getallCourse(){
		
		
		return ResponseEntity.status(HttpStatus.ACCEPTED).body(courseService.getAllCourse());
	}
	
	
	@GetMapping("/{id}")
	public ResponseEntity<Course> getCourseById(@PathVariable String id){
		
		
		return ResponseEntity.status(HttpStatus.ACCEPTED).body(courseService.getCourseById(id));
	}
	
	@PostMapping("/add")
	public ResponseEntity<Course> addCourse(@RequestBody Course course){
		
		Course saved = courseService.addCourse(course);
		
		return ResponseEntity.status(HttpStatus.ACCEPTED).body(saved);
		
		
	}
}

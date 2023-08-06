package com.section.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.section.entity.Section;
import com.section.service.SectService;

@RestController
@RequestMapping("/section")
@CrossOrigin("*")
public class SectionController {
	
	
	@Autowired
	SectService sectService;
	
	
	
	@GetMapping("/all")
	public ResponseEntity<List<Section>> getAll(){
		
		return ResponseEntity.status(HttpStatus.ACCEPTED).body(sectService.getAll());
		
	}
	
	@PostMapping
	public ResponseEntity<Section> addSection(@RequestBody Section section){
	
		sectService.addNewSection(section);
		return ResponseEntity.status(HttpStatus.ACCEPTED).body(section);
		
	}

}

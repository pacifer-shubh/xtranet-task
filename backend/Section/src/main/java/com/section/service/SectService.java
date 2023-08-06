package com.section.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.section.entity.Section;
import com.section.repository.SectionRepository;

@Service
public class SectService {
	
	
	@Autowired
	SectionRepository sectionRepository;
	
	
	// to add new 
	public Section addNewSection(Section section) {
		
		sectionRepository.save(section);
		
		return section;
	}
	
	//	to get all
	
	public List<Section> getAll(){
		
		return sectionRepository.findAll();
	}

}

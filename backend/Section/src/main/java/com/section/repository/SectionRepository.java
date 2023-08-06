package com.section.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.section.entity.Section;

public interface SectionRepository extends JpaRepository<Section, String>{
	

}

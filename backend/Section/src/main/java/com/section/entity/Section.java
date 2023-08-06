package com.section.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Entity
public class Section {
	
	@Id
	@GeneratedValue(strategy = GenerationType.UUID)
	private String id;
	private String name;
	private int orders;
	
	
	@ManyToOne
	@JoinColumn(name = "course_id")
	private Course course;
	
}

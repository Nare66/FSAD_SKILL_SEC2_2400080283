package com.klu.controller;

import com.klu.exception.InvalidInputException;
import com.klu.exception.StudentNotFoundException;
import com.klu.model.Student;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/student")
public class StudentController {

    @GetMapping("/{id}")
    public Student getStudent(@PathVariable String id) {

        int studentId;

        // Handle invalid input
        try {
            studentId = Integer.parseInt(id);
        } catch (NumberFormatException e) {
            throw new InvalidInputException("Student ID must be a number");
        }

        // Dummy data
        if (studentId == 1) {
            return new Student(1, "Narendra", "CSE");
        } else {
            throw new StudentNotFoundException("Student not found with ID: " + studentId);
        }
    }
}
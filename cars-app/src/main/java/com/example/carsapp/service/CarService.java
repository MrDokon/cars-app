package com.example.carsapp.service;

import com.example.carsapp.dto.CarDTO;

import java.util.List;

public interface CarService {

    void save(CarDTO carDTO);

    List<CarDTO> findAll();

    CarDTO findById(Long id);

    void delete(Long id);
}

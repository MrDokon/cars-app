package com.example.carsapp.service.impl;

import com.example.carsapp.dto.CarDTO;
import com.example.carsapp.entity.BrandEntity;
import com.example.carsapp.entity.CarEntity;
import com.example.carsapp.exceptions.NotFoundException;
import com.example.carsapp.mapper.CarMapper;
import com.example.carsapp.repository.BrandEntityRepository;
import com.example.carsapp.repository.CarEntityRepository;
import com.example.carsapp.service.CarService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class CarServiceImpl implements CarService {

    private final CarEntityRepository carEntityRepository;
    private final BrandEntityRepository brandEntityRepository;
    private final CarMapper carMapper;

    @Override
    public void save(CarDTO carDTO) {
        CarEntity carEntity = carMapper.fromCarDTOToCarEntity(carDTO);
        BrandEntity brandEntity = brandEntityRepository.findByName(carDTO.brand())
                .orElse(new BrandEntity(carDTO.brand()));
        carEntity.setBrand(brandEntity);

        carEntityRepository.save(carEntity);
    }

    @Override
    public List<CarDTO> findAll() {
        return carEntityRepository.findAll().stream()
                .map(carMapper::fromCarEntityToCarDTO)
                .toList();
    }

    @Override
    public CarDTO findById(Long id) {
        return carMapper.fromCarEntityToCarDTO(carEntityRepository.findById(id)
                .orElseThrow(() -> new NotFoundException("Nie znaleziono samochodu dla id: " + id)));
    }

    @Override
    public void delete(Long id) {
        carEntityRepository.deleteById(id);
    }
}

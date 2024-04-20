package com.example.carsapp.repository;

import com.example.carsapp.entity.CarEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CarEntityRepository extends JpaRepository<CarEntity, Long> {
}

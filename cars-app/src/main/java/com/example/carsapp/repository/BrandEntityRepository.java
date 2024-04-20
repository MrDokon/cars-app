package com.example.carsapp.repository;

import com.example.carsapp.entity.BrandEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface BrandEntityRepository extends JpaRepository<BrandEntity, Long> {

    Optional<BrandEntity> findByName(String name);

}

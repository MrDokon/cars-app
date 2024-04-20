package com.example.carsapp.entity;

import jakarta.persistence.*;
import lombok.Data;

import java.util.List;

@Entity
@Table(name = "car_table")
@Data
public class CarEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column
    private String model;

    @Column(name = "year_of_manufacture")
    private Integer yearOfManufacture;

    @ManyToOne(cascade = CascadeType.PERSIST, fetch = FetchType.LAZY)
    private BrandEntity brand;

}


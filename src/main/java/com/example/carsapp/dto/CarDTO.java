package com.example.carsapp.dto;

import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;

public record CarDTO(Long id,

                     @NotEmpty(message = "Auto powinno mieć markę (brand)") String brand,

                     @NotEmpty(message = "Auto powinno mieć model") String model,

                    @NotNull(message = "Auto powinno mieć rok") Integer year) {

}

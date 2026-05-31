package com.example.demo;

import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;

@RestController
@CrossOrigin("*")
public class WeatherController {

    private final String API_KEY = "a089137c7e4e682410d77118da9f3a6f";

    @GetMapping("/weather/{city}")
    public String getWeather(
            @PathVariable String city
    ) {

        String url =
                "https://api.openweathermap.org/data/2.5/weather?q="
                        + city
                        + "&appid="
                        + API_KEY
                        + "&units=metric";

        RestTemplate restTemplate =
                new RestTemplate();

        return restTemplate.getForObject(
                url,
                String.class
        );
    }
}
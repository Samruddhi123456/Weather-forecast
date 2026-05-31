package com.example.demo;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;

@RestController
@CrossOrigin("*")
public class AQIController {

    private final String API_KEY = "a089137c7e4e682410d77118da9f3a6f";

    @GetMapping("/aqi/{lat}/{lon}")
    public String getAQI(
            @PathVariable String lat,
            @PathVariable String lon
    ) {

        String url =
                "https://api.openweathermap.org/data/2.5/air_pollution?lat="
                        + lat
                        + "&lon="
                        + lon
                        + "&appid="
                        + API_KEY;

        RestTemplate restTemplate =
                new RestTemplate();

        return restTemplate.getForObject(
                url,
                String.class
        );
    }
}

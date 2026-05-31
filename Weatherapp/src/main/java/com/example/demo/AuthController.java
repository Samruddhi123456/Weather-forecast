package com.example.demo;





import com.example.demo.User;
import com.example.demo.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.web.bind.annotation.*;

@RestController

@CrossOrigin("*")

public class AuthController {

    @Autowired
    private UserRepository repository;

    @PostMapping("/register")
    public String register(
            @RequestBody User user
    ) {

        repository.save(user);

        return "SUCCESS";
    }

    @PostMapping("/login")
    public String login(
            @RequestBody User user
    ) {

        User existingUser =
                repository
                .findByUsernameAndPassword(
                        user.getUsername(),
                        user.getPassword()
                );

        if(existingUser != null) {

            return "SUCCESS";
        }

        return "FAIL";
    }
}
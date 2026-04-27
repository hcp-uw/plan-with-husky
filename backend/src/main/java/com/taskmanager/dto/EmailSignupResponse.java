package com.taskmanager.dto;

import com.taskmanager.entity.Subscriber;

import java.time.LocalDateTime;

public class EmailSignupResponse {

    private Long id;
    private String email;
    private LocalDateTime createdAt;

    public EmailSignupResponse() {
    }

    public EmailSignupResponse(Long id, String email, LocalDateTime createdAt) {
        this.id = id;
        this.email = email;
        this.createdAt = createdAt;
    }

    public static EmailSignupResponse fromSubscriber(Subscriber subscriber) {
        return new EmailSignupResponse(
            subscriber.getId(),
            subscriber.getEmail(),
            subscriber.getCreatedAt()
        );
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public LocalDateTime getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(LocalDateTime createdAt) {
        this.createdAt = createdAt;
    }
}
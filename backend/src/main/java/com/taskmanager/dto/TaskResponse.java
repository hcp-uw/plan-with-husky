package com.taskmanager.dto;

import com.taskmanager.entity.Task;

import java.time.LocalDateTime;

public class TaskResponse {

    private Long id;
    private String description;
    private String dueDate;
    private String category;
    private Integer points;
    private Boolean completed;
    private Long userId;
    private LocalDateTime createdAt;

    public TaskResponse() {}

    public TaskResponse(Long id, String description, String dueDate, String category, Integer points,
                        Boolean completed, Long userId, LocalDateTime createdAt) {
        this.id = id;
        this.description = description;
        this.dueDate = dueDate;
        this.category = category;
        this.points = points;
        this.completed = completed;
        this.userId = userId;
        this.createdAt = createdAt;
    }

    public static TaskResponse fromTask(Task task) {
        return new TaskResponse(
            task.getId(),
            task.getDescription(),
            task.getDueDate(),
            task.getCategory(),
            task.getPoints(),
            task.getCompleted(),
            task.getUser().getId(),
            task.getCreatedAt()
        );
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getDueDate() {
        return dueDate;
    }

    public void setDueDate(String dueDate) {
        this.dueDate = dueDate;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public Integer getPoints() {
        return points;
    }

    public void setPoints(Integer points) {
        this.points = points;
    }

    public Boolean getCompleted() {
        return completed;
    }

    public void setCompleted(Boolean completed) {
        this.completed = completed;
    }

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    public LocalDateTime getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(LocalDateTime createdAt) {
        this.createdAt = createdAt;
    }
}
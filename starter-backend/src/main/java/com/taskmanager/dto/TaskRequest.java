package com.taskmanager.dto;

import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

public class TaskRequest {

    @NotBlank(message = "Task description is required")
    @Size(max = 255, message = "Task description must be 255 characters or less")
    private String description;

    @Size(max = 50, message = "Due date must be 50 characters or less")
    private String dueDate;

    @Size(max = 100, message = "Category must be 100 characters or less")
    private String category;

    @Min(value = 0, message = "Points must be 0 or greater")
    private Integer points;

    public TaskRequest() {}

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
}
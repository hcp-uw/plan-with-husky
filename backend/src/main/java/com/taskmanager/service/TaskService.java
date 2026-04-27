package com.taskmanager.service;

import com.taskmanager.dto.TaskRequest;
import com.taskmanager.dto.TaskResponse;
import com.taskmanager.entity.Task;
import com.taskmanager.entity.User;
import com.taskmanager.repository.TaskRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class TaskService {

    @Autowired
    private TaskRepository taskRepository;

    @Autowired
    private UserService userService;

    @Transactional
    public TaskResponse createTask(Long userId, TaskRequest taskRequest) {
        User user = userService.getUserById(userId);

        Task task = new Task();
        task.setDescription(taskRequest.getDescription());
        task.setDueDate(taskRequest.getDueDate());
        task.setCategory(taskRequest.getCategory());
        task.setPoints(taskRequest.getPoints() == null ? 0 : taskRequest.getPoints());
        task.setCompleted(false);
        task.setUser(user);

        Task savedTask = taskRepository.save(task);
        return TaskResponse.fromTask(savedTask);
    }

    @Transactional(readOnly = true)
    public List<TaskResponse> getTasksByUserId(Long userId) {
        userService.getUserById(userId);

        return taskRepository.findByUserIdOrderByCreatedAtDesc(userId)
            .stream()
            .map(TaskResponse::fromTask)
            .toList();
    }
}
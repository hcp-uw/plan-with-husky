package com.taskmanager.service;

import com.taskmanager.dto.EmailSignupResponse;
import com.taskmanager.entity.Subscriber;
import com.taskmanager.repository.SubscriberRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class SubscriberService {

    @Autowired
    private SubscriberRepository subscriberRepository;

    @Transactional
    public EmailSignupResponse signupEmail(String email) {
        if (subscriberRepository.existsByEmail(email)) {
            throw new RuntimeException("Email is already subscribed");
        }

        Subscriber savedSubscriber = subscriberRepository.save(new Subscriber(email));
        return EmailSignupResponse.fromSubscriber(savedSubscriber);
    }
}
# Mockup

<img src="./resource/mockup1.png"/>
<img src="./resource/mockup2.png"/>
<img src="./resource/mockup3.png"/>

# Design

<img src="./resource/design.png"/>
<img src="./resource/design2.png"/>
<img src="./resource/posts-service.png"/>
<img src="./resource/comments-service.png"/>
<img src="./resource/react-app.png"/>

## Query problem

When we render page, each post, we will send a lots request to Comments service

<img src="./resource/query-problem.png"/>

It's easy to fix with monolith DB by query all but how we can do that with microservices has its own DB

# Event bus

<img src="./resource/async-communication.png"/>
We create query service get all post and its comments in one reqquest 
<img src="./resource/query-service.png"/>
<img src="./resource/query-service-db.png"/>

# Moderation service

<img src="./resource/moderation-service.png"/>
<img src="./resource/moderation-service2.png"/>
<img src="./resource/moderation-service-mockup.png"/>
<img src="./resource/moderation-service-db.png"/>

## Flow

<img src="./resource/moderation-service3.png"/>
<img src="./resource/moderation-service4.png"/>
<img src="./resource/moderation-service5.png"/>

# Dealing with Missing Events

## Service is broken a period of time and then live again

<img src="./resource/missing-event.png"/>

## Service is just implemented after product worked a period of time

<img src="./resource/missing-event2.png"/>

## Solution

<img src="./resource/missing-event3.png"/>

# Docker

<img src="./resource/docker0.png"/>
<img src="./resource/docker1.png"/>
<img src="./resource/docker2.png"/>

# K8s: Docker Desktop's Kuberentes

Check the version k8s client and server:
`kubectl version --short`

## Overview

<img src="./resource/k8s0.png"/>

- K8s will look up in your local machine docker image you built and setup it
- If it not available, then it will defualt looking out at Dokcer Hub

<img src="./resource/k8s1.png"/>
<img src="./resource/k8s2.png"/>
<img src="./resource/k8s3.png"/>

## Creating a pod

`/c/Workspace/blog/infra/k8s/posts.yml`
<img src="./resource/k8s4.png"/>

execute posts config file with: `kubectl apply -f posts.yaml`

<img src="./resource/k8s5.png"/>

when we run `kubectl exec -it ...`

- if we have more than one container inside this pod. It will ask us which container we wanna execute the command
- if not, it just run the command on the only container inside the pod

<img src="./resource/k8s6.png"/>

<img src="./resource/k8s7.png"/>

## service and networking

<img src="./resource/k8s8.png"/>
<img src="./resource/k8s9.png"/>
<img src="./resource/k8s10.png"/>
<img src="./resource/k8s11.png"/>
<img src="./resource/k8s12.png"/>

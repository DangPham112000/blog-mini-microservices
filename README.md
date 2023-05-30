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

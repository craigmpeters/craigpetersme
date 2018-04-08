---
title: "On the subject of content management systems"
date: 2018-04-08T20:37:14Z
draft: false
---

Content Management Systems have traditionally been systems developed on a platform which runs some code, hosts some files, and stores data around the content and application in the database.   

This is fine, but over time the amount of functionality has been added to them which has caused them in a lot of cases to be bloated.  Some additions are useful and can be used by an editorial, marketing or development team; but rarely are these compartmentalised in a way where you can easily disable or enable functionality.  

Some may include marketing systems, but what if you use Adobe Marketing Cloud? That would mean that benefit is not there, same with other functions within a CMS like e-commerce, what if you are not selling anything?  

Some application based CMS get this right and have something bareboned and then allow you to add or purchase modules - but what if these prevent you from upgrading by not being designed correctly? You are almost doomed in a land of not being supported in some way.  

The way I see it content management systems should be responsible for displaying content and not much else, and in the world where we have multiple channels where we want this content to be visible (TV, Asvertisement, Apps) it is more important than ever there is a single place to publish this information as that causes less hassle for content editors.  

Because of this I am a fan of headless CMS which allow you to simply create content and then interact through it with an API, want only a couple of articles? Want that advertising one? Just have a different query - you can even pass information about the person and add personalisation in some cases.

I am also a fan of what I am using here which is a static website generator, it allows you to easily write content and from that it can get published pretty easily and hosted at no cost.  When it comes down to it this makes a lot of sense, you can add a react or vue.js app to it and then proxy a web service in there for any other content or interactivity you want but overall no database needed at the back end and if you host it on S3 - barely any hosting costs as well.  I will write a guide to making a react app in Hugo at some point.

So there it is, stop buying and supporting massive overwraught CMS systems and keep it simple.

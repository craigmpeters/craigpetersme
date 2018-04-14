---
title: "Responsible disclosure"
date: 2018-04-14T20:54:00+01:00
draft: false
---

People make mistakes, this is why in software engineering testing is as important a role in development as developing the software itself.  if you cannot as a team delivery software which is reliable and secure this can damage your reputation as a business.  

It is because of this I am also a fan of things like big bounties - it is important that the right people look for anything you miss and a good bug bounty system coupled with a culture of giving priority to security means that you are doing things right. 

This is a story around how things were handled both well and poorly by the same company.

In August 2013 [Paul Price discovered a vulnerability](http://www.darkport.co.uk/moonpig-vulnerability/) in Moonpig.com, this exploit allowed use of an API to get personal data of other customers without authentication, this is a [missing functional level access control](https://www.owasp.org/index.php/Top_10_2013-A7-Missing_Function_Level_Access_Control) attack. 

Paul reported this issue to them in 2013, chased it again a year later and then just over 3 months later disclosed the exploit publically in order to protect customers. 

Responsible disclosure, the timeframes, and action is a subject of a lot of debate between information security professionals, some say this arms attackers to create exploits to take advantage of a vulnerability and others say that it is the only way, after all other methods have failed, to force the hand to fix a vulnerability.  

I sit in the second camp where I feel after an adequete amount of time, and telling them about these timescales ahead of time, is the most sensible way to approach it; because who knows who is accessing this data while it is not being fixed.  

The Moonpig bug was widely reported in the media at the time and because of this it was fixed quickly after reporting it, but they had taken around 18 months to fix a security problem which allowed people to gain access to PII, as a culture within an organisation this is something which had to change immediately.  

Shortly while reading about this I wondered if there was any other issues which they could have or the parent company photobox could have, and it turns out that photobox had an issue where an API endpoint exposed random PII when you hit it and had no rate limiting in front.  

I reported this to them on 7th January 2015 and a fix was developed, deployed and tested by 10th January 2015 meaning it had a 3 day turnaround of fixing this problem, which from 18 months is a big turnaround.  

Security should be the forefront of everything that a development team takes into consideration, and a culture of fixing these problems and, in some cases, rewarding those that find them should be the norm rather than the exception.  

What are your thoughts around this? What should a responsible amount of time be?
---
title: You've got (no) mail
description: "For a little over 24 hours, globally, exchange online was no longer such and there was an inability to send and recieve email. \_"
draft: false
---

For a little over 24 hours, globally, exchange online was no longer such and there was an inability to send and recieve email.  

![Email Icon](/uploads/IMG-3805.jpeg){.md:float-left} the moment there isn't really any particular root cause or reason for the outage initially happening but the main reason for it continuing seems to be additional load being added to the servers with additional failing health checks, obviously not good but this meant that they could not easily restore service.

The main thing this shows is that email itself is not a fantastic system to use as a core critical communication system and a lot of that is because of how email works.  When sending an email the source system looks at your domain record for a **MX** record,  that says what server to contact in order to send email to that domain, there can be multiple services in here with a different priority.  

Email is then sent over a specific port to that server and if it is successful then great else it goes to the next one in line.  Overall all well and good.

A lot of cloud based systems and SaaS products like Google Mail for Enterprise or Exchange Online are based around single cloud platforms so if one goes down they all go down, but as well as this there are a lot of other services which are in the orbit of an email service:

- Data Loss Prevention Systems
- Identity and Access Control Systems
- e-Discovery and legal systems
- Integration with AI based systems for search / productivity

Enterprise email services need to offer a lot more than just push email in modern times as well as things like redundancy, continuous deployment without downtime and the ability to self heal when it is a multi-tenant product.

As of me writing this there is not an enterprise capable multi-cloud SaaS Email platform which exists, and honestly given what has happened something like this could be something worthwhile.  A "Disaster recovery" Email system does exist where primarily it uses Exchange Online but then you can "failover" to Google Workspace which has your email syncronised over and then fail back afterwards and honestly [CloudM](https://www.cloudm.io) could be worth looking at if the pricing seems attractive.

There are also email protection systems like Mimecast which can be used in the event of an outage where if it is unable to deliver the mail you can provide webmail systems to people in the event of an outage using that system.

One thing through all of this is clear and that is using e-mail as an authentication mechanism (e.g. put in email and send a magic link as primary or only method of authentication) or as a single multi factor authentication system unless you have a resilient off-cloud disaster recovery option is not a sensible idea for companies anymore and certainly when purhcasing software like this to have a backup mechanism.

- How does email work?
- How do modern systems work?
- Can you multi-cloud email?
- Removing MFA for email paramount

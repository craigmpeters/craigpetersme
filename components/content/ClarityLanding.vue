<script setup>
const storeUrl = 'https://apps.apple.com/us/app/6751516278?ct=website'
const features = [
  { name: 'Make room for what matters.', label: 'YOUR TASKS, TOGETHER', image: 'tasks', alt: 'Clarity task list with dates and colour-coded categories', copy: 'Bring work, personal plans and everything in between into one calm place. Organise by category, add repeating tasks and choose what deserves your attention next.' },
  { name: 'Small steps. Stronger habits.', label: 'BUILD YOUR ROUTINE', image: 'habits', alt: 'Clarity habits showing reading and water goals with seven days of progress', copy: 'Set a daily goal, log a little progress and keep going. A rolling seven-day view helps you see the routine you’re building, one day at a time.' },
  { name: 'One task. Full focus.', label: 'FIND YOUR RHYTHM', image: 'focus', alt: 'Clarity Pomodoro timer running for a task', copy: 'Start a Pomodoro from a task and give it your attention. Choose a session from 5 to 25 minutes, with Live Activities keeping your timer close on iPhone.' },
  { name: 'Notice your progress.', label: 'SEE THE BIGGER PICTURE', image: 'progress', alt: 'Clarity statistics showing completed tasks, focus time, a heatmap and weekly targets', copy: 'Look back at completed tasks and focus time. Explore your productivity patterns and set weekly targets for the categories that matter to you.' },
]
useSeoMeta({
  title: 'Clarity — Tasks, habits & focus | Craig Peters',
  description: 'Make room for what matters with Clarity. Tasks, habits, Pomodoro focus and progress for iPhone, iPad, Apple Watch and Mac. All functionality is free.',
  ogTitle: 'Clarity — Make room for what matters',
  ogDescription: 'Tasks, habits and focus in one calm place. All functionality is free; Premium is purely cosmetic.',
  ogImage: 'https://www.craigpeters.me/clarity/showcase/tasks.webp',
})
</script>

<template>
  <div class="clarity-page">
    <section class="clarity-hero" aria-labelledby="clarity-title">
      <div class="hero-copy">
        <a href="#clarity-title" class="brand"><img src="/clarity/showcase/logo.webp" width="64" height="64" alt="" /><span>clarity</span></a>
        <p class="eyebrow">A LITTLE SPACE FOR YOUR DAY</p>
        <h1 id="clarity-title">Make room for<br />what matters.</h1>
        <p class="intro">Your tasks, habits and focus, together in one calm place. Less to keep in your head. More space for the things you want to do.</p>
        <a :href="storeUrl" class="store-link" aria-label="Download Clarity on the App Store"><img src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" alt="Download on the App Store" width="168" height="56" /></a>
        <p class="platforms">iPhone · iPad · Apple Watch · Mac</p>
        <a class="explore" href="#clarity-features">Take a closer look <span aria-hidden="true">↓</span></a>
      </div>
      <div class="hero-art"><img src="/clarity/showcase/tasks.webp" width="660" height="1434" alt="Clarity: make room for what matters, with a colour-coded task list" fetchpriority="high" /></div>
    </section>

    <section class="free-banner" aria-labelledby="free-title"><span class="free-symbol" aria-hidden="true">✓</span><div><h2 id="free-title">All functionality. Free.</h2><p>Tasks, habits, focus and statistics are available to everyone. Premium is entirely optional and purely cosmetic: personalise your look and support Clarity.</p></div></section>

    <section id="clarity-features" aria-labelledby="features-title">
      <div class="section-heading"><p class="eyebrow">A CALMER WAY TO GET THINGS DONE</p><h2 id="features-title">From your first task<br />to your next small win.</h2></div>
      <div class="feature-grid"><article v-for="feature in features" :key="feature.image" class="feature-card">
        <a :href="`/clarity/showcase/${feature.image}.webp`" :aria-label="`View full screenshot: ${feature.alt}`" class="screenshot-link"><img :src="`/clarity/showcase/${feature.image}.webp`" :alt="feature.alt" width="660" height="1434" loading="lazy" /></a>
        <div class="feature-copy"><p class="eyebrow">{{ feature.label }}</p><h3>{{ feature.name }}</h3><p>{{ feature.copy }}</p></div>
      </article></div>
    </section>

    <section class="device-section" aria-labelledby="devices-title"><div><p class="eyebrow">AT YOUR DESK. ON THE GO.</p><h2 id="devices-title">A little clarity,<br />wherever you are.</h2><p>Plan on iPad or Mac, keep your tasks close on iPhone, and check in from your Apple Watch. Clarity is made for the Apple devices you use throughout your day.</p><a :href="storeUrl" class="text-link">Find Clarity on the App Store <span aria-hidden="true">↗</span></a></div><img src="/clarity/showcase/ipad.webp" alt="Clarity task list on iPad" width="900" height="1200" loading="lazy" /></section>

    <footer class="clarity-footer"><div><h2>Start with a little clarity.</h2><p>Your next task. Your next habit. Your own pace.</p></div><a :href="storeUrl" class="download-button">Get Clarity <span aria-hidden="true">↗</span></a><nav aria-label="Clarity information"><NuxtLink to="/clarity/privacy">Privacy policy</NuxtLink><a href="mailto:clarity@craigpeters.me">Contact &amp; support</a></nav></footer>
  </div>
</template>

<style scoped>
.clarity-page { --ink:#173c34; --muted:#4c615a; color:var(--ink); max-width:1240px; margin:0 auto; }
.clarity-page p { line-height:1.75; }
.clarity-hero { background:#f8eedf; border-radius:28px; display:grid; grid-template-columns:1.15fr 1fr; overflow:hidden; align-items:center; }
.hero-copy { padding:clamp(24px,4vw,60px); }
.brand { display:inline-flex; align-items:center; gap:14px; font-size:32px; font-weight:750; text-decoration:none; }
.brand img { background:white; border-radius:16px; padding:5px; }
.eyebrow { font-size:11px; font-weight:700; letter-spacing:.14em; margin:24px 0 14px; }
h1 { font-size:clamp(36px,4.2vw,64px); font-weight:750; line-height:1.08; letter-spacing:-.045em; }
.intro { font-size:17px; margin:24px 0; max-width:430px; }
.store-link { display:inline-block; border-radius:10px; }
.store-link img { width:168px; height:56px; }
.platforms { font-size:11px; color:var(--muted); margin:12px 0 24px; }
.explore,.text-link { font-size:13px; font-weight:650; text-decoration:underline; text-underline-offset:5px; }
.explore span { margin-left:12px; }
.hero-art { background:#254ce5; align-self:stretch; display:flex; justify-content:center; align-items:center; padding:28px; }
.hero-art img { width:100%; max-width:310px; height:auto; border-radius:12px; box-shadow:0 16px 42px #10247740; }
.free-banner { display:flex; gap:22px; padding:30px 34px; margin:28px 0 70px; border:1px solid #cee2d4; background:#edf7ef; border-radius:20px; align-items:flex-start; }
.free-symbol { width:38px; height:38px; border-radius:50%; background:#173c34; color:white; flex-shrink:0; display:grid; place-items:center; }
h2 { font-size:clamp(26px,3vw,40px); line-height:1.2; letter-spacing:-.035em; font-weight:700; }
.free-banner h2 { font-size:23px; }
.free-banner p { margin-top:8px; font-size:14px; max-width:850px; }
#clarity-features { scroll-margin-top:85px; }
.section-heading { margin-bottom:32px; }
.feature-grid { display:grid; grid-template-columns:repeat(4,minmax(0,1fr)); gap:20px; }
.feature-card { min-width:0; }
.screenshot-link { display:block; border-radius:16px; overflow:hidden; transition:transform .2s; }
.screenshot-link:hover { transform:translateY(-4px); }
.screenshot-link img { width:100%; height:auto; }
.feature-copy { padding:0 4px; }
.feature-copy .eyebrow { font-size:9px; letter-spacing:.09em; margin:22px 0 10px; }
h3 { font-size:21px; line-height:1.25; font-weight:650; letter-spacing:-.025em; }
.feature-copy > p:last-child { font-size:13px; margin-top:14px; color:var(--muted); }
.device-section { margin:72px 0; display:grid; grid-template-columns:1fr 1fr; align-items:center; gap:44px; background:#ece7fa; border-radius:24px; padding:40px; }
.device-section p:not(.eyebrow) { font-size:15px; margin:22px 0; }
.device-section img { max-height:470px; width:auto; max-width:100%; justify-self:center; border-radius:14px; }
.clarity-footer { border-top:1px solid #d9e0db; padding:36px 0 12px; display:flex; align-items:center; justify-content:space-between; flex-wrap:wrap; gap:24px; }
.clarity-footer h2 { font-size:26px; }
.clarity-footer p { font-size:13px; margin-top:8px; color:var(--muted); }
.download-button { background:#173c34; color:white; border-radius:50px; padding:16px 25px; font-size:14px; font-weight:650; }
.clarity-footer nav { display:flex; width:100%; gap:24px; font-size:12px; text-decoration:underline; text-underline-offset:4px; }
a:focus-visible { outline:3px solid #0066d1; outline-offset:5px; }
:global(.dark .clarity-page) { --ink:#eaf1ed; --muted:#bacbc1; }
:global(.dark .clarity-hero),:global(.dark .device-section) { color:#173c34; }
:global(.dark .platforms) { color:#4c615a; }
:global(.dark .free-banner) { background:#203c33; border-color:#456454; }
@media(max-width:1100px) { .feature-grid { grid-template-columns:repeat(2,minmax(0,1fr)); gap:36px 24px; } .hero-copy { padding:26px; } .hero-art { padding:18px; } }
@media(max-width:600px) { .clarity-hero { grid-template-columns:1fr; border-radius:20px; } .hero-copy { padding:28px 24px; } .hero-art { padding:24px; } .hero-art img { max-width:250px; } .free-banner { padding:24px 20px; gap:14px; margin-bottom:48px; } .free-symbol { width:28px; height:28px; } .feature-grid { gap:30px 14px; } h3 { font-size:18px; } .feature-copy > p:last-child { font-size:12px; } .feature-copy .eyebrow { font-size:8px; } .device-section { grid-template-columns:1fr; padding:26px; gap:26px; margin:48px 0; } .device-section img { max-height:400px; } }
@media(prefers-reduced-motion:reduce) { .screenshot-link { transition:none; } }
</style>

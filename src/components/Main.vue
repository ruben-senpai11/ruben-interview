<script setup lang="ts">
import Filters from "./Filters.vue"
import Project from "./Project.vue"
import ThemeMode from "./ThemeMode.vue"

import stratosedi from "../assets/img/strastosedi1.png"
import evren from "../assets/img/Even Shah.png"
import bandage from "../assets/img/bandage e-commerce.png"
import lemonplet from "../assets/img/Lemonplet-responsive1.png"
import bunny from "../assets/img/bunny-management.png"
import fig from "../assets/img/joystick-purple.webp"
import mangaverse from "../assets/img/mangaverse.png"
import portfolio from "../assets/img/portfolio.png"
import sharelock from "../assets/img/Sharelock.jpeg"
import interview from "../assets/img/Interview.png"

import navbar from "../assets/img/responsive-navbar.png"
import soon from "../assets/img/coming-soon.webp"

</script>

<template>
  <div class="py-lg-5 py-4">
    <div class="d-flex flex-column gap-lg-5 gap-3">
      <h3 class="text-[48px] my-2 mt-3 ">A pick of my best side-projects & Freelance missions</h3>
      <Filters :languages="['PHP', 'Liquid', 'HTML & CSS', 'JavaScript', 'TypeScript']"
        :frameworks="['Laravel', 'Remix', 'Next.js', 'Vue.js']" :libraries="['jQUERY', 'React']"
        :cssFrameworks="['Bootstrap', 'Tailwind CSS', 'Polaris']" :databases="['MySQL', 'PostgreSQL', 'Prisma']"
        :apis="['REST-API', 'GraphQL']" :status="['Production', 'Developement', 'Paused', 'Stopped']" />
      <section class="main d-flex flex-column gap-12">
        <div class="summary d-flex flex-column ">
        </div>
        <div class="d-flex flex-column gap-8">
          <!-- <h5 class="mb-5 mt-0">with a bunch of filter to enhance stack understanding, enjoy!</h5> -->
          <div class="projects-grid ">
            <Project :image="bunny" title="Bunny Management" :library="['jQUERY']" :framework="['Laravel']"
              :language="['PHP']" :cssFramework="['Bootstrap']" :api="['REST-API']" :database="['MySQL',]"
              link="https://whitedev.vercel.app/video/bunny.webm"
              description="With given templates, I created dynamic forms, custom pages & datatables and an awesome landing page" />
            <Project :image="lemonplet" title="Lemönplet" :library="['jQUERY']"
              :language="['Liquid', 'HTML & CSS', 'JavaScript']" link="https://lemonplet.com/"
              description="We given this store a new look with a pixel-perfect design mockup into Shopify theme translation" />
            <Project :image="mangaverse" title="Mangaverse" :framework="['Next.js']" :library="['React']"
              :language="['TypeScript']" :cssFramework="['Tailwind CSS']" :api="['GraphQL']" :database="['PostgreSQL']"
              link="https://my-mangaverse.vercel.app/"
              description="Building a unique web app involving multiple-theme switch, server actions, API, design, user-centric approach..." />
            <Project :image="interview" title="Ruben Interview"
              description="I figured out to master Vue.js at a new level of proficency. I'm building so an app who includes as well innovative design & structure as advanced tests."
              :language="['TypeScript']" :css-framework="['Bootstrap']" :library="['React', 'GSAP']"
              :framework="['Vue.js']" />
            <Project :image="bandage" title="Bandage E-commerce" :library="['React']" :framework="[]"
              :language="['TypeScript']" :cssFramework="['Tailwind CSS']" :database="[]"
              link="https://bandage-ecommerce-ui.vercel.app/"
              description="Translating Figma mockup into a pixel-perfect website. I've improved UX with lazyload, animations..." />
            <Project :image="stratosedi" title="Stratos EDI Shopify App" :library="['React']" :framework="['Remix']"
              :language="['TypeScript']" :cssFramework="['Polaris']" :api="['GraphQL']" :database="['Prisma',]" link=""
              description="Building an app to enable merchants to add insurance to given products of their stores from the dashboard." />
            <Project :image="evren" title="Evren Shah Portfolio" :library="['React']" :framework="[]"
              :language="['HTML & CSS', 'TypeScript']" :cssFramework="[]" :database="[]"
              link="https://portofolio-rosy-eight.vercel.app/"
              description="Integration of a frontend developer portfolio mockup in a react website. I've added a beta double theme switch" />
            <Project :image="fig" title="Fig Intranet" :library="['jQUERY']" :framework="[]"
              :language="['PHP', 'HTML & CSS']" :cssFramework="['Bootstrap']" :database="[]" link=""
              description="For the video games events, we've built this website accessible not through internet but local network to supply essential information to our guests." />
            <Project :image="sharelock" title="Sharelock Shopify App" :library="['React']" :framework="['Remix']"
              :language="['TypeScript']" :cssFramework="['Polaris']" :api="['GraphQL']" :database="['Prisma',]" link=""
              description="Building from scratch a unique app to improve orders tracking by the organization merchants" />
            <Project :image="portfolio" title="My Portfolio" :library="['React']" :framework="['Next.js']"
              :language="['TypeScript']" :cssFramework="['Tailwind CSS']" :database="[]"
              link="https://whitedev.vercel.app/"
              description="Crafted a simple & unique portfolio to tell you about me. It involved out-of-the-box thinking, user-centered approach and so on..." />
            <Project :image="navbar" title="Responsive Navbar" :library="[]" :framework="[]"
              :language="['HTML & CSS', 'JavaScript']" :cssFramework="[]" :database="[]"
              link="https://github.com/ruben-senpai11/Reponsive-Navbar"
              description="Fully Responsive Navbar built from scratch. If creating Navbar stucks, here is a built-from-scratch and easy-to-understand responsive navbar to help you stand out." />
            <Project :image="soon" title="Multiple Themes Switches" link="" description="Coming soon..." />
            <Project :image="soon" title="Infinite Scroll" link="" description="Coming soon..." />
            <Project :image="soon" title="Responsive Grid" link="" description="Coming soon..." />
          </div>
        </div>
      </section>
      <section class="say-hello d-flex flex-column gap-4 my-10">
        <h2>Say Hello</h2>
        <div class="d-flex justify-content-between ">
        <div class="socials d-flex gap-4 gap-sm-4 flex-wrap ">
          <span class="d-flex gap-2">
            <svg viewBox="0 0 98 96" width="22" height="22" preserveAspectRatio="xMidYMid meet"
              xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd"
                d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z"
                fill="currentColor" />
            </svg>
            <a href="https://github.com/ruben-senpai11" target="_blank" class="d-flex gap-2">
              Github
              <svg width="16" height="16" fill="currentColor" class="bi bi-arrow-up-right" viewBox="0 0 16 16">
                <path fillRule="evenodd"
                  d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z" />
              </svg>
            </a>
          </span>
          <span class="d-flex gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" height="22" viewBox="0 0 72 72" width="22">
              <g fill="none" fillRule="evenodd">
                <path
                  d="M8,72 L64,72 C68.418278,72 72,68.418278 72,64 L72,8 C72,3.581722 68.418278,-8.11624501e-16 64,0 L8,0 C3.581722,8.11624501e-16 -5.41083001e-16,3.581722 0,8 L0,64 C5.41083001e-16,68.418278 3.581722,72 8,72 Z"
                  fill="#007EBB" />
                <path
                  d="M62,62 L51.315625,62 L51.315625,43.8021149 C51.315625,38.8127542 49.4197917,36.0245323 45.4707031,36.0245323 C41.1746094,36.0245323 38.9300781,38.9261103 38.9300781,43.8021149 L38.9300781,62 L28.6333333,62 L28.6333333,27.3333333 L38.9300781,27.3333333 L38.9300781,32.0029283 C38.9300781,32.0029283 42.0260417,26.2742151 49.3825521,26.2742151 C56.7356771,26.2742151 62,30.7644705 62,40.051212 L62,62 Z M16.349349,22.7940133 C12.8420573,22.7940133 10,19.9296567 10,16.3970067 C10,12.8643566 12.8420573,10 16.349349,10 C19.8566406,10 22.6970052,12.8643566 22.6970052,16.3970067 C22.6970052,19.9296567 19.8566406,22.7940133 16.349349,22.7940133 Z M11.0325521,62 L21.769401,62 L21.769401,27.3333333 L11.0325521,27.3333333 L11.0325521,62 Z"
                  fill="#FFF" />
              </g>
            </svg>
            <a href="https://www.linkedin.com/in/ruben-white22/" target="_blank" class="d-flex gap-2">
              Linkedin
              <svg width="16" height="16" fill="currentColor" class="bi bi-arrow-up-right" viewBox="0 0 16 16">
                <path fillRule="evenodd"
                  d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z" />
              </svg>
            </a>
          </span>
          <span class="d-flex gap-2">
            <a href="https://www.linkedin.com/in/ruben-white22/" target="_blank" class="d-flex gap-2 primary ">My
              Website
              <svg width="16" height="16" fill="currentColor" class="bi bi-arrow-up-right" viewBox="0 0 16 16">
                <path fillRule="evenodd"
                  d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z" />
              </svg>
            </a>
          </span>
        </div>
        <div class="footer-theme">
          <ThemeMode />
        </div>
      </div>
      </section>
    </div>
  </div>
</template>

<style>
.summary p {
  font-size: 18px;
}

.main {
  margin: auto;
}

.projects-grid {
  padding-top: .5em;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 4%;
}

.say-hello a {
  text-decoration: none;
  color: var(--foreground-color);
}



@media screen and (max-width: 1200px) {

  .projects-grid {
    gap: 2.9%
  }
}

@media screen and (max-width: 1024px) {
  .projects-grid {
    gap: 3%
  }
}

@media (min-width: 670px) {
  .footer-theme {
    display: none;
  }
}

@media screen and (max-width: 670px) {

  .projects-grid {
    padding-top: 20px;
    gap: 5%;
  }

  .footer-theme {
    display: flex;
    align-self: flex-start;
  }
}
</style>

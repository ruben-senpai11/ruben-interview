<script setup lang="ts">
import Filters from "./Filters.vue"
import Project from "./Project.vue"

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
import soon from "../assets/img/coming-soon.webp"

import navbar from "../assets/img/responsive-navbar.png"
</script>

<template>
  <div class="py-lg-5 py-4">
    <div class="d-flex flex-column gap-lg-5 gap-3">
      <h3 class="text-[48px] my-2 mt-3 title ">A pick of my best side-projects & Freelance missions</h3>
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

@media screen and (max-width: 670px) {

  .projects-grid {
    padding-top: 20px;
    gap: 5%;
  }

  .title {
    margin: 35px 0 20px 0 !important;
  }

}
</style>

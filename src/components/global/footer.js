import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import { Link } from 'react-router-dom';
function Footer() {
  return <div class="mx-auto max-w-fit footer-div flex-flex-col bg-gray-50">
  <div class="flex flex-row font-sans">
    <div class="about-social-icons ml-3">
      <div class="flex w-64 flex-col">
        <div><img class="h-20 w-20" src="/favicon.ico" /></div>
        <div><p class="font-semibold">Responsive Social Media icons & buttons built with Tailwind CSS. Facebook, Twitter, Google, Instagram, LinkedIn, YouTube, GitHub, Slack, Reddit & more.</p></div>
        <div class="space-x- my-8 flex text-gray-700">

          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" class="mr-4 h-5 w-5">
            <path fill="currentColor" d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
          </svg>

          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="mr-4 h-5 w-5">
            <path fill="currentColor" d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
          </svg>


          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="mr-4 h-5 w-5">
            <path fill="currentColor" d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
          </svg>


          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="mr-4 h-5 w-5">
            <path fill="currentColor" d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" />
          </svg>

          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="h-5 w-5">
            <path fill="currentColor" d="M440.3 203.5c-15 0-28.2 6.2-37.9 15.9-35.7-24.7-83.8-40.6-137.1-42.3L293 52.3l88.2 19.8c0 21.6 17.6 39.2 39.2 39.2 22 0 39.7-18.1 39.7-39.7s-17.6-39.7-39.7-39.7c-15.4 0-28.7 9.3-35.3 22l-97.4-21.6c-4.9-1.3-9.7 2.2-11 7.1L246.3 177c-52.9 2.2-100.5 18.1-136.3 42.8-9.7-10.1-23.4-16.3-38.4-16.3-55.6 0-73.8 74.6-22.9 100.1-1.8 7.9-2.6 16.3-2.6 24.7 0 83.8 94.4 151.7 210.3 151.7 116.4 0 210.8-67.9 210.8-151.7 0-8.4-.9-17.2-3.1-25.1 49.9-25.6 31.5-99.7-23.8-99.7zM129.4 308.9c0-22 17.6-39.7 39.7-39.7 21.6 0 39.2 17.6 39.2 39.7 0 21.6-17.6 39.2-39.2 39.2-22 .1-39.7-17.6-39.7-39.2zm214.3 93.5c-36.4 36.4-139.1 36.4-175.5 0-4-3.5-4-9.7 0-13.7 3.5-3.5 9.7-3.5 13.2 0 27.8 28.5 120 29 149 0 3.5-3.5 9.7-3.5 13.2 0 4.1 4 4.1 10.2.1 13.7zm-.8-54.2c-21.6 0-39.2-17.6-39.2-39.2 0-22 17.6-39.7 39.2-39.7 22 0 39.7 17.6 39.7 39.7-.1 21.5-17.7 39.2-39.7 39.2z" />
          </svg>
        </div>
      </div>
    </div>
    <div class="footer-links mt-4 ml-56 flex flex-row">
      <div class="mx-28 flex flex-col">
        <a href="#" class="text-xl font-bold">Solutions</a>
        <a href="#" class="my-2">Marketing</a>
        <a href="#" class="my-2">Analytics</a>
        <a href="#" class="my-2">Commerce</a>
        <a href="#" class="my-2">Insights</a>
      </div>
      <div class="mx-28 flex flex-col">
        <a href="#" class="text-xl font-bold">Support</a>
        <a href="#" class="my-2">Pricing</a>
        <a href="#" class="my-2">Documentation</a>
        <a href="#" class="my-2">Guides</a>
        <a href="#" class="my-2">API Status</a>
      </div>
      <div class="mx-28 flex flex-col">
        <a href="#" class="text-xl font-bold">Company</a>
        <a href="#" class="my-2">About</a>
        <a href="#" class="my-2">BLog</a>
        <a href="#" class="my-2">Jobs</a>
        <a href="#" class="my-2">Press</a>
      </div>
      <div class="mx-28 flex flex-col">
        <a href="#" class="text-xl font-bold">Legal</a>
        <a href="#" class="my-2">Claim</a>
        <a href="#" class="my-2">Privacy</a>
        <a href="#" class="my-2">Terms</a>
        <a href="#" class="my-2">Conditions</a>
      </div>
    </div>
  </div>
  <div>
    <div class="mx-96"><hr class="max-w-7xl" /></div>
    <p class="my-4 justify-center text-center">&copy; 2020 Workflow, Inc. All rights reserved.</p>
  </div>
</div>

}

export default Footer;

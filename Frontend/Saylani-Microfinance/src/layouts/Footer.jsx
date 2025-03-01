import React from 'react'

function Footer() {
  return (
    <>
    <footer class="container mx-auto py-16 px-3 mt-48 mb-8 text-gray-800">
    <div class="flex -mx-3">
        <div class="flex-1 px-3">
            <h2 class="text-lg font-semibold">About Us</h2>
            <p class="mt-5">Ridiculus mus mauris vitae ultricies leo integer malesuada nunc.
            </p>
        </div>
        <div class="flex-1 px-3">
            <h2 class="text-lg font-semibold">Important Links</h2>
            <ul class="mt-4 leading-loose">
                <li><a href="https://codebushi.com">Terms &amp; Conditions</a></li>
                <li><a href="https://codebushi.com">Privacy Policy</a></li>
            </ul>
        </div>
        <div class="flex-1 px-3">
            <h2 class="text-lg font-semibold">Social Media</h2>
            <ul class="mt-4 leading-loose">
                <li><a href="https://dev.to/changoman">Dev.to</a></li>
                <li><a href="https://twitter.com/HuntaroSan">Twitter</a></li>
                <li><a href="https://github.com/codebushi/gatsby-starter-lander">GitHub</a></li>
            </ul>
        </div>
    </div>
    </footer>
    </>
  )
}

export default Footer
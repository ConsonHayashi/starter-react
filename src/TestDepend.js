import './test.css';

import React, { useEffect } from 'react';

import anime from 'animejs/lib/anime.es.js';
import Chart from 'chart.js/dist/chart';
import { Link } from 'react-router-dom';

export function TestDepend () {
  return (
    <>
      <main>
        <h2>Welcome to the homepage!</h2>
        <p>You can do this, I believe in you.</p>
      </main>
      <nav>
        <Link to="test/animejs">Test anime.js Page</Link>
        <br />
        <Link to="test/chartjs">Test chart.js Page</Link>
        <br />
        <Link to="test/tailwindcss">Test ailwind.css Page</Link>
        <br />
        <Link to="test/icon">Test icon.css Page</Link>
      </nav>
    </>
  )
}

export function TestChartjs () {
  useEffect(() => {
    const ctx = document.getElementById('myChart').getContext('2d');
    const myChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
          label: '# of Votes',
          data: [12, 19, 3, 5, 2, 3],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  });
  return (
    <canvas id="myChart" width="400" height="400"></canvas>
  )
}

export function TestAnijs () {

  useEffect(() => {
    anime({
      targets: '#box',
      translateX: 250,
      rotate: '1turn',
      backgroundColor: '#FFF',
      duration: 800
    });
  });
  return (
    <div id='box' class="container center">
      <p class="scroll-me">Just scroll the window ;</p>
      <div
        class="sentences"
        data-anijs="if:mouseover, do: bounce animated, to: .learn"
      >
        <p>
          *<span class="anijs-if anijs-reserved-word">If</span>
          <span>scroll,</span>
          <span class="anijs-on anijs-reserved-word">On</span>
          <span>window,</span>
          <span class="anijs-do anijs-reserved-word">Do</span>
          <span class="do-value">rollIn animated</span>
          <span class="anijs-to anijs-reserved-word">To</span>
          <span class="to-value">.orange,</span>
          <span class="anijs-do anijs-reserved-word">Before</span>
          <span class="do-value">$scrollReveal</span>
        </p>
      </div>

      <div
        class="item orange"
        data-anijs="if: scroll, on: window, do: rollIn animated, before: $scrollReveal repeat"
      >
        <i class="fa fa-behance"></i>
      </div>
      <div
        class="item pink"
        data-anijs="if: scroll, on: window, do: bounceIn animated, before: $scrollReveal"
      >
        <i class="fa fa-pinterest"></i>
      </div>
      <div
        class="item green"
        data-anijs="if: scroll, on: window, do: rotateIn animated, before: $scrollReveal"
      >
        <i class="fa fa-dribbble"></i>
      </div>
      <div
        class="item blue"
        data-anijs="if: scroll, on: window, do: rubberBand animated, before: $scrollReveal"
      >
        <i class="fa fa-dropbox"></i>
      </div>
      <div
        class="item orange"
        data-anijs="if: scroll, on: window, do: rollIn animated, before: $scrollReveal"
      >
        <i class="fa fa-html5"></i>
      </div>
      <div
        class="item pink"
        data-anijs="if: scroll, on: window, do: bounceIn animated, before: $scrollReveal"
      >
        <i class="fa fa-wordpress"></i>
      </div>
      <div
        class="item green"
        data-anijs="if: scroll, on: window, do: rotateIn animated, before: $scrollReveal"
      >
        <i class="fa fa-reddit"></i>
      </div>
      <div
        class="item blue"
        data-anijs="if: scroll, on: window, do: rubberBand animated, before: $scrollReveal"
      >
        <i class="fa fa-umbrella"></i>
      </div>
    </div>
  )
}

export function TestIcon () {
  return (
    <div>
      <span class="material-icons">account_circle</span>
      <i class="fa fa-apple-pay"></i>
    </div>
  )
}

export function TestTailWind () {
  return (
    <figure class="md:flex bg-gray-100 rounded-xl p-8 md:p-0">
      <img
        class="w-32 h-32 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto"
        src="/sarah-dayan.jpg"
        alt=""
        width="384"
        height="512"
      />
      <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
        <blockquote>
          <p class="text-lg font-semibold">
            “Tailwind CSS is the only framework that I've seen scale on large
            teams. It’s easy to customize, adapts to any design, and the build
            size is tiny.”
          </p>
        </blockquote>
        <figcaption class="font-medium">
          <div class="text-cyan-600">Sarah Dayan</div>
          <div class="text-gray-500">Staff Engineer, Algolia</div>
        </figcaption>
      </div>
    </figure>
  )
}

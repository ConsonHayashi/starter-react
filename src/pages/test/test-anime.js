import './test.css';

import React, { useEffect } from 'react';

import anime from 'animejs/lib/anime.es.js';

import { Center } from '../../components/contriant/center';
import { Page } from '../../components/contriant/pages';

export function TestAnijs() {
  useEffect(() => {
    anime({
      targets: '#box',
      translateX: 250,
      rotate: '1turn',
      backgroundColor: '#FFF',
      duration: 800,
    })
  })
  return (
    <Page>
      <Center>
        <div id="box" class="container center">
          <p class="scroll-me">Just init;</p>

          <div class="item orange">
            <i class="fa fa-behance"></i>
          </div>
          <div class="item pink">
            <i class="fa fa-pinterest"></i>
          </div>
          <div class="item green">
            <i class="fa fa-dribbble"></i>
          </div>
          <div class="item blue">
            <i class="fa fa-dropbox"></i>
          </div>
          <div class="item orange">
            <i class="fa fa-html5"></i>
          </div>
          <div class="item pink">
            <i class="fa fa-wordpress"></i>
          </div>
          <div class="item green">
            <i class="fa fa-reddit"></i>
          </div>
          <div class="item blue">
            <i class="fa fa-umbrella"></i>
          </div>
        </div>
      </Center>
    </Page>
  )
}

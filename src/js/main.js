// import './lib/modernizr-custom.js';

import * as utils from './utils/utils';
import * as globals from './utils/globals';

import carousel from './utils/carousel';
import fixed from './utils/fixed';
import objectFitImages from 'object-fit-images';

document.addEventListener("DOMContentLoaded", () => {
	objectFitImages();
}, false);

document.body.onload = addGrid;

function addGrid() {
	let grid_item = document.querySelector('.grille');
	let taille = document.body.offsetHeight / 10;

	for (let i = 0; i < taille; i++) {
		let new_row = document.createElement('div');
		new_row.classList.add(`grid-item${[i]}`);
		grid_item.appendChild(new_row);
	}
}

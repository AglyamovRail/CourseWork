import HeaderComponent from './view/header-component.js';
import PersonalDataComponent from './view/personal-data-component.js';
import PetsAddComponent from './view/pets-add-component.js';
import { render, RenderPosition } from './framework/render.js';
import PetsBoardPresenter from './presenter/pets-board-presenter.js';

const bodyContainer = document.querySelector('.board-app');
const PersonalDataContainer = document.querySelector('.personal-data');
const PetsDataContainer = document.querySelector('.pets-data')

render(new HeaderComponent(), bodyContainer, RenderPosition.BEFOREBEGIN);
render(new PersonalDataComponent(), PersonalDataContainer);
render(new PetsAddComponent(), PetsDataContainer);

const petsBoardPresenter = new PetsBoardPresenter(PetsDataContainer);
petsBoardPresenter.init();

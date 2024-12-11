import { render, RenderPosition } from '../framework/render.js';
import { generateUniqueId } from '../utils.js';
import PetsDataComponent from '../view/pets-data-component.js';
import ModalAddPetComponent from '../view/modal-add-pet-component.js';
import ModalEditPetComponent from '../view/modal-edit-pet-component.js';
import PetsModel from '../model/pet-model.js';

export default class PetsBoardPresenter {
    constructor(container) {
        this.container = container;
        this.model = new PetsModel();
        this.petsContainer = null;
        this.modal = null;
        this.isLoading = true;
    }

    async init() {
        this.#renderBaseStructure();
        this.#renderLoading();
        await this.model.init();
        this.isLoading = false;
        this._renderPets();
        const addPetButton = document.querySelector('.add_new_pets');
        addPetButton.addEventListener('click', this.#handleAddPetClick.bind(this));
    }

    #renderBaseStructure() {
        const petsSection =
            `<section class="pets-data">
                <h2 class="my_pets">Мои питомцы</h2>
                <div class="add_new_pets">
                    <img class="pets__img" src="images/pets.png">
                    <h1 class="add">ДОБАВИТЬ НОВОГО ПИТОМЦА</h1>
                </div>
                <div class="pets-data__list"></div>
            </section>`;
        this.container.innerHTML = petsSection;
        this.petsContainer = this.container.querySelector('.pets-data__list');
    }

    #renderLoading() {
        this.petsContainer.innerHTML = `
            <div class="loading">
                <p>Загрузка...</p>
            </div>
        `;
    }

    _renderPets() {
        if (this.isLoading) return;

        this.petsContainer.innerHTML = '';
        const pets = this.model.getPets();

        if (pets.length === 0) {
            this.#renderNoPets();
        } else {
            pets.forEach((pet) => {
                const petCard = this.#createPetCard(pet);
                render(petCard, this.petsContainer);
            });
        }
    }

    #renderNoPets() {
        this.petsContainer.innerHTML = `
            <div class="no-pets">
                <p>У вас пока нет питомцев.</p>
            </div>
        `;
    }

    #createPetCard(pet) {
        const petCard = new PetsDataComponent(pet);
        petCard.setEditHandler(() => this.#handleEditPet(pet));
        petCard.setDeleteHandler(() => this.#handleDeletePet(pet));
        return petCard;
    }

    async #handleEditPet(pet) {
        if (this.modal) {
            this.modal.removeElement();
            this.modal = null;
        }

        this.modal = new ModalEditPetComponent(pet);
        render(this.modal, document.body, RenderPosition.BEFOREEND);
        const form = this.modal.getElement().querySelector('.modal__form');
        const closeButton = this.modal.getElement().querySelector('.modal__close');
        const cancelButton = this.modal.getElement().querySelector('.modal__button--cancel');
        form.addEventListener('submit', async (event) => {
            event.preventDefault();
            const formData = new FormData(form);

            const updatedPet = {
                name: formData.get('name'),
                type: formData.get('type'),
                sex: formData.get('sex'),
                breed: formData.get('breed'),
                age: formData.get('age'),
            };
            await this.model.updatePet(pet.id, updatedPet);
            this._renderPets();
            this.#closeModal();
        });

        closeButton.addEventListener('click', () => this.#closeModal());
        cancelButton.addEventListener('click', () => this.#closeModal());
        this.modal.open();
    }

    async #handleDeletePet(pet) {
        await this.model.deletePet(pet.id);
        this._renderPets();
    }

    async #handleAddPetClick() {
        if (this.modal) {
            this.#closeModal();
        }

        this.modal = new ModalAddPetComponent();
        render(this.modal, document.body, RenderPosition.BEFOREEND);
        const closeButton = this.modal.getElement().querySelector('.modal__close');
        const addButton = this.modal.getElement().querySelector('.modal__button--add');
        const cancelButton = this.modal.getElement().querySelector('.modal__button--cancel');
        closeButton.addEventListener('click', this.#handleCancelButtonClick.bind(this));
        addButton.addEventListener('click', this.#handleAddButtonClick.bind(this));
        cancelButton.addEventListener('click', this.#handleCancelButtonClick.bind(this));
        this.modal.open();
    }

    async #handleAddButtonClick() {
        const form = this.modal.getElement().querySelector('.modal__form');
        const formData = new FormData(form);
        const newPet = {
            id: generateUniqueId(),
            name: formData.get('name'),
            type: formData.get('type'),
            sex: formData.get('sex'),
            breed: formData.get('breed'),
            age: formData.get('age'),
        };

        await this.model.addNewPet(newPet);
        this._renderPets();
        this.#closeModal();
    }

    #handleCancelButtonClick() {
        this.#closeModal();
    }

    #closeModal() {
        if (this.modal) {
            this.modal.close();
            this.modal = null;
        }
    }
}

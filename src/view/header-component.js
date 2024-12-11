import {createElement} from '../framework/render.js';

function createHeaderComponentTemplate() {
    return (
        `<header class="header">
        <div class="container">
            <div class="header__inner">
                <div class="header__logo"><img src="images/logo.png"></div>
                <nav>
                    <a class="nav__link" href="#">ЛИЧНЫЙ КАБИНЕТ</a>
                    <a class="nav__link" href="#">О НАС</a>
                    <a class="nav__link" href="#">НОВОСТИ И АКЦИИ</a>
                    <a class="nav__link" href="#">КОНТАКТЫ</a>
                    <a class="nav__link" href="#">БЛОГ</a>
                </nav>
                <div class="navigation">
                    <a class="navigation__link" href="#">КАЗАНЬ</a>
                </div>

            </div>
        </div>
    </header>`
      );
}


export default class HeaderComponent {
  getTemplate() {
    return createHeaderComponentTemplate();
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }
    return this.element;
  }


  removeElement() {
    this.element = null;
  }
}

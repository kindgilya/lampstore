class Button {
    _element = null;
		
    constructor({use, disabled, text,icon}, handler){
        this._use = use;
        this._disabled = disabled;
        this._text = text;
        this._icon = icon;
        this._handler = handler;
        this._init();
    }

    _init(){
        this._element = createElement(this._getTemplate());
        this._addListeners();
    }

	_getTemplate(){
        return `<button class="btn btn--${this._use}" ${this._disabled ? "disabled" : ""}>
            ${this._text ? this._text : ""}
            ${this._icon ? `<i class="${this._icon}"> </i>` : ""}
            </button>`
    }

	_addListeners() {
       this._element.addEventListener("click", () => this._handler()) 
	}

    get element() {
        return this._element;
    }
}
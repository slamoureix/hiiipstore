class Carousel {

    /**
     * @callback moveCallback
     * @param {number} responseCode
     */

    /**
     * @param {HTMLelement} element
     * @param {Object} options
     * @param {Object} {options.slidesToScroll=1} Nombre d'éléments à faire défiler
     * @param {Object} {options.slidesVisible=1} Nombre d'éléments visible
     * @param {boolean} {options.loop=false} doit-t-on bloucler en fin de carousel
     * @param {boolean} {options.infinite=false}
     * 
     * */
    constructor(element, options = {}) {
        this.element = element
        this.options = Object.assign({}, {
            slidesToScroll: 1,
            slidesVisible: 1,
            loop: false,
            infinite: false
        }, options)

        let children = [].slice.call(element.children);
        this.isMobile = false;
        this.currentItem = 0;
        this.moveCallbacks = [];

        //modif DOM
        this.root = this.createDivWithClass('carousel');
        this.container = this.createDivWithClass('carousel__container');
        this.root.setAttribute('tabindex', '0');
        this.root.appendChild(this.container);
        this.element.appendChild(this.root);
        this.items = children.map((child) => {
            let item = this.createDivWithClass('carousel__item');
            item.appendChild(child);
            return item;
        })

        if (this.options.infinite) {
            this.offset = (this.slidesVisible * 2) - 1;

            this.items = [
                ...this.items.slice(this.items.length - (this.offset)).map(item => item.cloneNode(true)),
                ...this.items,
                ...this.items.slice(0, this.offset).map(item => item.cloneNode(true)),
            ]
            this.gotoItem(this.offset, false);
            console.log(this.items)
        }
        this.items.forEach(item => this.container.appendChild(item))
        this.setStyle();
        this.createNavigation();

        //event
        this.moveCallbacks.forEach(cb => cb(this.currentItem));
        this.onWindowResize();

        window.addEventListener('resize', this.onWindowResize.bind(this));

        this.root.addEventListener('keyup', (e) => {
            if (e.key === 'ArrowRight' || e.key === 'Right') {
                this.next()
            } else if (e.key === 'ArrowLeft' || e.key === 'Left') {
                this.prev()
            }
        })
        if (this.options.infinite) {
            this.container.addEventListener('transitionend', this.resetInfinite.bind(this))
        }
    }

    createNavigation() {
        let nextButton = this.createDivWithClass('carousel__next');
        let prevButton = this.createDivWithClass('carousel__prev');
        this.root.appendChild(nextButton);
        this.root.appendChild(prevButton);

        nextButton.addEventListener('click', this.next.bind(this));
        prevButton.addEventListener('click', this.prev.bind(this));

        if (this.options.loop === true) {
            return
        }
        this.onMove(index => {
            if (index === 0) {
                prevButton.classList.add('carousel__prev-hidden')
            } else {
                prevButton.classList.remove('carousel__prev-hidden')
            }
            if (this.items[this.currentItem + this.slidesVisible] === undefined) {
                nextButton.classList.add('carousel__next-hidden')
                
            } else {
                nextButton.classList.remove('carousel__next-hidden')
            }
        })
    }

    next () {
        this.gotoItem(this.currentItem + this.slidesToScroll)
    }

    prev () {
        this.gotoItem(this.currentItem - this.slidesToScroll)
    }

    /**
     * 
     * @param {moveCallback} cb 
     */
    onMove(cb) {
        this.moveCallbacks.push(cb);

    }

    onWindowResize() {
        let mobile = window.innerWidth < 800
        if (mobile !== this.isMobile) {
            this.isMobile = mobile;
            this.setStyle();
            this.moveCallbacks.forEach(cb => cb(this.currentItem));
        }
    }

    /**
     * Déplace le carousel vers l'élément ciblé
     * @param {number} index 
     * @param {boolean} [animation = true]
     */
    gotoItem(index, animation = true) {
        let translateX = index * -100 / this.items.length;

        this.currentItem = index;

        if (index < 0) {
            if (this.options.loop) {
                index = this.items.length - this.options.slidesVisible
            } else {
                return
            }

        } else if (index >= this.items.length || (this.items[this.currentItem + this.options.slidesVisible] === undefined && index > this.currentItem)) {
            if (this.options.loop) {
                index = 0
            } else {
                return
            }
        }

        if (animation === false) {
            this.container.style.transition = 'none';
        }

        this.container.style.transform = 'translate3d(' + translateX + '%, 0, 0)';
        this.container.offsetHeight; // force le repaint

        if (animation === false) {
            this.container.style.transition = '';
        }
        

        this.moveCallbacks.forEach(cb => cb(index));
    }

    /**
     * Déplace le container pour donner une impression d'un slide infini
     * 
     */
    resetInfinite(){
        if ( this.currentItem <= this.options.slidesToScroll) {

            this.gotoItem(this.currentItem + this.items.length - 2 * this.offset, false);

        } else if (this.currentItem >= this.items.length - this.offset) {
            this.gotoItem(this.currentItem - (this.items.length - 2 * this.offset), false);
        } 
    }

    /**
     * applique les bonnes dimensions aux éléments du carrousel
     * 
     */
    setStyle() {
        let ratio = this.items.length / this.slidesVisible;
        this.container.style.width = (ratio * 100) + "%";
        this.items.forEach(item => item.style.width = ((100 / this.slidesVisible) / ratio) + "%")
    }

    /**
     * 
     * @param {string} className 
     * @returns {HTMLElement}
     */
    createDivWithClass(className) {
        let div = document.createElement('div')
        div.setAttribute('class', className);
        return div;
    }

    /**
     * @return {number}
     * 
     */
    get slidesToScroll() {
        return this.isMobile ? 1 : this.options.slidesToScroll;
    }

    /**
     * @return {number}
     * 
     */
    get slidesVisible() {
        return this.isMobile ? 1 : this.options.slidesVisible;
    }
}


let onReady = function() {

    new Carousel(document.querySelector('.gallery-container'), {
        slidesToScroll: 2,
        slidesVisible: 4,
        loop: false,
        infinite : true
    })
    
}

if (document.readyState !== 'loading') {
    onReady()
}

document.addEventListener('DOMContentLoaded', onReady)


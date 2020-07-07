import './polyfills';

/**
* Check if custom class exists.
*
* @param {HTMLElement} el [dom element]
* @param {String} checkClass  [check class, no dot]
*/
export function hasClass (el, checkClass) {
    return el.className.match(new RegExp('(\\s|^)'+checkClass+'(\\s|$)'));
}


/**
* Add custom class.
*
* @param {HTMLElement} el [dom element]
* @param {String} newClass [add new class, no dot]
*/
export function addClass (el, newClass) {
    if (el.classList) el.classList.add(newClass)
    else el.className += ' ' + newClass
}


/**
* Remove custom class.
*
* @param {HTMLElement} el [dom element]
* @param {String} classToRemove [remove class, no dot]
*/
export function removeClass (el, classToRemove) {
    if (el.classList) el.classList.remove(classToRemove)
    else {
        el.className = el.className.replace(new RegExp('(^|\\b)' + classToRemove.split(' ').join('|') + '(\\b|$)', 'gi'), '')

        const posLastCar = el.className.length - 1

        if (el.className[posLastCar] === ' ') el.className = el.className.substring(0, posLastCar)
    }

    // Remove class attribute if no classes left
    if (el.classList.length === 0) el.removeAttribute('class')
}

/**
* Toggle custom class.
*
* @param {HTMLElement} el [dom element]
* @param {String} classToToggle [toggle class, no dot]
*/
export function toggleClass (el, classToToggle) {
    if (el.classList) {
        el.classList.toggle(classToToggle);
    } else {
        var classes = el.className.split(" ");
        var i = classes.indexOf(classToToggle);

        if (i >= 0){
            classes.splice(i, 1);
        } else {
            classes.push(classToToggle);
        }
        el.className = classes.join(" ");
    }
}

/**
* Get data-attribute matching an element and attribute suffix
*
* @param {HTMLElement} el [dom element]
* @param {String} attr [data-attr suffix]
*/
export function getAttribute(el, attr) {
    return el.getAttribute('data-' + attr)
}


/**
* Get data-attribute matching an element and attribute suffix
*
* @param {HTMLElement} el [dom element]
* @param {String} attr [data-attr suffix]
* @return {Object} contains width and height properties
*/
export function setAttribute(el, attr, val = '') {
    if (el.getAttribute('data-' + attr) != val) el.setAttribute('data-' + attr, val)
}


/**
* Toggle boolean data-attribute
*
* @param {HTMLElement} el [dom element]
* @param {String} attr [data-attr suffix]
*/
export function toggleAttribute(el, attr) {
    if (el.getAttribute('data-' + attr) === 'true') el.setAttribute('data-' + attr, 'false')
    else el.setAttribute('data-' + attr, 'true')
}

/**
* Toggle boolean data-attribute
*
* @return {Boolean} returns false if nothing matches the conditions
*/
export function isRetina() {
    var mediaQuery = "(-webkit-min-device-pixel-ratio: 1.5),\
    (min--moz-device-pixel-ratio: 1.5),\
    (-o-min-device-pixel-ratio: 3/2),\
    (min-resolution: 1.5dppx)";

    if (window.devicePixelRatio > 1) return true;
    if (window.matchMedia && window.matchMedia(mediaQuery).matches) return true;

    return false;
}


export function toArray(els) {
    const a = []
    for (let i = 0; i < els.length; i++) {
        a.push(els[i])
    }

    return a
}

/**
* Wrap an HTML element with another
*
* @param {HTMLElement} toWrap [dom element]
* @param {HTMLElement} wrapper [dom element] optional
*/
export function wrap(toWrap, wrapper) {
    wrapper = wrapper || document.createElement('div');
    toWrap.parentNode.appendChild(wrapper);
    wrapper.appendChild(toWrap);
};

/**
* Check if given url is same domain as actual web page
*
* @param {String} url [url to check]
* @return {Boolean}
*/
export function isSameDomain(url){
    const host = window.location.hostname.toLowerCase(),
    regex = new RegExp('^(?:(?:f|ht)tp(?:s)?\:)?//(?:[^\@]+\@)?([^:/]+)', 'im'),
    match = url.match(regex),
    domain = ((match ? match[1].toString() : ((url.indexOf(':') < 0) ? host : ''))).toLowerCase();

    // Same domain
    if (domain == host) {
        return true;
    }
}

/** Add one or more listeners to an element
* @param {DOMElement} el - DOM element to add listeners to
* @param {string} events - space separated list of event names, e.g. 'click change'
* @param {Function} fn - function to attach for each event as a listener
*/
export function addListenerMulti(el, events, fn) {
    events.split(' ').forEach(e => el.addEventListener(e, fn, false));
}

export function extend(out) {
    out = out || {};

    for (var i = 1; i < arguments.length; i++) {
        if (!arguments[i])
        continue;

        for (var key in arguments[i]) {
            if (arguments[i].hasOwnProperty(key))
            out[key] = arguments[i][key];
        }
    }

    return out;
};

/**
* Return a new "Deferred" object
* https://developer.mozilla.org/en-US/docs/Mozilla/JavaScript_code_modules/Promise.jsm/Deferred
*
*/
export function deferred() {
    return new function() {
        this.resolve = null;
        this.reject = null;

        this.promise = new Promise(function(resolve, reject) {
            this.resolve = resolve;
            this.reject = reject;
        }.bind(this));
    };
}


/**
* Set the same height on all elements based on the item with the biggest height
* @param {NodeList} elements
*/
export function setMaxElementHeight(elements){
    // first we reset any previously set height
    elements.forEach(el => {
        el.style.height = 'auto';
    });

    let maxHeight = Math.max.apply(Math, Array.prototype.map.call(elements, el => {
        return el.offsetHeight;
    }));

    elements.forEach(el => {
        el.style.height = maxHeight+'px';
    });
}

/**
* Retrieve element max height
* @param {Node} elem
*/
export function get_maxheight(elem){
    const style = window.getComputedStyle(elem, null);
    const h = style.maxHeight.replace('px', '') * 1;

    return h;
}

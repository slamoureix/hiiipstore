import * as ScrollMagic from "scrollmagic";

const controller = new ScrollMagic.Controller();

const scene = new ScrollMagic.Scene()
    .triggerElement('.focus-1--fixed')
    .triggerHook(0)
    .duration('95%')
    .setPin('.focus-1--fixed')
    .addTo(controller);

const scene_2 = new ScrollMagic.Scene()
    .triggerElement('.focus-2--fixed')
    .triggerHook(0)
    .duration('95%')
    .setPin('.focus-2--fixed')
    .addTo(controller);
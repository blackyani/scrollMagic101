$(document).ready(function(){
        //init Scroll Magic
    let controller = new ScrollMagic.Controller();
// pin the intro
    let pinIntroScene = new ScrollMagic.Scene({
        triggerElement: '#intro',
        triggerHook: 0,
        duration: '30%'
    })
        .setPin('#intro', {pushFollowers:false})
        .addTo(controller);
//pin again
    let pinIntroScene2 = new ScrollMagic.Scene({
        triggerElement: '#project01',
        triggerHook: 0.4
    })
        .setPin('#intro', {pushFollowers:false})
        .addTo(controller);

    //paralax scene
    let paralaxTL = new TimelineMax();
    
    paralaxTL
        .from('.content-wrapper', 0.4, {autoAlpha: 0, ease:Power0.easeNone}, 0.4)
        .from('.bcg', 2, {y: '-30%', ease: Power0.easeNone}, 0);


    let slideParalaxScene = new ScrollMagic.Scene({
        triggerElement: '.bcg-paralax',
        triggerHook: 1,
        duration: '200%'
    })
        .setTween(paralaxTL)
        .addTo(controller);

    //loop through each .project element
    $('.project').each(function () {
        //build a scene
        let ourScene = new  ScrollMagic.Scene({
            triggerElement: this.children[0],
            triggerHook: 0.9,
            reverse: false
        })
            .setClassToggle(this, 'fade-in')
            .addIndicators({
                name: this.children[0] + 'scene',
                colorTrigger: 'black',
                colorSrart: '#75C695',
                colorEnd: 'blue'
            }) //this requires a plugin
            .addTo(controller); //add class to project01
    });
    //console.log(controller);
});



















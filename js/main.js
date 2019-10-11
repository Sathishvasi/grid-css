$(document).ready(function () {
    // Grid template columns
    $(".gtc > .grid-desc > span:eq(0) > input[type='radio'], .gtc > .grid-desc > span:eq(0)").click(() => {
        $(".gtc > .grid-desc > span:eq(0) > input[type='radio']").prop('checked', true);
        $(".gtc > .grid-basic").css('grid-template-columns', '1fr 1fr 1fr')
    })
    $(".gtc > .grid-desc > span:eq(1) > input[type='radio'], .gtc > .grid-desc > span:eq(1)").click(() => {
        $(".gtc > .grid-desc > span:eq(1) > input[type='radio']").prop('checked', true);
        $(".gtc > .grid-basic").css('grid-template-columns', '1fr 2fr 1fr')
    })
    $(".gtc > .grid-desc > span:eq(2) > input[type='radio'], .gtc > .grid-desc > span:eq(2)").click(() => {
        $(".gtc > .grid-desc > span:eq(2) > input[type='radio']").prop('checked', true);
        $(".gtc > .grid-basic").css('grid-template-columns', 'repeat(2,1fr)')
    })
    $(".gtc > .grid-desc > span:eq(3) > input[type='radio'], .gtc > .grid-desc > span:eq(3)").click(() => {
        $(".gtc > .grid-desc > span:eq(3) > input[type='radio']").prop('checked', true);
        $(".gtc > .grid-basic").css('grid-template-columns', 'repeat(2,1fr 2fr)')
    })

    // Grid template rows
    $(".gtr > .grid-desc > span:eq(0) > input[type='radio'], .gtr > .grid-desc > span:eq(0)").click(() => {
        $(".gtr > .grid-desc > span:eq(0) > input[type='radio']").prop('checked', true);
        $(".gtr > .grid-basic").css('grid-template-rows', '2fr 1fr 1fr')
    })
    $(".gtr > .grid-desc > span:eq(1) > input[type='radio'], .gtr > .grid-desc > span:eq(1)").click(() => {
        $(".gtr > .grid-desc > span:eq(1) > input[type='radio']").prop('checked', true);
        $(".gtr > .grid-basic").css('grid-template-rows', '1fr 2fr 1fr')
    })

    // Grid gap
    $(".gp > .grid-desc > span:eq(0) > input[type='radio'], .gp > .grid-desc > span:eq(0)").click(() => {
        $(".gp > .grid-desc > span:eq(0) > input[type='radio']").prop('checked', true);
        $(".gp > .grid-basic").css('grid-gap', '10px')
    })
    $(".gp > .grid-desc > span:eq(1) > input[type='radio'], .gp > .grid-desc > span:eq(1)").click(() => {
        $(".gp > .grid-desc > span:eq(1) > input[type='radio']").prop('checked', true);
        $(".gp > .grid-basic").css('grid-gap', '0px')
        $(".gp > .grid-basic").css('grid-column-gap', '10px')
    })
    $(".gp > .grid-desc > span:eq(2) > input[type='radio'], .gp > .grid-desc > span:eq(2)").click(() => {
        $(".gp > .grid-desc > span:eq(2) > input[type='radio']").prop('checked', true);
        $(".gp > .grid-basic").css('grid-gap', '0px')
        $(".gp > .grid-basic").css('grid-row-gap', '10px')
    })

    // Grid auto rows
    $(".gaw > .grid-desc > span:eq(0) > input[type='radio'], .gaw > .grid-desc > span:eq(0)").click(() => {
        $(".gaw > .grid-desc > span:eq(0) > input[type='radio']").prop('checked', true);
        $(".gaw > .grid-basic").css('grid-auto-rows', '100px')
        $(".gaw > .grid-basic div p").empty();
    })
    $(".gaw > .grid-desc > span:eq(1) > input[type='radio'], .gaw > .grid-desc > span:eq(1)").click(() => {
        $(".gaw > .grid-desc > span:eq(1) > input[type='radio']").prop('checked', true);
        $(".gaw > .grid-basic").css('grid-auto-rows', 'minmax(100px, auto)')
        $(".gaw > .grid-basic div p").append('Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus libero tempore laborum odio omnis perspiciatis suscipit nemo.')
    })

    // Grid row column
    $(".gcr > .grid-desc > span:eq(0) > input[type='radio'], .gcr > .grid-desc > span:eq(0)").click(() => {
        $(".gcr > .grid-desc > span:eq(0) > input[type='radio']").prop('checked', true);
        $(".gcr > .grid-basic > div:eq(0)").css('grid-column', '1/3')
        $(".gcr > .grid-basic > div:eq(0)").css('grid-row', 'unset')
    })
    $(".gcr > .grid-desc > span:eq(1) > input[type='radio'], .gcr > .grid-desc > span:eq(1)").click(() => {
        $(".gcr > .grid-desc > span:eq(1) > input[type='radio']").prop('checked', true);
        $(".gcr > .grid-basic > div:eq(0)").css('grid-row', '1/3')
        $(".gcr > .grid-basic > div:eq(0)").css('grid-column', 'unset')
    })

    // Grid justify content
    $(".gjc > .grid-desc > span:eq(0) > input[type='radio'], .gjc > .grid-desc > span:eq(0)").click(() => {
        $(".gjc > .grid-desc > span:eq(0) > input[type='radio']").prop('checked', true);
        $(".gjc > .grid-basic").css('justify-content', 'space-evenly')
    })

    $(".gjc > .grid-desc > span:eq(1) > input[type='radio'], .gjc > .grid-desc > span:eq(1)").click(() => {
        $(".gjc > .grid-desc > span:eq(1) > input[type='radio']").prop('checked', true);
        $(".gjc > .grid-basic").css('justify-content', 'space-around')
    })

    $(".gjc > .grid-desc > span:eq(2) > input[type='radio'], .gjc > .grid-desc > span:eq(2)").click(() => {
        $(".gjc > .grid-desc > span:eq(2) > input[type='radio']").prop('checked', true);
        $(".gjc > .grid-basic").css('justify-content', 'space-between')
    })
    $(".gjc > .grid-desc > span:eq(3) > input[type='radio'], .gjc > .grid-desc > span:eq(3)").click(() => {
        $(".gjc > .grid-desc > span:eq(3) > input[type='radio']").prop('checked', true);
        $(".gjc > .grid-basic").css('justify-content', 'start')
    })
    $(".gjc > .grid-desc > span:eq(4) > input[type='radio'], .gjc > .grid-desc > span:eq(4)").click(() => {
        $(".gjc > .grid-desc > span:eq(4) > input[type='radio']").prop('checked', true);
        $(".gjc > .grid-basic").css('justify-content', 'center')
    })
    $(".gjc > .grid-desc > span:eq(5) > input[type='radio'], .gjc > .grid-desc > span:eq(5)").click(() => {
        $(".gjc > .grid-desc > span:eq(5) > input[type='radio']").prop('checked', true);
        $(".gjc > .grid-basic").css('justify-content', 'end')
    })

        // Grid algn content
        $(".gac > .grid-desc > span:eq(0) > input[type='radio'], .gac > .grid-desc > span:eq(0)").click(() => {
            $(".gac > .grid-desc > span:eq(0) > input[type='radio']").prop('checked', true);
            $(".gac > .grid-basic").css('align-content', 'start')
        })
    
        $(".gac > .grid-desc > span:eq(1) > input[type='radio'], .gac > .grid-desc > span:eq(1)").click(() => {
            $(".gac > .grid-desc > span:eq(1) > input[type='radio']").prop('checked', true);
            $(".gac > .grid-basic").css('align-content', 'center')
        })
    
        $(".gac > .grid-desc > span:eq(2) > input[type='radio'], .gac > .grid-desc > span:eq(2)").click(() => {
            $(".gac > .grid-desc > span:eq(2) > input[type='radio']").prop('checked', true);
            $(".gac > .grid-basic").css('align-content', 'end')
        })
        $(".gac > .grid-desc > span:eq(3) > input[type='radio'], .gac > .grid-desc > span:eq(3)").click(() => {
            $(".gac > .grid-desc > span:eq(3) > input[type='radio']").prop('checked', true);
            $(".gac > .grid-basic").css('align-content', 'space-evenly')    
        })
        $(".gac > .grid-desc > span:eq(4) > input[type='radio'], .gac > .grid-desc > span:eq(4)").click(() => {
            $(".gac > .grid-desc > span:eq(4) > input[type='radio']").prop('checked', true);
            $(".gac > .grid-basic").css('align-content', 'space-around')
        })
        $(".gac > .grid-desc > span:eq(5) > input[type='radio'], .gac > .grid-desc > span:eq(5)").click(() => {
            $(".gac > .grid-desc > span:eq(5) > input[type='radio']").prop('checked', true);
            $(".gac > .grid-basic").css('align-content', 'space-between')
        })


})
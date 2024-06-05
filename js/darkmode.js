darkMode = false

document.getElementById('darkmode-switch').addEventListener("click", function(){ 
    darkMode = (darkMode) ? false: true;
    swap_images()
    document.getElementById('body').classList.toggle('darkmode')
 }); 

images = [
    {
        'id':'lc-image',
        'lightmode':'https://leetcard.jacoblin.cool/hungryraven?theme=light&font=Roboto&ext=heatmap&cache=0',
        'darkmode':'https://leetcard.jacoblin.cool/hungryraven?theme=dark&font=Roboto&ext=heatmap&cache=0'
    },
    {
        'id':'gh-image',
        'lightmode': 'https://streak-stats.demolab.com?user=surenderpsm&card_width=500&card_height=200&hide_current_streak=true',
        'darkmode': 'https://streak-stats.demolab.com?user=surenderpsm&theme=dark&card_width=500&card_height=200&hide_current_streak=true'
    }
]

function swap_images(){
    for(let image of images){
        document.getElementById(image.id).src = (darkMode) ? image.darkmode : image.lightmode;
        console.log(document.getElementById(image.id))
    }
}


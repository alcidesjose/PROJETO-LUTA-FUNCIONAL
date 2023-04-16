// const char = creatKnight ('Kridinho');
// const monster = createLitterMonster();
const monster = createBigmonster();
const char = createSorcerer("Mrs Krido");
stage.start(
    char,
    monster,
    document.querySelector('#char'),
    document.querySelector('#monster')
);
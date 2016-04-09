import Camera from 'spritewerk/src/Camera';
import Canvas from 'spritewerk/src/Canvas';
import Input from 'spritewerk/src/Input';
import Stage from 'spritewerk/src/Stage';
//import Rect from 'spritewerk/src/shapes/Rectangle';
import TextInput from 'spritewerk/src/text/TextInput';
import Group from 'spritewerk/src/Group';
import Ticker from 'spritewerk/src/Ticker';

import Foo from "./Foo";

new Foo();

let camera = new Camera();
let stage = new Stage(800, 600, {
    bgColor: '#222',
    fill: true
});
let canvas = new Canvas(stage.getCanvas(), camera);
let input = new Input(stage.getCanvas());
let group = new Group();
let textInput = new TextInput(32, 32, {debug: true});
let ticker = new Ticker();

textInput.focus();
group.addItem(textInput);

input.addListener('click', function () {
    if (textInput.isFocused()) {
        textInput.blur();
    } else {
        textInput.focus();
    }
});

ticker.onTick = function (factor, ticks) {
    canvas.clear('#DDD');
    canvas.render(group, factor, ticks);
};

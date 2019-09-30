<style lang="scss" scoped>
    @import "../../../../../sass/games/snake";
</style>

<script>
  import {Board} from "./Board";
  import {Snake} from "./Snake";
  import SettingSnake from "./SettingSnake";

  export default {
    name: 'Game',

    components: {SettingSnake},

    data: () => ({
      game: null,
      ctx: null,
      gameInterval: null,
      bombInterval: null,
      offsetX: 0,
      offsetY: 0,
      width: 0,
      height: 0,
      gameScore: 0,
      volumeMusic: 1,
      volumeEffect: 1,
      intervalGame: 100,
      intervalBomb: 3000,
      gameover: false,

      sprites: {
        background: null,
        body: null,
        head: null,
        food: null,
        bomb: null,
        cell: null
      },
      sounds: {
        bomb: null,
        food: null,
        theme: null,
      },

      dimensions: {
        max: {
          width: 640,
          height: 360,
        },
        min: {
          width: 300,
          height: 300,
        }
      }
    }),

    methods: {
      start() {
        this.init();
        this.preload(() => {
          this.initDimensions();
          this.setTextFont();
          this.run();
        });
      },

      random(min, max){
        return Math.floor(Math.random() * (max + 1 - min)) + min;
      },

      init() {
        this.game = document.getElementById('snake');
        this.ctx = this.game.getContext("2d");
        this.gameover = false;

        Board.init(this, Snake);
        Snake.init(this, Board);
      },

      initDimensions() {
        this.dimensions.min.width = Board.countWidthCell * (this.sprites.cell.width + Board.cellPadding);
        this.dimensions.min.height = Board.countHeightCell * (this.sprites.cell.height + Board.cellPadding);

        let data = {
          maxWidth: this.dimensions.max.width,
          maxHeight: this.dimensions.max.height,
          minWidth: this.dimensions.min.width,
          minHeight: this.dimensions.min.height,
          realWidth: window.innerWidth,
          realHeight: window.innerHeight,
        };

        if (data.realWidth / data.realHeight > data.maxWidth / data.maxHeight) {
          this.fitWidth(data);
        } else {
          this.fitHeight(data);
        }

        this.game.width = this.width;
        this.game.height = this.height;

        this.offsetX = (this.game.width - Board.countWidthCell * (this.sprites.cell.width + Board.cellPadding)) / 2;
        this.offsetY = (this.game.height - Board.countHeightCell * (this.sprites.cell.width + Board.cellPadding)) / 2;
      },

      setTextFont(){
        this.ctx.font = '20px Cactus';
        this.ctx.fillStyle = '#fff';
      },

      fitWidth(data){
        this.height = Math.floor(data.realHeight * data.maxWidth / data.realWidth);
        this.height = Math.min(this.height, data.maxHeight);
        this.height = Math.max(this.height, data.minHeight);
        this.width = Math.floor(this.height * data.realWidth / data.realHeight);
        this.game.style.height = "100%";
      },

      fitHeight(data){
        this.width = Math.floor(data.realWidth * data.maxHeight / data.realHeight);
        this.width = Math.min(this.width, data.maxWidth);
        this.width = Math.max(this.width, data.minWidth);
        this.height = Math.floor(this.width * data.realHeight / data.realWidth);
        this.game.style.height = "80vh";
      },

      preload(callback){
        let loaded = 0;

        let onAssetLoad = () => {
          ++loaded;

          if (loaded >= (_.size(this.sprites) + _.size(this.sounds))) {
            callback();
          }
        };

        this.preloadSprites(onAssetLoad);
        this.preloadSounds(onAssetLoad);

      },

      preloadSprites(onAssetLoad){
        for (let key in this.sprites) {
          this.sprites[key] = new Image();
          this.sprites[key].src = `/image/snake/${key}.png`;
          this.sprites[key].addEventListener("load", onAssetLoad);
        }
      },

      preloadSounds(onAssetLoad){
        for (let key in this.sounds) {
          this.sounds[key] = new Audio();
          this.sounds[key].src = `/sounds/${key}.mp3`;
          this.sounds[key].addEventListener("canplaythrough", onAssetLoad, {once: true});
        }
      },

      create(){
        Board.create(this.offsetX, this.offsetY, this.sprites.cell.width);
        Board.createFood();
        Board.createBomb();
        Snake.create();

        window.addEventListener('keydown', (e) => {
          if (e.keyCode === 27) {
            this.settingOpen();
            Snake.pause();
          } else {
            Snake.start(e.keyCode);
          }
        })
      },

      renderScore(){
        this.ctx.fillText(`Score: ${this.gameScore}`, 20, 20);
      },

      render(){
        window.requestAnimationFrame(() => {
          this.ctx.clearRect(0, 0, this.width, this.height);

          this.ctx.drawImage(this.sprites.background, (this.width - this.sprites.background.width) / 2, (this.height - this.sprites.background.height) / 2);

          this.renderScore();
          Board.render();
          Snake.render();
        });
      },

      gameOver(){
        this.soundPlayEffect('bomb');
        this.gameover = true;
        clearInterval(this.gameInterval);
        clearInterval(this.bombInterval);
        alert(this.gameScore);
        window.location.reload();
      },

      update(){
        Snake.move();
        if (!this.gameover) {
          this.render();
        }
      },

      run() {
        this.create();
        this.gameInterval = setInterval(() => {
          this.update();
        }, this.intervalGame);

        this.bombInterval = setInterval(() => {
          if (Snake.moving) {
            Board.createBomb();
          }
        }, this.intervalBomb);
      },

      onSnakeStart(){
        this.sounds.theme.loop = true;
        this.sounds.theme.volume = this.volumeMusic;
        this.sounds.theme.play();
      },

      onSnakeEat(){
        this.soundPlayEffect('food');
      },

      soundPlayEffect(effect){
        this.sounds[effect].volume = this.volumeEffect;
        this.sounds[effect].play();
      },

      settingOpen () {
        this.$refs.form.show();
      },

      starting(){
        this.onSnakeStart();
        this.setting();
        this.$refs.form.hide();
      },

      setting(){
        console.log(this.$refs.form.$data);

        this.volumeMusic = this.$refs.form.$data.volumeMusic;
        this.volumeEffect = this.$refs.form.$data.volumeEffect;
        this.intervalGame = this.$refs.form.$data.intervalGame;
        this.intervalBomb = this.$refs.form.$data.intervalBomb;
      }
    },

    mounted() {
      this.start();
      this.settingOpen();
    }
  }
</script>


<template>
    <div class="game-snake">
        <SettingSnake
                ref="form"
                @start="starting"
        ></SettingSnake>
        <canvas id="snake"></canvas>
    </div>
</template>
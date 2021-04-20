class Scene1 extends Phaser.Scene {
    constructor() {
        super ("bootGame");
    }

    preload() {
        this.load.image('background', 'Assets/bg.png');
        this.load.spritesheet('ship', 'Assets/spriteship1.png',{frameWidth: 16, frameHeight:16});
        this.load.spritesheet('ship2', 'Assets/spriteship2.png',{frameWidth: 32, frameHeight:16});
        this.load.spritesheet('ship3', 'Assets/spriteship3.png',{frameWidth: 32, frameHeight:32});
        this.load.spritesheet('explosion', 'Assets/explosion.png',{frameWidth: 16, frameHeight:16});
        this.load.spritesheet('power-up', 'Assets/power-up.png',{frameWidth: 16, frameHeight:16});
        this.load.spritesheet('player', 'Assets/player.png',{frameWidth: 16, frameHeight:24});
        this.load.spritesheet('beam', 'Assets/beams.png',{frameWidth: 16, frameHeight:16});
        this.load.bitmapFont("pixelFont", "Assets/fonts/font.png", "Assets/fonts/font.xml")
        this.load.audio("audioBeam", ["Assets/sounds/beam.ogg", "Assets/sounds/beam.mp3"]);
        this.load.audio("music", ["Assets/sounds/music.ogg", "Assets/sounds/music.mp3"]);
    }

    create () {
        this.add.text(20,20, "Loading Game...");
        this.scene.start ("playGame");

        
        
        this.anims.create({
            key: "ship1_anim",
            frames: this.anims.generateFrameNumbers("ship"),
            frameRate: 20,
            repeat: -1
        })

        this.anims.create({
            key: "ship2_anim",
            frames: this.anims.generateFrameNumbers("ship2"),
            frameRate: 20,
            repeat: -1
        })

        this.anims.create({
            key: "ship3_anim",
            frames: this.anims.generateFrameNumbers("ship3"),
            frameRate: 20,
            repeat: -1
        })

        this.anims.create({
            key: "explode",
            frames: this.anims.generateFrameNumbers("explosion"),
            frameRate: 20,
            repeat: 0,
            hideOnComplete: true
        })

        this.anims.create({
            key:"red",
            frames: this.anims.generateFrameNumbers("power-up", {
                start: 0,
                end: 1
            }),
            frameRate : 20,
            repeat : -1
        })

        this.anims.create({
            key:"gray",
            frames: this.anims.generateFrameNumbers("power-up", {
                start: 2,
                end: 3
            }),
            frameRate :20,
            repeat: -1
        })

        this.anims.create({
            key:"thrust",
            frames: this.anims.generateFrameNumbers("player"),
            frameRate :20,
            repeat: -1
        })

        this.anims.create({
            key:"beam_anim",
            frames: this.anims.generateFrameNumbers("beam", {
                start: 2,
                end: 3
            }),
            frameRate :20,
            repeat: -1
        })
    }
}
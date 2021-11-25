/**
 * Canvas animations for "HIM"
 * 
 * Designed by Joey Lai
 * Made by Xuan25 <shanboxuan@me.com>
 */

const FRAME_RATE = 60           // 帧率
const IMG_EASE_DURATION = 2     // 图像过渡时长
const IMG_EASE_ZOOM = 3         // 图像过渡缩放

const IMG_EASE_ANIMATION_ON_STARTUP = false     // 载入动画
const IMG_EASE_DURATION_ON_STARTUP = 0.8        // 载入动画图像过渡时长

const FRAME_DURATION = 1 / FRAME_RATE
const IMG_EASE_STEP = FRAME_DURATION / IMG_EASE_DURATION

class StackCanvas {
    constructor(canvas, canvasTemp, storyStack) {
        this.canvas = document.getElementById(canvas);
        this.context = this.canvas.getContext("2d");

        this.canvasTemp = document.getElementById(canvasTemp);
        this.contextTemp = this.canvasTemp.getContext("2d");

        this.storyStack = storyStack
    }

    /**
     * init all the resources
     */
    init(startupAnimation) {
        const self = this
        var loadedTotal = 0;
        var loadedCount = 0;
        // load stack
        for (let index = 0; index < this.storyStack.length; index++) {
            const element = this.storyStack[index];
            loadedTotal += 1 + 1 + element.imgs.length

            // load mask
            const imgMask = new Image();
            imgMask.onload = function () {
                element.mask.img = imgMask
                loadedCount++;
                if (loadedCount == loadedTotal) {
                    self.start();
                }
            }
            imgMask.src = element.mask.path;

            // load outline
            const imgOutline = new Image();
            imgOutline.onload = function () {
                element.outline.img = imgOutline
                loadedCount++;
                if (loadedCount == loadedTotal) {
                    self.start();
                }
            }
            imgOutline.src = element.outline.path;

            // load layers
            for (let index = 0; index < element.imgs.length; index++) {
                const imgEle = element.imgs[index];

                const imgLayer = new Image();
                imgLayer.onload = function () {
                    imgEle.img = imgLayer
                    loadedCount++;
                    if (loadedCount == loadedTotal) {
                        self.start();
                    }
                }
                imgLayer.src = imgEle.path;
            }
        }

        // init params
        if (startupAnimation) {
            this.layersStart = -1;
        } else {
            this.layersStart = this.storyStack.length;
        }
        this.layersEnd = this.storyStack.length;
        this.anmStartTime = 0;

        // load-in animation
        this.isAnimation = this.layersStart != this.layersEnd;
        if (this.isAnimation) {
            this.easeDuration = IMG_EASE_DURATION_ON_STARTUP
        } else {
            this.easeDuration = IMG_EASE_DURATION
        }
    }

    /**
     * start the render loop
     */
    start() {
        this.canvas.className += " story-canvas-loaded"
        console.log(this.storyStack)
        setTimeout(() => {
            setInterval(() => {
                this.renderLoop();
            }, FRAME_DURATION * 1000);
        }, 100);
    }

    /**
     * draw a image on the darwing context
     * @param {CanvasRenderingContext2D} context darwing context
     * @param {CanvasImageSource} img image source
     * @param {Number} offsetX offset over x-axis
     * @param {Number} offsetY offset over y-axis
     * @param {Number} scale scale along center
     * @param {Number} opacity opacity
     */
    darwImg(context, img, offsetX, offsetY, scale, opacity) {
        var x = (context.canvas.width / scale - img.width) / 2
        var y = (context.canvas.height / scale - img.height) / 2
        context.scale(scale, scale)
        context.globalAlpha = opacity;
        context.drawImage(img, (x + offsetX), (y + offsetY));
        context.scale(1 / scale, 1 / scale)
    }

    /**
     * darw a story layer on the temp canvas
     * @param {CanvasRenderingContext2D} context darwing context
     * @param {Story} story story layer
     * @param {Number} anmRatio animation ratio
     */
    drawStory(context, story, anmRatio) {
        var timestamp = this.getCurrentTime() * (2 * Math.PI)
        var offsetX = 0
        var offsetY = 0

        // image layers
        context.globalCompositeOperation = "source-over";
        for (let index = 0; index < story.imgs.length; index++) {
            const img = story.imgs[index];
            offsetX = img.floatingStrength[0] * Math.sin(timestamp / img.floatingCycle[0])
            offsetY = img.floatingStrength[1] * Math.cos(timestamp / img.floatingCycle[1])
            if (img.easeOffset) {
                offsetX += img.easeOffset[0] * anmRatio
                offsetY += img.easeOffset[1] * anmRatio
            }
            this.darwImg(context, img.img, offsetX, offsetY, img.scale, 1)
        }

        // mask layer
        offsetX = story.mask.floatingStrength[0] * Math.sin(timestamp / story.mask.floatingCycle[0])
        offsetY = story.mask.floatingStrength[1] * Math.cos(timestamp / story.mask.floatingCycle[1])
        if (story.mask.easeOffset) {
            offsetX += story.mask.easeOffset[0] * anmRatio
            offsetY += story.mask.easeOffset[1] * anmRatio
        }
        context.globalCompositeOperation = "destination-out";
        this.darwImg(context, story.mask.img, offsetX, offsetY, story.mask.scale, 1)

        // outline layer
        offsetX = story.outline.floatingStrength[0] * Math.sin(timestamp / story.outline.floatingCycle[0])
        offsetY = story.outline.floatingStrength[1] * Math.cos(timestamp / story.outline.floatingCycle[1])
        if (story.outline.easeOffset) {
            offsetX += story.outline.easeOffset[0] * anmRatio
            offsetY += story.outline.easeOffset[1] * anmRatio
        }
        context.globalCompositeOperation = "source-over";
        this.darwImg(context, story.outline.img, offsetX, offsetY, story.outline.scale, 1)
    }

    /**
     * render loop
     */
    renderLoop() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.context.setTransform(1, 0, 0, 1, 0, 0);

        for (let index = 0; index < this.storyStack.length; index++) {

            const story = this.storyStack[index];

            if (this.layersEnd > index && this.layersStart > index) {
                this.contextTemp.clearRect(0, 0, this.canvas.width, this.canvas.height);
                this.contextTemp.setTransform(1, 0, 0, 1, 0, 0);
                this.drawStory(this.contextTemp, story, 0)
                this.darwImg(this.context, this.canvasTemp, 0, 0, 1, 1)
            } else if (this.layersStart != this.layersEnd) {
                var anmTimeRatio = (this.getCurrentTime() - this.anmStartTime) / this.easeDuration;
                if (anmTimeRatio > 1) {
                    anmTimeRatio = 1
                }
                if (this.layersStart > index && this.layersEnd == index) {
                    // ease out
                    var anmRatio = this.easeInCubic(anmTimeRatio)
                    var scale = (1 + IMG_EASE_ZOOM * anmRatio)
                    var opacity = 1 - anmRatio

                    var easeOffsetX = -story.easeCenter[0] * anmRatio
                    var easeOffsetY = -story.easeCenter[1] * anmRatio

                    this.contextTemp.clearRect(0, 0, this.canvas.width, this.canvas.height);
                    this.contextTemp.setTransform(1, 0, 0, 1, 0, 0);

                    var anmRatioInOut = this.easeInOutCubic(anmTimeRatio)
                    this.drawStory(this.contextTemp, story, anmRatioInOut)

                    this.darwImg(this.context, this.canvasTemp, easeOffsetX, easeOffsetY, scale, opacity)
                } else if (this.layersStart == index && this.layersEnd > index) {
                    // ease in
                    var anmRatio = this.easeOutCubic(anmTimeRatio)
                    var scale = (1 + IMG_EASE_ZOOM * (1 - anmRatio))
                    var opacity = anmRatio

                    var easeOffsetX = -story.easeCenter[0] * (1 - anmRatio)
                    var easeOffsetY = -story.easeCenter[1] * (1 - anmRatio)

                    this.contextTemp.clearRect(0, 0, this.canvas.width, this.canvas.height);
                    this.contextTemp.setTransform(1, 0, 0, 1, 0, 0);

                    var anmRatioInOut = this.easeInOutCubic(anmTimeRatio)
                    this.drawStory(this.contextTemp, story, 1 - anmRatioInOut)

                    this.darwImg(this.context, this.canvasTemp, easeOffsetX, easeOffsetY, scale, opacity)
                }
                // animation end
                if (anmTimeRatio == 1) {
                    if (this.layersStart > this.layersEnd) {
                        this.layersStart--
                    } else {
                        this.layersStart++
                    }
                    if (this.layersStart == this.layersEnd) {
                        this.isAnimation = false
                        this.easeDuration = IMG_EASE_DURATION
                    } else {
                        this.anmStartTime = this.getCurrentTime();
                    }
                }
            }
        }
    }

    /**
     * ease function: easeInCubic
     * @param {number} x time ratio
     * @returns ease ratio
     */
    easeInCubic(x) {
        return x * x * x;
    }

    /**
     * ease function: easeOutCubic
     * @param {number} x time ratio
     * @returns ease ratio
     */
    easeOutCubic(x) {
        return 1 - Math.pow(1 - x, 3);
    }

    /**
     * ease function: easeInOutCubic
     * @param {number} x time ratio
     * @returns ease ratio
     */
    easeInOutCubic(x) {
        return x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2;
    }

    /**
     * ease function: getCurrentTime
     * @param {number} x time ratio
     * @returns ease ratio
     */
    getCurrentTime() {
        return new Date().getTime() / 1000;
    }

    /**
     * go to the next story
     * @returns number of current story layers
     */
    next() {
        if (this.isAnimation) {
            return -1
        }
        if (this.layersEnd == 1) {
            return -1
        }

        this.anmStartTime = this.getCurrentTime();
        this.isAnimation = true

        this.layersEnd--

        return this.layersEnd
    }

    /**
     * go to the previous story
     * @returns number of current story layers
     */
    previous() {
        if (this.isAnimation) {
            return -1
        }
        if (this.layersEnd == this.storyStack.length) {
            return -1
        }

        this.anmStartTime = this.getCurrentTime();
        this.isAnimation = true
        this.layersEnd++

        return this.layersEnd
    }
}

$(document).ready(function () {
    // canvas B
    const canvasB = new StackCanvas("canvasB", "canvasBTemp", storyStackB)
    canvasB.init(false)

    $("#nextBBtn").click(() => {
        var id = canvasB.next()
        if (id == -1) {
            return
        }
        $("#description").find("[id^='desc-2']").hide();
        $('#desc-2-' + id).fadeIn(1000);

        if (id == 1) {
            $("#nextBBtn").attr('disabled','disabled');
        }
        $("#previousBBtn").removeAttr('disabled');
    })

    $("#previousBBtn").click(() => {
        var id = canvasB.previous()
        if (id == -1) {
            return
        }

        $("#description").find("[id^='desc-2']").hide();
        $('#desc-2-' + id).fadeIn(1000);

        if (id == storyStackB.length) {
            $("#previousBBtn").attr('disabled','disabled');
        }
        $("#nextBBtn").removeAttr('disabled');
    })

    $("#previousBBtn").attr('disabled','disabled');

    // canvas A
    const canvasA = new StackCanvas("canvasA", "canvasATemp", storyStackA)
    canvasA.init(IMG_EASE_ANIMATION_ON_STARTUP)

    $("#nextABtn").click(() => {
        var id = canvasA.next()
        if (id == -1) {
            return
        }
        $("#description").find("[id^='desc-1']").hide();
        $('#desc-1-' + id).fadeIn(1000);

        if (id == 1) {
            $("#nextABtn").attr('disabled','disabled');
        }
        $("#previousABtn").removeAttr('disabled');
    })

    $("#previousABtn").click(() => {
        var id = canvasA.previous()
        if (id == -1) {
            return
        }

        $("#description").find("[id^='desc-1']").hide();
        $('#desc-1-' + id).fadeIn(1000);

        if (id == storyStackB.length) {
            $("#previousABtn").attr('disabled','disabled');
        }
        $("#nextABtn").removeAttr('disabled');
    })

    $("#previousABtn").attr('disabled','disabled');

    // init state
    $("#description").find("[id^='desc']").hide();
    $('#desc-1-' + canvasA.layersEnd).fadeIn(1000);
    $('#desc-2-' + canvasB.layersEnd).fadeIn(1000);

})

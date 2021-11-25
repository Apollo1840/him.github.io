/**
 * Story metadata for "HIM"
 * 
 * Designed by Joey Lai
 * Made by Xuan25 <shanboxuan@me.com>
 */

// 图像堆栈 从底到顶
var storyStackA = [
    {
        "mask": {                               // 遮罩层
            path: "img/A5_mask.png",                // 文件名
            scale: 0.21,                            // 缩放比例
            floatingCycle: [10, 6],                 // 漂浮周期 秒 [x, y]
            floatingStrength: [40, 40],             // 漂浮强度 像素 [x, y]
        },
        "outline": {                            // 描边层
            path: "img/A5_outline.png",
            scale: 0.21,
            floatingCycle: [10, 6],
            floatingStrength: [40, 40],
        },
        "imgs": [                               // 背景层
            {
                path: "img/A5_back.png",            // 背景层 后
                scale: 0.21,
                floatingCycle: [8, 12],
                floatingStrength: [40, 40],
            },
            {
                path: "img/A5_fore.png",            // 背景层 前
                scale: 0.21,
                floatingCycle: [12, 8],
                floatingStrength: [40, 40],
            }
        ],
        easeCenter: [0, 0]                      // 过渡中心
    },
    {
        "mask": {
            path: "img/A4_mask.png",
            scale: 0.21,
            floatingCycle: [6, 10],
            floatingStrength: [40, 40],
        },
        "outline": {
            path: "img/A4_outline.png",
            scale: 0.21,
            floatingCycle: [6, 10],
            floatingStrength: [40, 40],
        },
        "imgs": [
            {
                path: "img/A4_back.png",
                scale: 0.21,
                floatingCycle: [12, 8],
                floatingStrength: [40, 40],
            }
        ],
        easeCenter: [-30, 0]
    },
    {
        "mask": {
            path: "img/A3_mask.png",
            scale: 0.21,
            floatingCycle: [10, 6],
            floatingStrength: [40, 40],
            easeOffset: [-1200, 0]           // 特殊过渡效果
        },
        "outline": {
            path: "img/A3_outline.png",
            scale: 0.21,
            floatingCycle: [10, 6],
            floatingStrength: [40, 40],
            easeOffset: [-1200, 0]           // 特殊过渡效果
        },
        "imgs": [
            {
                path: "img/A3_back.png",
                scale: 0.21,
                floatingCycle: [12, 8],
                floatingStrength: [40, 40],
            }
        ],
        easeCenter: [50, 0]
    },
    {
        "mask": {
            path: "img/A2_mask.png",
            scale: 0.21,
            floatingCycle: [6, 10],
            floatingStrength: [40, 40],
        },
        "outline": {
            path: "img/A2_outline.png",
            scale: 0.21,
            floatingCycle: [6, 10],
            floatingStrength: [40, 40],
        },
        "imgs": [
            {
                path: "img/A2_back.png",
                scale: 0.21,
                floatingCycle: [12, 8],
                floatingStrength: [40, 40],
            },
            {
                path: "img/A2_fore.png",
                scale: 0.21,
                floatingCycle: [8, 12],
                floatingStrength: [40, 40],
            }
        ],
        easeCenter: [-150, 100]
    },
    {
        "mask": {
            path: "img/A1_mask.png",
            scale: 0.21,
            floatingCycle: [10, 6],
            floatingStrength: [40, 40],
        },
        "outline": {
            path: "img/A1_outline.png",
            scale: 0.21,
            floatingCycle: [10, 6],
            floatingStrength: [40, 40],
        },
        "imgs": [
            {
                path: "img/A1_back.png",
                scale: 0.21,
                floatingCycle: [12, 8],
                floatingStrength: [40, 40],
            },
            {
                path: "img/A1_fore.png",
                scale: 0.21,
                floatingCycle: [8, 12],
                floatingStrength: [40, 40],
            }
        ],
        easeCenter: [100, 50]
    },
]

var storyStackB = [
    {
        "mask": {                               // 遮罩层
            path: "img/B5_mask.png",                // 文件名
            scale: 0.21,                            // 缩放比例
            floatingCycle: [10, 6],                 // 漂浮周期 秒 [x, y]
            floatingStrength: [40, 40],             // 漂浮强度 像素 [x, y]
        },
        "outline": {                            // 描边层
            path: "img/B5_outline.png",
            scale: 0.21,
            floatingCycle: [10, 6],
            floatingStrength: [40, 40],
        },
        "imgs": [                               // 背景层
            {
                path: "img/B5_back.png",            // 背景层 后
                scale: 0.21,
                floatingCycle: [8, 12],
                floatingStrength: [40, 40],
            },
            {
                path: "img/B5_fore.png",            // 背景层 前
                scale: 0.21,
                floatingCycle: [10, 6],
                floatingStrength: [40, 40],
            }
        ],
        easeCenter: [0, 0]                          // 过渡中心
    },
    {
        "mask": {
            path: "img/B4_mask.png",
            scale: 0.21,
            floatingCycle: [6, 10],
            floatingStrength: [40, 40],
        },
        "outline": {
            path: "img/B4_outline.png",
            scale: 0.21,
            floatingCycle: [6, 10],
            floatingStrength: [40, 40],
        },
        "imgs": [
            {
                path: "img/B4_back.png",
                scale: 0.21,
                floatingCycle: [12, 8],
                floatingStrength: [40, 40],
            }
        ],
        easeCenter: [50, 0]
    },
    {
        "mask": {
            path: "img/B3_mask.png",
            scale: 0.21,
            floatingCycle: [10, 6],
            floatingStrength: [40, 40],
        },
        "outline": {
            path: "img/B3_outline.png",
            scale: 0.21,
            floatingCycle: [10, 6],
            floatingStrength: [40, 40],
        },
        "imgs": [
            {
                path: "img/B3_back.png",
                scale: 0.21,
                floatingCycle: [12, 8],
                floatingStrength: [40, 40],
            }
        ],
        easeCenter: [0, 200]
    },
    {
        "mask": {
            path: "img/B2_mask.png",
            scale: 0.21,
            floatingCycle: [6, 10],
            floatingStrength: [40, 40],
        },
        "outline": {
            path: "img/B2_outline.png",
            scale: 0.21,
            floatingCycle: [6, 10],
            floatingStrength: [40, 40],
        },
        "imgs": [
            {
                path: "img/B2_back.png",
                scale: 0.21,
                floatingCycle: [12, 8],
                floatingStrength: [40, 40],
            }
        ],
        easeCenter: [0, 0]
    },
    {
        "mask": {
            path: "img/B1_mask.png",
            scale: 0.21,
            floatingCycle: [10, 6],
            floatingStrength: [40, 40],
        },
        "outline": {
            path: "img/B1_outline.png",
            scale: 0.21,
            floatingCycle: [10, 6],
            floatingStrength: [40, 40],
        },
        "imgs": [
            {
                path: "img/B1_back.png",
                scale: 0.21,
                floatingCycle: [12, 8],
                floatingStrength: [40, 40],
            }
        ],
        easeCenter: [-200, 100]
    },
]
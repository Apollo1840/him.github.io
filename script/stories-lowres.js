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
            path: "img/A5_mask_small.png",                // 文件名
            scale: 1.05,                            // 缩放比例
            floatingCycle: [10, 6],                 // 漂浮周期 秒 [x, y]
            floatingStrength: [8, 8],             // 漂浮强度 像素 [x, y]
        },
        "outline": {                            // 描边层
            path: "img/A5_outline_small.png",
            scale: 1.05,
            floatingCycle: [10, 6],
            floatingStrength: [8, 8],
        },
        "imgs": [                               // 背景层
            {
                path: "img/A5_back_small.png",            // 背景层 后
                scale: 1.05,
                floatingCycle: [8, 12],
                floatingStrength: [8, 8],
            },
            {
                path: "img/A5_fore_small.png",            // 背景层 前
                scale: 1.05,
                floatingCycle: [12, 8],
                floatingStrength: [8, 8],
            }
        ],
        easeCenter: [0, 0]                      // 过渡中心
    },
    {
        "mask": {
            path: "img/A4_mask_small.png",
            scale: 1.05,
            floatingCycle: [6, 10],
            floatingStrength: [8, 8],
        },
        "outline": {
            path: "img/A4_outline_small.png",
            scale: 1.05,
            floatingCycle: [6, 10],
            floatingStrength: [8, 8],
        },
        "imgs": [
            {
                path: "img/A4_back_small.png",
                scale: 1.05,
                floatingCycle: [12, 8],
                floatingStrength: [8, 8],
            }
        ],
        easeCenter: [-30, 0]
    },
    {
        "mask": {
            path: "img/A3_mask_small.png",
            scale: 1.05,
            floatingCycle: [10, 6],
            floatingStrength: [8, 8],
            easeOffset: [-240, 0]           // 特殊过渡效果
        },
        "outline": {
            path: "img/A3_outline_small.png",
            scale: 1.05,
            floatingCycle: [10, 6],
            floatingStrength: [8, 8],
            easeOffset: [-240, 0]           // 特殊过渡效果
        },
        "imgs": [
            {
                path: "img/A3_back_small.png",
                scale: 1.05,
                floatingCycle: [12, 8],
                floatingStrength: [8, 8],
            }
        ],
        easeCenter: [50, 0]
    },
    {
        "mask": {
            path: "img/A2_mask_small.png",
            scale: 1.05,
            floatingCycle: [6, 10],
            floatingStrength: [8, 8],
        },
        "outline": {
            path: "img/A2_outline_small.png",
            scale: 1.05,
            floatingCycle: [6, 10],
            floatingStrength: [8, 8],
        },
        "imgs": [
            {
                path: "img/A2_back_small.png",
                scale: 1.05,
                floatingCycle: [12, 8],
                floatingStrength: [8, 8],
            },
            {
                path: "img/A2_fore_small.png",
                scale: 1.05,
                floatingCycle: [8, 12],
                floatingStrength: [8, 8],
            }
        ],
        easeCenter: [-150, 100]
    },
    {
        "mask": {
            path: "img/A1_mask_small.png",
            scale: 1.05,
            floatingCycle: [10, 6],
            floatingStrength: [8, 8],
        },
        "outline": {
            path: "img/A1_outline_small.png",
            scale: 1.05,
            floatingCycle: [10, 6],
            floatingStrength: [8, 8],
        },
        "imgs": [
            {
                path: "img/A1_back_small.png",
                scale: 1.05,
                floatingCycle: [12, 8],
                floatingStrength: [8, 8],
            },
            {
                path: "img/A1_fore_small.png",
                scale: 1.05,
                floatingCycle: [8, 12],
                floatingStrength: [8, 8],
            }
        ],
        easeCenter: [100, 50]
    },
]

var storyStackB = [
    {
        "mask": {                               // 遮罩层
            path: "img/B5_mask_small.png",                // 文件名
            scale: 1.05,                            // 缩放比例
            floatingCycle: [10, 6],                 // 漂浮周期 秒 [x, y]
            floatingStrength: [8, 8],             // 漂浮强度 像素 [x, y]
        },
        "outline": {                            // 描边层
            path: "img/B5_outline_small.png",
            scale: 1.05,
            floatingCycle: [10, 6],
            floatingStrength: [8, 8],
        },
        "imgs": [                               // 背景层
            {
                path: "img/B5_back_small.png",            // 背景层 后
                scale: 1.05,
                floatingCycle: [8, 12],
                floatingStrength: [8, 8],
            },
            {
                path: "img/B5_fore_small.png",            // 背景层 前
                scale: 1.05,
                floatingCycle: [10, 6],
                floatingStrength: [8, 8],
            }
        ],
        easeCenter: [0, 0]                          // 过渡中心
    },
    {
        "mask": {
            path: "img/B4_mask_small.png",
            scale: 1.05,
            floatingCycle: [6, 10],
            floatingStrength: [8, 8],
        },
        "outline": {
            path: "img/B4_outline_small.png",
            scale: 1.05,
            floatingCycle: [6, 10],
            floatingStrength: [8, 8],
        },
        "imgs": [
            {
                path: "img/B4_back_small.png",
                scale: 1.05,
                floatingCycle: [12, 8],
                floatingStrength: [8, 8],
            }
        ],
        easeCenter: [50, 0]
    },
    {
        "mask": {
            path: "img/B3_mask_small.png",
            scale: 1.05,
            floatingCycle: [10, 6],
            floatingStrength: [8, 8],
        },
        "outline": {
            path: "img/B3_outline_small.png",
            scale: 1.05,
            floatingCycle: [10, 6],
            floatingStrength: [8, 8],
        },
        "imgs": [
            {
                path: "img/B3_back_small.png",
                scale: 1.05,
                floatingCycle: [12, 8],
                floatingStrength: [8, 8],
            }
        ],
        easeCenter: [0, 200]
    },
    {
        "mask": {
            path: "img/B2_mask_small.png",
            scale: 1.05,
            floatingCycle: [6, 10],
            floatingStrength: [8, 8],
        },
        "outline": {
            path: "img/B2_outline_small.png",
            scale: 1.05,
            floatingCycle: [6, 10],
            floatingStrength: [8, 8],
        },
        "imgs": [
            {
                path: "img/B2_back_small.png",
                scale: 1.05,
                floatingCycle: [12, 8],
                floatingStrength: [8, 8],
            }
        ],
        easeCenter: [0, 0]
    },
    {
        "mask": {
            path: "img/B1_mask_small.png",
            scale: 1.05,
            floatingCycle: [10, 6],
            floatingStrength: [8, 8],
        },
        "outline": {
            path: "img/B1_outline_small.png",
            scale: 1.05,
            floatingCycle: [10, 6],
            floatingStrength: [8, 8],
        },
        "imgs": [
            {
                path: "img/B1_back_small.png",
                scale: 1.05,
                floatingCycle: [12, 8],
                floatingStrength: [8, 8],
            }
        ],
        easeCenter: [-200, 100]
    },
]
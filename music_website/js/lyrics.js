document.addEventListener('DOMContentLoaded', function() {
    const audio = document.getElementById('audio');
    const lyricList = document.getElementById('lyric-list');

    const lyrics = [
        { time: 0, text: "（主歌1）" },
        { time: 5, text: "日记本里的标点 总在雨天晕开圆圈" },
        { time: 10, text: "用铅笔反复修改 每一句忐忑的标点" },
        { time: 15, text: "镜子练习着对话 声音轻得像蒲公英" },
        { time: 20, text: "把眼泪串成项链 却不敢对着光旋转" },
        { time: 25, text: "（预副歌）" },
        { time: 30, text: "候鸟带走褪色标签" },
        { time: 35, text: "我拾起童年的纸鸢" },
        { time: 40, text: "那些折痕里的伤疤" },
        { time: 45, text: "原来是光的入场券" },
        { time: 50, text: "（副歌）" },
        { time: 55, text: "我学会将脆弱炼成盾甲" },
        { time: 60, text: "却保留掌心的茧" },
        { time: 65, text: "不再让风吹乱心跳方向" },
        { time: 70, text: "把敏感磨成星光" },
        { time: 75, text: "（主歌2）" },
        { time: 80, text: "月光在备忘录搁浅" },
        { time: 85, text: "删除所有自我抱歉" },
        { time: 90, text: "旧毛衣褪掉的毛线" },
        { time: 95, text: "织成了新航线" },
        { time: 100, text: "（预副歌）" },
        { time: 105, text: "候鸟带回成熟季节" },
        { time: 110, text: "我解开蝴蝶结发圈" },
        { time: 115, text: "每道皱纹里的星图" },
        { time: 120, text: "都是自洽的请柬" },
        { time: 125, text: "（副歌）" },
        { time: 130, text: "我学会让情绪静默发芽" },
        { time: 135, text: "结出薄荷味夏天" },
        { time: 140, text: "暴雨在茶杯里沏成朝霞" },
        { time: 145, text: "笑涡盛着整片海" },
        { time: 150, text: "（桥段）" },
        { time: 155, text: "所有贝壳打开都藏着沙" },
        { time: 160, text: "却让珍珠有了家" },
        { time: 165, text: "那些刺痛的棱角" },
        { time: 170, text: "原是我独家的印章啊" },
        { time: 175, text: "（副歌变奏）" },
        { time: 180, text: "我终与敏感握手言和" },
        { time: 185, text: "像树拥抱风方向" },
        { time: 190, text: "候鸟衔着年少的星光" },
        { time: 195, text: "照亮自己的远方" },
        { time: 200, text: "（Outro）" },
        { time: 205, text: "当世界又掀起巨浪" },
        { time: 210, text: "我站在自己的锚点" },
        { time: 215, text: "发梢染着落日余温" },
        { time: 220, text: "哼着最初的童谣" }
    ];

    // 创建歌词列表
    lyrics.forEach((lyric, index) => {
        const li = document.createElement('li');
        li.textContent = lyric.text;
        li.setAttribute('data-time', lyric.time);
        lyricList.appendChild(li);
    });

    audio.addEventListener('timeupdate', function() {
        const currentTime = audio.currentTime;
        lyrics.forEach((lyric, index) => {
            const li = lyricList.children[index];
            if (currentTime >= lyric.time && (index === lyrics.length - 1 || currentTime < lyrics[index + 1].time)) {
                li.classList.add('highlight');
            } else {
                li.classList.remove('highlight');
            }
        });
    });
});
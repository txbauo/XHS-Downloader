// ==UserScript==
// @name           XHS-Downloader
// @namespace      xhs_downloader
// @homepage       https://github.com/JoeanAmier/XHS-Downloader
// @version        2.1.15
// @tag            小红书
// @tag            RedNote
// @description    提取小红书作品/用户链接，下载小红书无水印图文/视频作品文件
// @description:en Extract RedNote works/user links, Download watermark-free images/videos files
// @author         JoeanAmier
// @match          http*://www.xiaohongshu.com/explore*
// @match          http*://www.xiaohongshu.com/user/profile/*
// @match          http*://www.xiaohongshu.com/search_result*
// @match          http*://www.xiaohongshu.com/board/*
// @icon64         data:image/png;base64,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
// @grant          GM_getValue
// @grant          GM_setValue
// @grant          unsafeWindow
// @grant          GM_setClipboard
// @grant          GM_registerMenuCommand
// @grant          GM_unregisterMenuCommand
// @license        GNU General Public License v3.0
// @run-at         document-end
// @updateURL      https://raw.githubusercontent.com/JoeanAmier/XHS-Downloader/master/static/XHS-Downloader.js
// @downloadURL    https://raw.githubusercontent.com/JoeanAmier/XHS-Downloader/master/static/XHS-Downloader.js
// @supportURL     https://github.com/JoeanAmier/XHS-Downloader/issues
// @require        https://cdnjs.cloudflare.com/ajax/libs/jszip/3.9.1/jszip.min.js
// ==/UserScript==

(function () {
    'use strict';

    const iconBase64 = "data:image/png;base64,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";

    let config = {
        disclaimer: GM_getValue("disclaimer", false),
        packageDownloadFiles: GM_getValue("packageDownloadFiles", true),
        autoScrollSwitch: GM_getValue("autoScrollSwitch", false),
        maxScrollCount: GM_getValue("maxScrollCount", 50),
        keepMenuVisible: GM_getValue("keepMenuVisible", false),
        linkCheckboxSwitch: GM_getValue("linkCheckboxSwitch", true),
        imageCheckboxSwitch: GM_getValue("imageCheckboxSwitch", true),
        fileNameFormat: undefined,
        imageFileFormat: undefined,
        icon: {
            type: 'image', // 可选: image/svg/font
            image: {
                url: iconBase64, // 图片URL或Base64
                size: 64, // 图标尺寸
                borderRadius: '50%' // 形状（50%为圆形）
            },
        }, // 位置配置
        position: {
            bottom: '6rem', left: '1rem'
        }, // 动画配置
        animation: {
            duration: 0.25, // 动画时长(s)
            easing: 'cubic-bezier(0.4, 0, 0.2, 1)'
        }
    };

    const readme = async () => {
        const instructions = `
功能清单：
1. 下载小红书无水印作品文件
2. 提取推荐页面作品链接
3. 提取账号发布作品链接
4. 提取账号收藏作品链接
5. 提取账号专辑作品链接
6. 提取账号点赞作品链接
7. 提取搜索结果作品链接
8. 提取搜索结果用户链接

注意事项：
1. 下载小红书无水印作品文件时，脚本需要花费时间处理文件，请等待片刻，请勿多次点击下载按钮
2. 无水印作品文件较大，可能需要较长的时间处理，页面跳转可能会导致下载失败
3. 提取账号发布、收藏、点赞、专辑作品链接时，脚本可以自动滚动页面直至加载全部作品
4. 提取推荐作品链接、搜索作品、用户链接时，脚本可以自动滚动指定次数加载更多内容，默认滚动次数：50 次
5. 自动滚动页面功能默认关闭；用户可以自由开启，并修改滚动页面次数，修改后立即生效
6. 如果未开启自动滚动页面功能，用户需要手动滚动页面以便加载更多内容后再进行其他操作
7. 支持作品文件打包下载；该功能默认开启，多个文件的作品将会以压缩包格式下载

项目开源地址：https://github.com/JoeanAmier/XHS-Downloader
`
        const disclaimer_content = `
1. 使用者对本项目的使用由使用者自行决定，并自行承担风险。作者对使用者使用本项目所产生的任何损失、责任、或风险概不负责。
2. 本项目的作者提供的代码和功能是基于现有知识和技术的开发成果。作者按现有技术水平努力确保代码的正确性和安全性，但不保证代码完全没有错误或缺陷。
3. 本项目依赖的所有第三方库、插件或服务各自遵循其原始开源或商业许可，使用者需自行查阅并遵守相应协议，作者不对第三方组件的稳定性、安全性及合规性承担任何责任。
4. 使用者在使用本项目时必须严格遵守 GNU General Public License v3.0 的要求，并在适当的地方注明使用了 GNU General Public License v3.0 的代码。
5. 使用者在使用本项目的代码和功能时，必须自行研究相关法律法规，并确保其使用行为合法合规。任何因违反法律法规而导致的法律责任和风险，均由使用者自行承担。
6. 使用者不得使用本工具从事任何侵犯知识产权的行为，包括但不限于未经授权下载、传播受版权保护的内容，开发者不参与、不支持、不认可任何非法内容的获取或分发。
7. 本项目不对使用者涉及的数据收集、存储、传输等处理活动的合规性承担责任。使用者应自行遵守相关法律法规，确保处理行为合法正当；因违规操作导致的法律责任由使用者自行承担。
8. 使用者在任何情况下均不得将本项目的作者、贡献者或其他相关方与使用者的使用行为联系起来，或要求其对使用者使用本项目所产生的任何损失或损害负责。
9. 本项目的作者不会提供 XHS-Downloader 项目的付费版本，也不会提供与 XHS-Downloader 项目相关的任何商业服务。
10. 基于本项目进行的任何二次开发、修改或编译的程序与原创作者无关，原创作者不承担与二次开发行为或其结果相关的任何责任，使用者应自行对因二次开发可能带来的各种情况负全部责任。
11. 本项目不授予使用者任何专利许可；若使用本项目导致专利纠纷或侵权，使用者自行承担全部风险和责任。未经作者或权利人书面授权，不得使用本项目进行任何商业宣传、推广或再授权。
12. 作者保留随时终止向任何违反本声明的使用者提供服务的权利，并可能要求其销毁已获取的代码及衍生作品。
13. 作者保留在不另行通知的情况下更新本声明的权利，使用者持续使用即视为接受修订后的条款。

在使用本项目的代码和功能之前，请您认真考虑并接受以上免责声明。如果您对上述声明有任何疑问或不同意，请不要使用本项目的代码和功能。如果您使用了本项目的代码和功能，则视为您已完全理解并接受上述免责声明，并自愿承担使用本项目的一切风险和后果。
`

        await showTextModal({
            title: 'XHS-Downloader 脚本说明', text: instructions, mode: 'info',           // info: 仅关闭
            closeText: '关闭'
        });
        if (!config.disclaimer) {
            showTextModal({
                title: 'XHS-Downloader 免责声明', text: disclaimer_content, mode: 'confirm',        // confirm: 确认+关闭
                confirmText: '我已知晓', closeText: '关闭'
            }).then(answer => {
                GM_setValue("disclaimer", answer);
                config.disclaimer = answer;
            });
        }
    };

    if (!config.disclaimer) {
        readme();
    }

    console.info("用户接受 XHS-Downloader 免责声明", config.disclaimer)

    GM_registerMenuCommand("阅读脚本说明和免责声明", function () {
        readme();
    });

    const updatePackageDownloadFiles = (value) => {
        config.packageDownloadFiles = value;
        GM_setValue("packageDownloadFiles", config.packageDownloadFiles);
    };

    const updateAutoScrollSwitch = (value) => {
        config.autoScrollSwitch = value;
        GM_setValue("autoScrollSwitch", config.autoScrollSwitch);
    };

    const updateMaxScrollCount = (value) => {
        config.maxScrollCount = parseInt(value) || 50;
        GM_setValue("maxScrollCount", config.maxScrollCount);
    };

    const updateKeepMenuVisible = (value) => {
        config.keepMenuVisible = value;
        GM_setValue("keepMenuVisible", config.keepMenuVisible);
        if (config.keepMenuVisible) {
            showMenu();
        } else {
            hideMenu();
        }
    };

    const updateLinkCheckboxSwitch = (value) => {
        config.linkCheckboxSwitch = value;
        GM_setValue("linkCheckboxSwitch", config.linkCheckboxSwitch);
    }

    const updateImageCheckboxSwitch = (value) => {
        config.imageCheckboxSwitch = value;
        GM_setValue("imageCheckboxSwitch", config.imageCheckboxSwitch);
    }

    const updateFileNameFormat = (value) => {
        config.fileNameFormat = value;
        GM_setValue("fileNameFormat", config.fileNameFormat);
    };

    const about = () => {
        window.open('https://github.com/JoeanAmier/XHS-Downloader', '_blank');
    }

    const abnormal = (text) => {
        showTextModal({
            title: '发生异常',
            text: `${text}请向作者反馈！\n项目开源地址：https://github.com/JoeanAmier/XHS-Downloader`,
            mode: 'info',           // info: 仅关闭
            closeText: '关闭'
        });
    };

    const runTips = (text) => {
        showTextModal({
            title: '脚本提示', text: text, mode: 'info',           // info: 仅关闭
            closeText: '关闭'
        });
    }

    const generateVideoUrl = note => {
        try {
            return [`https://sns-video-bd.xhscdn.com/${note.video.consumer.originVideoKey}`];
        } catch (error) {
            console.error("Error generating video URL:", error);
            return [];
        }
    };

    const generateImageUrl = note => {
        let images = note.imageList;
        const regex = /http:\/\/sns-webpic-qc\.xhscdn.com\/\d+\/[0-9a-z]+\/(\S+)!/;
        let urls = [];
        try {
            images.forEach((item) => {
                let match = item.urlDefault.match(regex);
                if (match && match[1]) {
                    urls.push(`https://ci.xiaohongshu.com/${match[1]}?imageView2/format/png`);
                }
            })
            return urls
        } catch (error) {
            console.error("Error generating image URLs:", error);
            return [];
        }
    };

    const extractImageWebpUrls = (note, urls,) => {
        try {
            let items = []
            let {imageList} = note;
            if (urls.length !== imageList.length) {
                console.error("图片数量不一致！")
                return []
            }
            for (const [index, item] of imageList.entries()) {
                if (item.urlDefault) {
                    items.push({
                        webp: item.urlDefault, index: index + 1, url: urls[index],
                    })
                } else {
                    console.error("提取图片预览链接失败", item)
                    break
                }
            }
            return items;
        } catch (error) {
            console.error("Error occurred in generating image object:", error);
            return []
        }
    };

    const download = async (urls, note) => {
        const name = extractName();
        console.info(`文件名称 ${name}`);
        if (note.type === "video") {
            showToast("正在下载文件，请稍等...");
            await downloadVideo(urls[0], name);
        } else {
            let items = extractImageWebpUrls(note, urls);
            if (items.length === 0) {
                console.error("解析图文作品数据失败", note)
                abnormal("解析图文作品数据发生异常！")
            } else if (urls.length > 1 && config.imageCheckboxSwitch) {
                showImageSelectionModal(items, name,)
            } else {
                showToast("正在下载文件，请稍等...");
                await downloadImage(items, name);
            }
        }
    };

    const exploreDeal = async note => {
        try {
            let links;
            if (note.type === "normal") {
                links = generateImageUrl(note);
            } else {
                links = generateVideoUrl(note);
            }
            if (links.length > 0) {
                console.info("下载链接", links);
                await download(links, note);
            } else {
                abnormal("处理下载链接发生异常！")
            }
        } catch (error) {
            console.error("Error in exploreDeal function:", error);
            abnormal("下载作品文件发生异常！");
        }
    };

    const extractNoteInfo = () => {
        const regex = /\/explore\/([^?]+)/;
        const match = currentUrl.match(regex);
        if (match) {
            return unsafeWindow.__INITIAL_STATE__.note.noteDetailMap[match[1]]
        } else {
            console.error("从链接提取作品 ID 失败", currentUrl,);
        }
    };

    const extractDownloadLinks = async () => {
        if (currentUrl.includes("https://www.xiaohongshu.com/explore/")) {
            let note = extractNoteInfo();
            if (note.note) {
                await exploreDeal(note.note);
            } else {
                abnormal("读取作品数据发生异常！");
            }
        }
    };

    const triggerDownload = (name, blob) => {
        // 创建 Blob 对象的 URL
        const blobUrl = URL.createObjectURL(blob);

        // 创建一个临时链接元素
        const tempLink = document.createElement("a");
        tempLink.href = blobUrl;
        tempLink.download = name;

        // 将链接添加到 DOM 并模拟点击
        document.body.appendChild(tempLink); // 避免某些浏览器安全限制
        tempLink.click();

        // 清理临时链接元素
        document.body.removeChild(tempLink); // 从 DOM 中移除临时链接
        URL.revokeObjectURL(blobUrl); // 释放 URL

        console.info(`文件已成功下载: ${name}`);
    }

    const downloadFile = async (link, name, trigger = true, retries = 5) => {
        for (let attempt = 1; attempt <= retries; attempt++) {
            try {
                // 使用 fetch 获取文件数据
                const response = await fetch(link, {
                    "headers": {
                        "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
                        "accept-language": "zh-SG,zh;q=0.9",
                    }, "method": "GET",
                });

                // 检查响应状态码
                if (!response.ok) {
                    console.error(`下载失败，状态码: ${response.status}，URL: ${link}，尝试次数: ${attempt}`);
                    continue; // 继续下一次尝试
                }

                const blob = await response.blob();

                if (trigger) {
                    triggerDownload(name, blob);
                    return true;
                } else {
                    return blob;
                }
            } catch (error) {
                console.error(`下载失败 (${name})，错误信息:`, error, `尝试次数: ${attempt}`);
                if (attempt === retries) {
                    return false; // 如果达到最大重试次数，返回失败
                }
            }
        }
        return false; // 如果所有尝试都失败，返回失败
    };

    const downloadFiles = async (items, name,) => {
        const downloadResults = []; // 用于存储下载结果

        const downloadPromises = items.map(async (item) => {
            let fileName;
            if (item.index) {
                fileName = `${name}_${item.index}.png`; // 根据索引生成文件名
            } else {
                fileName = `${name}.png`;
            }
            const result = await downloadFile(item.url, fileName, false); // 调用单个文件下载方法
            if (result) {
                downloadResults.push({name: fileName, file: result});
                return true; // 成功
            } else {
                return false; // 失败
            }
        });

        // 等待所有下载操作完成
        const results = await Promise.all(downloadPromises);

        if (results.every(result => result === true)) {
            try {
                const zip = new JSZip();
                downloadResults.forEach((item) => {
                    zip.file(item.name, item.file);
                });

                const content = await zip.generateAsync({type: "blob", compression: "STORE"});
                triggerDownload(`${name}.zip`, content,)
                return true;
            } catch (error) {
                console.error('生成 ZIP 文件或保存失败，错误信息:', error);
                return false;
            }
        } else {
            return false;
        }
    };

    const truncateString = (str, maxLength) => {
        if (str.length > maxLength) {
            const halfLength = Math.floor(maxLength / 2) - 1; // 减去 1 留出省略号的空间
            return str.slice(0, halfLength) + '...' + str.slice(-halfLength);
        }
        return str;
    };

    const extractName = () => {
        let name = document.title.replace(/ - 小红书$/, "").replace(/[^\u4e00-\u9fa5a-zA-Z0-9 ~!@#$%&()_\-+=\[\];"',.！（）【】：“”，。《》？]/g, "");
        name = truncateString(name, 64,);
        let match = currentUrl.match(/\/([0-9a-z]+?)\?/);
        let id = match ? match[1] : null;
        return name === "" ? id : name
    };

    const downloadVideo = async (url, name) => {
        if (!await downloadFile(url, `${name}.mp4`)) {
            abnormal("下载视频作品文件发生异常！");
        }
    };

    const downloadImage = async (items, name) => {
        let success;
        if (!config.packageDownloadFiles && items.length > 1) {
            let result = [];
            for (let item of items) {
                result.push(await downloadFile(item.url, `${name}_${item.index}.png`));
            }
            success = result.every(item => item === true);
        } else if (items.length === 1) {
            success = await downloadFile(items[0].url, `${name}.png`);
        } else {
            success = await downloadFiles(items, name,);
        }
        if (!success) {
            abnormal("下载图文作品文件发生异常！");
        }
    };

    const window_scrollBy = (x, y,) => {
        window.scrollBy(x, y,);
    }

    // 随机整数生成函数
    const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

    // 判断是否需要暂停，模拟用户的停顿行为
    const shouldPause = () => Math.random() < 0.2;  // 20%几率停顿

    // 执行一次增量滚动
    const scrollOnce = () => {
        const scrollDistanceMin = 100;  // 最小滚动距离
        const scrollDistanceMax = 300; // 最大滚动距离
        const scrollDistance = getRandomInt(scrollDistanceMin, scrollDistanceMax);
        window_scrollBy(0, scrollDistance);  // 增量滚动
    };

    // 检查是否已经滚动到底部
    const isAtBottom = () => {
        const docHeight = document.documentElement.scrollHeight;
        const winHeight = window.innerHeight;
        const scrollPos = window.scrollY;

        return (docHeight - winHeight - scrollPos <= 10);  // 如果距离底部小于10px，认为滚动到底部
    };

    // 自动滚动主函数
    const scrollScreen = (callback, endless = false, scrollCount = 0,) => {
        const timeoutMin = 250;  // 最小滚动间隔
        const timeoutMax = 500;  // 最大滚动间隔

        const scrollInterval = setInterval(() => {
            if (shouldPause()) {
                // 停顿，模拟用户的休息
                clearInterval(scrollInterval);
                setTimeout(() => {
                    scrollScreen(callback, endless, scrollCount,);  // 重新启动滚动
                }, getRandomInt(timeoutMin, timeoutMax,));  // 随机停顿时间
            } else if (endless) {
                // 无限滚动至底部模式
                if (!isAtBottom()) {
                    scrollOnce();  // 执行一次滚动
                } else {
                    // 到达底部，停止滚动
                    clearInterval(scrollInterval);
                    callback();  // 调用回调函数
                }
            } else if (scrollCount < config.maxScrollCount && !isAtBottom()) {
                scrollOnce();  // 执行一次滚动
                scrollCount++;
            } else {
                // 如果到达底部或滚动次数已满，停止滚动
                clearInterval(scrollInterval);
                callback();  // 调用回调函数
            }
        }, getRandomInt(timeoutMin, timeoutMax));  // 随机滚动间隔
    };

    const scrollScreenEvent = (callback, endless = false) => {
        if (config.autoScrollSwitch) {
            scrollScreen(callback, endless,);
        } else {
            callback();
        }
    };

    const extractNotesInfo = order => {
        const notesRawValue = unsafeWindow.__INITIAL_STATE__.user.notes._rawValue[order];
        return notesRawValue.filter(item => item?.noteCard).map(item => [item.id, item.xsecToken, item.noteCard.cover.urlDefault, item.noteCard.user.nickName, item.noteCard.displayTitle,]);
    };

    const extractBoardInfo = () => {
        // 定义正则表达式来匹配 URL 中的 ID
        const regex = /\/board\/([a-z0-9]+)\?/;

        // 使用 exec 方法执行正则表达式
        const match = regex.exec(currentUrl);

        // 检查是否有匹配
        if (match) {
            // 提取 ID
            const id = match[1]; // match[0] 是整个匹配的字符串，match[1] 是第一个括号内的匹配

            const notesRawValue = unsafeWindow.__INITIAL_STATE__.board.boardFeedsMap._rawValue[id].notes;
            return notesRawValue.map(item => [item.noteId, item.xsecToken, item.cover.urlDefault, item.user.nickName, item.displayTitle,]);
        } else {
            console.error("从链接提取专辑 ID 失败", currentUrl,);
            return [];
        }
    };

    const extractFeedInfo = () => {
        const notesRawValue = unsafeWindow.__INITIAL_STATE__.feed.feeds._rawValue;
        return notesRawValue.filter(item => item?.noteCard).map(item => [item.id, item.xsecToken, item.noteCard.cover.urlDefault, item.noteCard.user.nickName, item.noteCard.displayTitle,]);
    };

    const extractSearchNotes = () => {
        const notesRawValue = unsafeWindow.__INITIAL_STATE__.search.feeds._rawValue;
        return notesRawValue.filter(item => item?.noteCard).map(item => [item.id, item.xsecToken, item.noteCard.cover.urlDefault, item.noteCard.user.nickName, item.noteCard.displayTitle,]);
    }

    const extractSearchUsers = () => {
        const notesRawValue = unsafeWindow.__INITIAL_STATE__.search.userLists._rawValue;
        return notesRawValue.map(item => item.id);
    }

    const generateNoteUrls = data => data.map(([id, token,]) => `https://www.xiaohongshu.com/discovery/item/${id}?source=webshare&xhsshare=pc_web&xsec_token=${token}&xsec_source=pc_share`).join(" ");

    const generateUserUrls = data => data.map(id => `https://www.xiaohongshu.com/user/profile/${id}`).join(" ");

    const invalidDetection = data => data.every(([first]) => Boolean(first));

    const extractAllLinks = (callback, order) => {
        scrollScreenEvent(() => {
            let data;
            if (order >= 0 && order <= 2) {
                data = extractNotesInfo(order);
                if (!invalidDetection(data)) {
                    runTips("提取作品链接失败！受平台限制，未登录状态下无法通过账号主页浏览作品详情！请登录后重试！");
                    return;
                }
            } else if (order === 3) {
                data = extractSearchNotes();
            } else if (order === 4) {
                data = extractSearchUsers();
            } else if (order === -1) {
                data = extractFeedInfo()
            } else if (order === 5) {
                data = extractBoardInfo()
            } else {
                data = []
            }
            if (data.length === 0) {
                callback("");
                return;
            }
            let urlsString;
            if (order === 4) {
                urlsString = generateUserUrls(data);
                callback(urlsString);
            } else if (config.linkCheckboxSwitch) {
                showListSelectionModal(data.map(([id, token, cover, author, title,]) => ({
                    id: id, token: token, image: cover, author: author, title: title,
                })),).then((selected) => {
                    if (selected.length > 0) {
                        urlsString = generateNoteUrls(selected.map(item => [item.id, item.token]));
                        callback(urlsString);
                    }
                });
            } else {
                urlsString = generateNoteUrls(data.map(item => item.slice(0, 2)))
                callback(urlsString);
            }
        }, [0, 1, 2, 5].includes(order))
    };

    const extractAllLinksEvent = (order = 0) => {
        extractAllLinks(urlsString => {
            if (urlsString) {
                GM_setClipboard(urlsString, "text", () => {
                    showToast('作品/用户链接已复制到剪贴板！');
                });
            } else {
                showToast("未提取到任何作品/用户链接！")
            }
        }, order);
    };

    if (typeof JSZip === 'undefined') {
        runTips("XHS-Downloader 用户脚本依赖库 JSZip 加载失败，作品文件打包下载功能无法使用，请尝试刷新网页或者向作者反馈！");
    }

    let style = document.createElement('style');
    style.textContent = `
    /* 通用 Overlay（三个弹窗共用） */
    #SettingsOverlay,
    #imageSelectionOverlay,
    #textGenericOverlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.32);
        backdrop-filter: blur(4px);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 10000;
        animation: fadeIn 0.3s;
    }

    /* Settings 容器，仅本块特有尺寸 */
    .optimized-scroll-modal {
        background: white;
        border-radius: 16px;
        width: 380px; /* 缩小窗口宽度 */
        max-width: 95vw;
        box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
        overflow: hidden;
        animation: scaleUp 0.3s;
    }

    /* 通用头部/内容/底部/按钮（三个弹窗共用） */
    .modal-header {
        padding: 1rem;
        border-bottom: 1px solid #eee;
        text-align: center;
    }
    .modal-header span {
        font-size: 1.25rem;
        font-weight: 500;
        color: #212121;
    }
    .modal-body {
        flex: 1;
        padding: 1rem;
        overflow-y: auto;
    }
    .modal-footer {
        padding: 1rem;
        border-top: 1px solid #eee;
        display: flex;
        justify-content: flex-end;
        gap: 12px;
    }
    .primary-btn {
        background: #2196F3;
        color: white;
        padding: 8px 24px;
        border-radius: 24px;
        cursor: pointer;
        transition: all 0.2s;
    }
    .secondary-btn {
        background: #f0f0f0;
        color: #666;
        padding: 8px 24px;
        border-radius: 24px;
        cursor: pointer;
        transition: all 0.2s;
    }

    /* Settings 专用的设置项样式（保持不变） */
    .setting-item {
        margin: 0.5rem 0;
        padding: 10px;
        border-radius: 8px;
        transition: background 0.2s;
    }
    .setting-item:hover { background: #f0f0f0; }
    .setting-item label {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
    }
    .setting-item label span {
        font-size: 1rem;
        font-weight: 500;
        color: #333;
    }

    .toggle-switch {
        position: relative;
        width: 40px;
        height: 20px;
    }
    .toggle-switch input { opacity: 0; width: 0; height: 0; }
    .slider {
        position: absolute;
        cursor: pointer;
        top: 0; left: 0; right: 0; bottom: 0;
        background: #ccc;
        transition: 0.4s;
        border-radius: 34px;
    }
    .slider:before {
        content: "";
        position: absolute;
        height: 16px; width: 16px;
        left: 2px; bottom: 2px;
        background: white;
        border-radius: 50%;
        transition: 0.4s;
    }
    input:checked + .slider { background: #2196F3; }
    input:checked + .slider:before { transform: translateX(20px); }

    .number-input {
        display: flex;
        align-items: center;
        border: 1px solid #ddd;
        border-radius: 8px;
        overflow: hidden;
        margin: 6px 0;
    }
    .number-input input {
        width: 60px;
        text-align: center;
        border: none;
    }
    .number-button {
        padding: 4px 8px;
        background: #f0f0f0;
        border: none;
        cursor: pointer;
        transition: all 0.2s;
    }
    .text-input {
        width: 100%;
        padding: 8px;
        border: 1px solid #ddd;
        border-radius: 4px;
        font-size: 0.9rem;
        margin-top: 8px;
        transition: border-color 0.2s;
    }
    .text-input:focus {
        outline: none;
        border-color: #2196F3;
        box-shadow: 0 0 4px rgba(33, 150, 243, 0.3);
    }
    .setting-description {
        font-size: 0.875rem;
        color: #757575;
        margin-top: 4px;
        line-height: 1.4;
        text-align: left;
    }

    /* 通用动画：统一定义一次 */
    @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
    @keyframes scaleUp { from { transform: scale(0.98); } to { transform: scale(1); } }
    @keyframes fadeOut { from { opacity: 1; } to { opacity: 0; } }
    `;
    document.head.appendChild(style);

    // 覆盖修改：文本弹窗样式
    (() => {
        if (!document.getElementById('textModalStyle')) {
            const style = document.createElement('style');
            style.id = 'textModalStyle';
            style.textContent = `
            /* 仅文本弹窗容器特有的尺寸与外观 */
            .text-generic-modal {
                background: #fff;
                border-radius: 16px;
                width: 80%;
                max-width: 700px;
                max-height: 80vh;
                box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
                overflow: hidden;
                animation: scaleUp 0.3s;
                display: flex;
                flex-direction: column;
            }
            /* 仅该弹窗使用的文本内容样式 */
            .text-content {
                white-space: pre-wrap;
                word-break: break-word;
                color: #1e272e;
                line-height: 1.6;
                font-size: 0.95rem;
                user-select: text;
            }
            `;
            document.head.appendChild(style);
        }
    })();

    /**
     * 显示文本弹窗（手动调用）
     * @param {Object} opts
     * @param {string} opts.title    标题
     * @param {string} opts.text     文本内容
     * @param {'confirm'|'info'} opts.mode 模式：confirm=确认+关闭；info=仅关闭
     * @param {string} [opts.confirmText='确认'] 确认按钮文案（仅 confirm 模式生效）
     * @param {string} [opts.closeText='关闭']   关闭按钮文案
     * @returns {Promise<boolean>} confirm 返回 true；关闭/点遮罩返回 false
     */
    function showTextModal(opts) {
        const {
            title = '提示', text = '', mode = 'info', confirmText = '确认', closeText = '关闭',
        } = opts || {};

        if (document.getElementById('textGenericOverlay')) {
            return Promise.resolve(false);
        }

        return new Promise((resolve) => {
            const overlay = document.createElement('div');
            overlay.id = 'textGenericOverlay';

            const modal = document.createElement('div');
            modal.className = 'text-generic-modal';

            const header = document.createElement('div');
            header.className = 'modal-header';
            header.innerHTML = `<span>${title}</span>`;

            const body = document.createElement('div');
            body.className = 'modal-body';
            const content = document.createElement('div');
            content.className = 'text-content';
            content.textContent = text ?? '';
            body.appendChild(content);

            const footer = document.createElement('div');
            footer.className = 'modal-footer';

            if (mode === 'confirm') {
                const okBtn = document.createElement('button');
                okBtn.className = 'primary-btn';
                okBtn.textContent = confirmText;
                okBtn.addEventListener('click', () => close(true));
                footer.appendChild(okBtn);
            }

            const closeBtn = document.createElement('button');
            closeBtn.className = 'secondary-btn';
            closeBtn.textContent = closeText;
            closeBtn.addEventListener('click', () => close(false));
            footer.appendChild(closeBtn);

            modal.appendChild(header);
            modal.appendChild(body);
            modal.appendChild(footer);
            overlay.appendChild(modal);
            document.body.appendChild(overlay);

            function close(result) {
                overlay.style.animation = 'fadeOut 0.2s';
                setTimeout(() => {
                    overlay.remove();
                    resolve(result);
                }, 200);
            }

            overlay.addEventListener('click', (e) => {
                if (e.target === overlay) close(false);
            });
        });
    }

    // 创建开关项
    const createSettingItem = ({label, description, checked}) => {
        const item = document.createElement('div');
        item.className = 'setting-item';

        item.innerHTML = `
            <label>
                <span>${label}</span>
                <div class="toggle-switch">
                    <input type="checkbox" ${checked ? 'checked' : ''}>
                    <span class="slider"></span>
                </div>
            </label>
            <div class="setting-description">${description}</div>
        `;

        return item;
    };

    // 创建数值输入项
    const createNumberInput = ({label, description, value, min, max, disabled}) => {
        const item = document.createElement('div');
        item.className = 'setting-item';

        const numberInput = document.createElement('div');
        numberInput.className = 'number-input';
        numberInput.style.opacity = disabled ? 0.6 : 1;
        numberInput.innerHTML = `
            <button class="number-button" data-action="decrement">−</button>
            <input type="number" value="${value}" min="${min}" max="${max}" ${disabled ? 'disabled' : ''}>
            <button class="number-button" data-action="increment">+</button>
        `;

        item.innerHTML = `
            <label>
                <span>${label}</span>
                ${numberInput.outerHTML}
            </label>
            <div class="setting-description">${description}</div>
        `;

        // 绑定数值按钮事件
        const container = item.querySelector('.number-input');
        container.querySelectorAll('.number-button').forEach(btn => {
            btn.addEventListener('click', () => {
                const input = container.querySelector('input');
                if (input.disabled) {
                    return;
                }

                let val = parseInt(input.value);
                if (btn.dataset.action === 'increment') {
                    val = Math.min(val + 1, max);
                } else {
                    val = Math.max(val - 1, min);
                }
                input.value = val;
            });
        });

        return item;
    };

    // 创建文本输入项
    const createTextInput = ({label, description, placeholder, value}) => {
        const item = document.createElement('div');
        item.className = 'setting-item';

        item.innerHTML = `
            <div>
                <span style="font-size: 1rem; font-weight: 500; color: #333;">${label}</span>
            </div>
            <div class="setting-description">${description}</div>
            <input type="text" class="text-input" placeholder="${placeholder}" value="${value}">
        `;

        return item;
    };

    // 关闭弹窗函数
    const closeSettingsModal = () => {
        const overlay = document.getElementById('SettingsOverlay');
        if (overlay) {
            overlay.style.animation = 'fadeOut 0.2s';
            setTimeout(() => overlay.remove(), 200);
        }
    };

    /* ==================== 弹窗逻辑 ==================== */
    const showSettings = () => {
        if (document.getElementById('SettingsOverlay')) {
            return;
        }

        // 创建覆盖层
        const overlay = document.createElement('div');
        overlay.id = 'SettingsOverlay';

        // 创建弹窗
        const modal = document.createElement('div');
        modal.className = 'optimized-scroll-modal';

        // 创建头部
        const header = document.createElement('div');
        header.className = 'modal-header';
        header.innerHTML = `
            <span>用户脚本设置</span>
        `;

        // 创建内容区域
        const body = document.createElement('div');
        body.className = 'modal-body';

        // 自动滚动开关
        const autoScroll = createSettingItem({
            label: '自动滚动页面',
            description: '启用后，页面将根据规则自动滚动以便加载更多内容',
            checked: GM_getValue("autoScrollSwitch", false),
        });

        // 文件打包开关
        const filePack = createSettingItem({
            label: '文件打包下载',
            description: '启用后，多个文件的作品将会以压缩包格式下载',
            checked: GM_getValue("packageDownloadFiles", true),
        });

        // 滚动次数设置
        const scrollCount = createNumberInput({
            label: '自动滚动次数',
            description: '自动滚动页面的次数（仅在启用自动滚动页面时可用）',
            value: GM_getValue("maxScrollCount", 50),
            min: 10,
            max: 5000,
            disabled: !GM_getValue("autoScrollSwitch", false),
        });

        const linkCheckboxSwitch = createSettingItem({
            label: '链接提取选择模式',
            description: '关闭后，提取作品链接时无需确认直接提取全部链接',
            checked: GM_getValue("linkCheckboxSwitch", true),
        });

        const imageCheckboxSwitch = createSettingItem({
            label: '图片下载选择模式',
            description: '关闭后，下载图文作品时无需确认直接下载全部文件',
            checked: GM_getValue("imageCheckboxSwitch", true),
        });

        const keepMenuVisible = createSettingItem({
            label: '菜单保持显示',
            description: '启用后，功能菜单无需鼠标悬停始终保持显示',
            checked: GM_getValue("keepMenuVisible", false),
        });

        // 名称格式设置
        // const nameFormat = createTextInput({
        //     label: '文件名称格式',
        //     description: '设置文件的名称格式（例如：{date}-{title}）。',
        //     placeholder: '{date}-{title}',
        //     value: GM_getValue("fileNameFormat",)
        // });

        // 绑定自动滚动开关控制次数输入
        autoScroll.querySelector('input').addEventListener('change', (e) => {
            scrollCount.querySelector('input').disabled = !e.target.checked;
            scrollCount.querySelector('.number-input').style.opacity = e.target.checked ? 1 : 0.6;
        });

        // 组合内容
        body.appendChild(filePack);
        body.appendChild(autoScroll);
        body.appendChild(scrollCount);
        body.appendChild(linkCheckboxSwitch);
        body.appendChild(imageCheckboxSwitch);
        body.appendChild(keepMenuVisible);
        // body.appendChild(nameFormat);

        // 创建底部按钮
        const footer = document.createElement('div');
        footer.className = 'modal-footer';
        const saveBtn = document.createElement('button');
        saveBtn.className = 'primary-btn';
        saveBtn.textContent = '保存设置';
        const cancelBtn = document.createElement('button');
        cancelBtn.className = 'secondary-btn';
        cancelBtn.textContent = '放弃修改';
        footer.appendChild(saveBtn);
        footer.appendChild(cancelBtn);

        // 组装弹窗
        modal.appendChild(header);
        modal.appendChild(body);
        modal.appendChild(footer);
        overlay.appendChild(modal);
        document.body.appendChild(overlay);

        // 保存事件
        saveBtn.addEventListener('click', () => {
            updateAutoScrollSwitch(autoScroll.querySelector('input').checked);
            updatePackageDownloadFiles(filePack.querySelector('input').checked);
            updateKeepMenuVisible(keepMenuVisible.querySelector('input').checked);
            updateLinkCheckboxSwitch(linkCheckboxSwitch.querySelector('input').checked);
            updateImageCheckboxSwitch(imageCheckboxSwitch.querySelector('input').checked);
            updateMaxScrollCount(parseInt(scrollCount.querySelector('input').value) || 50)
            // updateFileNameFormat(nameFormat.querySelector('.text-input').value.trim() || null);
            closeSettingsModal();
        });

        // 关闭事件
        cancelBtn.addEventListener('click', closeSettingsModal);
        overlay.addEventListener('click', (e) => e.target === overlay && closeSettingsModal());
    };

    /* ==================== 样式定义 ==================== */
    style = document.createElement('style');
    style.textContent = `
    /* 图片选择弹窗：仅容器尺寸与自身网格等特有样式 */
    .image-selection-modal {
        background: white;
        border-radius: 16px;
        width: 80%;
        max-width: 900px;
        max-height: 90vh;
        box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
        overflow: hidden;
        animation: scaleUp 0.3s;
        display: flex;
        flex-direction: column;
    }

    /* 图片网格等仅此弹窗拥有的样式 */
    .image-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
        gap: 12px;
    }
    .image-item {
        position: relative;
        border-radius: 8px;
        overflow: hidden;
        cursor: pointer;
        transition: all 0.2s;
        border: 2px solid transparent;
        aspect-ratio: 3 / 4;
        background:
            conic-gradient(#eee 25%, transparent 0 50%, #eee 0 75%, transparent 0)
            0 0/16px 16px #fafafa;
    }
    .image-item img {
        width: 100%;
        height: 100%;
        object-fit: contain;
        object-position: center;
        border-radius: 6px;
        display: block;
    }
    .image-item.selected { border-color: #2196F3; }

    .image-checkbox {
        position: absolute;
        top: 8px;
        right: 8px;
        width: 20px;
        height: 20px;
        opacity: 0;
    }
    .image-checkbox + label {
        position: absolute;
        top: 8px;
        right: 8px;
        width: 20px;
        height: 20px;
        background: white;
        border: 1px solid #ccc;
        border-radius: 50%;
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: all 0.2s;
    }
    .image-checkbox:checked + label {
        background: #2196F3;
        border-color: #2196F3;
    }
    .image-checkbox:checked + label::after {
        content: "✓";
        color: white;
        font-size: 12px;
    }
    `;
    document.head.appendChild(style);

    // 关闭弹窗函数
    const closeImagesModal = () => {
        const overlay = document.getElementById('imageSelectionOverlay');
        if (overlay) {
            overlay.style.animation = 'fadeOut 0.2s';
            setTimeout(() => overlay.remove(), 200);
        }
    };

    /* ==================== 弹窗逻辑 ==================== */
    const showImageSelectionModal = (imageUrls, name) => {
        if (document.getElementById('imageSelectionOverlay')) {
            return;
        }

        // 创建覆盖层
        const overlay = document.createElement('div');
        overlay.id = 'imageSelectionOverlay';

        // 创建弹窗
        const modal = document.createElement('div');
        modal.className = 'image-selection-modal';

        // 创建头部
        const header = document.createElement('div');
        header.className = 'modal-header';
        header.innerHTML = `
            <span>请选中需要下载的图片</span>
        `;

        // 创建内容区域
        const body = document.createElement('div');
        body.className = 'modal-body';

        // 创建图片网格
        const imageGrid = document.createElement('div');
        imageGrid.className = 'image-grid';

        // 动态生成图片项
        imageUrls.forEach((image) => {
            const item = document.createElement('div');
            item.className = 'image-item';

            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.className = 'image-checkbox';
            checkbox.id = `image-checkbox-${image.index}`;
            checkbox.checked = true;

            const label = document.createElement('label');
            label.htmlFor = `image-checkbox-${image.index}`;

            const img = document.createElement('img');
            img.src = image.webp;
            img.index = image.index;
            img.url = image.url;
            img.alt = `图片_${image.index}`;

            item.appendChild(checkbox);
            item.appendChild(label);
            item.appendChild(img);

            // 绑定点击事件
            item.addEventListener('click', (e) => {
                if (e.target.tagName !== 'INPUT') {
                    checkbox.checked = !checkbox.checked;
                    item.classList.toggle('selected', checkbox.checked);
                }
            });

            imageGrid.appendChild(item);
        });

        body.appendChild(imageGrid);

        // 创建底部按钮
        const footer = document.createElement('div');
        footer.className = 'modal-footer';
        // 新增：全选 / 全不选
        const selectAllBtn = document.createElement('button');
        selectAllBtn.className = 'secondary-btn';
        selectAllBtn.textContent = '全选';

        const selectNoneBtn = document.createElement('button');
        selectNoneBtn.className = 'secondary-btn';
        selectNoneBtn.textContent = '全不选';

        const confirmBtn = document.createElement('button');
        confirmBtn.className = 'primary-btn';
        confirmBtn.textContent = '开始下载';

        const closeBtn = document.createElement('button');
        closeBtn.className = 'secondary-btn';
        closeBtn.textContent = '关闭窗口';

        footer.appendChild(selectAllBtn);
        footer.appendChild(selectNoneBtn);
        footer.appendChild(confirmBtn);
        footer.appendChild(closeBtn);

        // 组装弹窗
        modal.appendChild(header);
        modal.appendChild(body);
        modal.appendChild(footer);
        overlay.appendChild(modal);
        document.body.appendChild(overlay);

        // 确认事件
        confirmBtn.addEventListener('click', async () => {
            const selectedImages = Array.from(document.querySelectorAll('.image-checkbox:checked')).map((checkbox) => {
                let item = checkbox.parentElement.querySelector('img');
                return {
                    index: item.index, url: item.url,
                }
            });
            if (selectedImages.length === 0) {
                showToast('请至少选择一张图片！');
                return;
            }
            closeImagesModal();
            showToast("正在下载文件，请稍等...");
            await downloadImage(selectedImages, name)
        });

        // 关闭事件
        closeBtn.addEventListener('click', closeImagesModal);
        overlay.addEventListener('click', (e) => e.target === overlay && closeImagesModal());

        const setAllChecked = (checked) => {
            const items = imageGrid.querySelectorAll('.image-item');
            items.forEach((item) => {
                const box = item.querySelector('.image-checkbox');
                if (!box || box.disabled) return;
                box.checked = checked;
                item.classList.toggle('selected', checked);
            });
        };

        // 全选 / 全不选
        selectAllBtn.addEventListener('click', () => setAllChecked(true));
        selectNoneBtn.addEventListener('click', () => setAllChecked(false));
    };

    (() => {
        if (!document.getElementById('listSelectionStyle')) {
            const style = document.createElement('style');
            style.id = 'listSelectionStyle';
            style.textContent = `
            /* 列表弹窗容器，仅定义差异尺寸，其他沿用通用 modal 样式 */
            .list-selection-modal {
                background: #fff;
                border-radius: 16px;
                width: 80%;
                max-width: 800px;
                max-height: 80vh;
                box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
                overflow: hidden;
                animation: scaleUp 0.3s;
                display: flex;
                flex-direction: column;
            }

            /* 列表容器 */
            .list-container {
                display: flex;
                flex-direction: column;
                gap: 10px;
            }

            /* 列表项 */
            .list-item {
                display: grid;
                grid-template-columns: 24px 64px 1fr; /* 复选框、缩略图、文本区 */
                align-items: center;
                gap: 12px;
                padding: 10px;
                border: 1px solid #eee;
                border-radius: 10px;
                transition: background 0.15s, border-color 0.15s, box-shadow 0.15s;
                cursor: pointer;
            }
            .list-item:hover {
                background: #fafafa;
                border-color: #e6e6e6;
            }
            .list-item.selected {
                border-color: #2196F3;
                box-shadow: 0 0 0 4px rgba(33,150,243,0.12) inset;
            }

            /* 复选框样式（使用原生复选框以保证可访问性与简单性） */
            .list-checkbox {
                width: 18px;
                height: 18px;
                margin: 0 0 0 2px;
                cursor: pointer;
            }

            /* 缩略图 */
            .list-thumb {
                width: 64px;
                height: 64px;
                object-fit: cover;
                border-radius: 8px;
                user-select: none;
                pointer-events: none; /* 点击行切换选择，避免图片拦截点击 */
                background: #f2f2f2;
            }

            /* 文本区 */
            .list-texts {
                display: flex;
                flex-direction: column;
                min-width: 0; /* 允许文本正确换行截断 */
            }
            .list-author {
                font-size: 0.95rem;
                color: #212121;
                font-weight: 500;
                line-height: 1.4;
                word-break: break-word;
            }
            .list-title {
                margin-top: 4px;
                font-size: 0.85rem;
                color: #757575;
                line-height: 1.4;
                word-break: break-word;
            }
        `;
            document.head.appendChild(style);
        }
    })();

    /**
     * 显示列表选择弹窗
     * @param {Array<{id:any, image:string, author:string, title:string}>} list
     * @param {Object} [options]
     * @param {string} [options.title='请选择'] 弹窗标题
     * @param {string} [options.confirmText='确认'] 确认按钮文本
     * @param {string} [options.cancelText='取消'] 取消按钮文本
     * @param {boolean} [options.prechecked=true] 是否默认勾选全部
     * @returns {Promise<Array|null>} 点击确认返回选中项数组；取消/关闭返回 null
     */
    function showListSelectionModal(list, options = {}) {
        const {
            title = '请选择需要提取的项目', confirmText = '提取链接', cancelText = '放弃', prechecked = true,
        } = options;

        if (document.getElementById('listSelectionOverlay')) return Promise.resolve(null);

        return new Promise((resolve) => {
            // 覆盖层
            const overlay = document.createElement('div');
            overlay.id = 'listSelectionOverlay';
            overlay.style.cssText = `
            position: fixed; inset: 0; background: rgba(0,0,0,0.32);
            backdrop-filter: blur(4px); display: flex; justify-content: center; align-items: center;
            z-index: 10000; animation: fadeIn 0.3s;
        `;

            // 弹窗
            const modal = document.createElement('div');
            modal.className = 'list-selection-modal';

            // 头部
            const header = document.createElement('div');
            header.className = 'modal-header';
            header.innerHTML = `<span>${title}</span>`;

            // 内容
            const body = document.createElement('div');
            body.className = 'modal-body';

            const container = document.createElement('div');
            container.className = 'list-container';

            // id -> item 映射
            const map = new Map();
            list.forEach(item => {
                const row = document.createElement('div');
                row.className = 'list-item';
                row.dataset.key = item.id;

                const checkbox = document.createElement('input');
                checkbox.type = 'checkbox';
                checkbox.className = 'list-checkbox';
                checkbox.checked = prechecked;

                const img = document.createElement('img');
                img.className = 'list-thumb';
                img.src = item.image || '';
                img.alt = 'thumb';

                const texts = document.createElement('div');
                texts.className = 'list-texts';
                const author = document.createElement('div');
                author.className = 'list-author';
                author.textContent = item.author ?? '';
                const title = document.createElement('div');
                title.className = 'list-title';
                title.textContent = item.title ?? '';
                texts.appendChild(author);
                texts.appendChild(title);

                row.appendChild(checkbox);
                row.appendChild(img);
                row.appendChild(texts);

                if (checkbox.checked) row.classList.add('selected');

                row.addEventListener('click', (e) => {
                    if ((e.target instanceof HTMLElement) && e.target.classList.contains('list-checkbox')) return;
                    checkbox.checked = !checkbox.checked;
                    row.classList.toggle('selected', checkbox.checked);
                });

                checkbox.addEventListener('change', () => {
                    row.classList.toggle('selected', checkbox.checked);
                });

                map.set(row.dataset.key, item);
                container.appendChild(row);
            });

            body.appendChild(container);

            // 底部按钮
            const footer = document.createElement('div');
            footer.className = 'modal-footer';

            // 新增：全选 / 全不选
            const selectAllBtn = document.createElement('button');
            selectAllBtn.className = 'secondary-btn';
            selectAllBtn.textContent = '全选';

            const selectNoneBtn = document.createElement('button');
            selectNoneBtn.className = 'secondary-btn';
            selectNoneBtn.textContent = '全不选';

            // 右侧操作：确认 / 取消
            const confirmBtn = document.createElement('button');
            confirmBtn.className = 'primary-btn';
            confirmBtn.textContent = confirmText;

            const cancelBtn = document.createElement('button');
            cancelBtn.className = 'secondary-btn';
            cancelBtn.textContent = cancelText;

            // 将按钮加入 footer（顺序：全选、全不选、确认、取消）
            footer.appendChild(selectAllBtn);
            footer.appendChild(selectNoneBtn);
            footer.appendChild(confirmBtn);
            footer.appendChild(cancelBtn);

            // 组装
            modal.appendChild(header);
            modal.appendChild(body);
            modal.appendChild(footer);
            overlay.appendChild(modal);
            document.body.appendChild(overlay);

            // 辅助：批量设置选择状态
            const setAllChecked = (checked) => {
                container.querySelectorAll('.list-item').forEach((row) => {
                    const box = row.querySelector('.list-checkbox');
                    if (box) {
                        box.checked = checked;
                        row.classList.toggle('selected', checked);
                    }
                });
            };

            // 关闭
            const close = (result) => {
                overlay.style.animation = 'fadeOut 0.2s';
                setTimeout(() => {
                    overlay.remove();
                    resolve(result);
                }, 200);
            };

            // 事件绑定
            selectAllBtn.addEventListener('click', () => setAllChecked(true));
            selectNoneBtn.addEventListener('click', () => setAllChecked(false));
            cancelBtn.addEventListener('click', () => close(null));
            overlay.addEventListener('click', (e) => {
                if (e.target === overlay) close(null);
            });
            confirmBtn.addEventListener('click', () => {
                const selected = [];
                container.querySelectorAll('.list-item').forEach((row) => {
                    const checkbox = row.querySelector('.list-checkbox');
                    if (checkbox && checkbox.checked) {
                        const key = row.dataset.key;
                        if (map.has(key)) selected.push(map.get(key));
                    }
                });
                close(selected);
            });
        });
    }

    // 创建主图标
    const createIcon = () => {
        const icon = document.createElement('div');
        icon.style = `
            position: fixed;
            bottom: ${config.position.bottom};
            left: ${config.position.left};
            width: ${config.icon[config.icon.type].size}px;
            height: ${config.icon[config.icon.type].size}px;
            background: white;
            border-radius: ${config.icon.image.borderRadius || '8px'};
            cursor: pointer;
            z-index: 9999;
            box-shadow: 0 3px 5px rgba(0,0,0,0.12), 0 3px 5px rgba(0,0,0,0.24);
            display: flex;
            align-items: center;
            justify-content: center;
            transition: all ${config.animation.duration}s ${config.animation.easing};
        `;

        icon.style.backgroundImage = `url(${config.icon.image.url})`;
        icon.style.backgroundSize = 'cover';

        return icon;
    };

    // 创建菜单容器
    const menu = document.createElement('div');
    menu.style = `
        position: fixed;
        bottom: calc(${config.position.bottom} + ${config.icon[config.icon.type].size}px + 1rem);
        left: ${config.position.left};
        width: 255px;
        max-width: calc(100vw - 4rem);
        background: white;
        border-radius: 16px;
        box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
        overflow: hidden;
        display: none;
        z-index: 9998;
        transform-origin: bottom left;
        transition: all ${config.animation.duration}s ${config.animation.easing};
        opacity: 0;
        transform: translateY(10px) scaleY(0.95);
        will-change: transform, opacity;
    `;

    // 创建菜单内容容器
    const menuContent = document.createElement('div');
    menuContent.style = `
        max-height: 400px;
        overflow-y: auto;
        overscroll-behavior: contain;
    `;
    menu.appendChild(menuContent);

    // 初始化样式
    style = document.createElement('style');
    style.textContent = `
        :root {
            --primary: #2196F3;
            --surface: #ffffff;
            --on-surface: #212121;
            --ripple-color: rgba(33, 150, 243, 0.15);
            --border-radius: 12px;
        }

        .menu-item {
            display: flex;
            padding: 1rem 1.5rem;
            cursor: pointer;
            position: relative;
            transition: all 0.2s ease;
            align-items: center;
        }

        .menu-item:hover {
            background: var(--ripple-color);
        }

        .menu-item:not(:last-child) {
            border-bottom: 1px solid #eee;
        }

        .icon-container {
            margin-right: 1rem;
            display: flex;
            align-items: center;
        }

        .material-icons {
            font-size: 24px;
            color: var(--primary);
        }

        .content {
            flex: 1;
        }

        .menutitle {
            font-size: 0.95rem;
            color: var(--on-surface);
            font-weight: 500;
            margin-bottom: 2px;
        }

        .subtitle {
            font-size: 0.75rem;
            color: #757575;
            line-height: 1.4;
        }

        .menu-enter {
            animation: slideIn ${config.animation.duration}s ${config.animation.easing};
        }

        .menu-exit {
            animation: slideOut ${config.animation.duration}s ${config.animation.easing};
        }

        @keyframes slideIn {
            from {
                opacity: 0;
                transform: translateY(10px) scaleY(0.95);
            }
            to {
                opacity: 1;
                transform: translateY(0) scaleY(1);
            }
        }

        @keyframes slideOut {
            from {
                opacity: 1;
                transform: translateY(0) scaleY(1);
            }
            to {
                opacity: 0;
                transform: translateY(10px) scaleY(0.95);
            }
        }

        .ripple {
            position: absolute;
            border-radius: 50%;
            transform: scale(0);
            animation: ripple 0.6s linear;
            background: var(--ripple-color);
            pointer-events: none;
        }

        @keyframes ripple {
            to {
                transform: scale(2);
                opacity: 0;
            }
        }

        /* 滚动条样式 */
        ::-webkit-scrollbar {
            width: 8px;
        }

        ::-webkit-scrollbar-track {
            background: #f1f1f1;
            border-radius: 10px;
        }

        ::-webkit-scrollbar-thumb {
            background: #c1c1c1;
            border-radius: 10px;
        }

        ::-webkit-scrollbar-thumb:hover {
            background: #a8a8a8;
        }
    `;
    document.head.appendChild(style);

    // 创建并显示一个自动消失的消息弹窗（Toast）
    function showToast(message, duration = 5000) {
        const toast = document.createElement('div');
        toast.textContent = message;

        // 基础样式（可按需调整）
        Object.assign(toast.style, {
            position: 'fixed',
            left: '50%',
            bottom: '10rem',
            transform: 'translateX(-50%)',
            maxWidth: '80vw',
            padding: '10px 16px',
            background: 'rgba(128, 128, 128, 0.6)',
            color: '#fff',
            fontSize: '16px',
            lineHeight: '1.4',
            borderRadius: '8px',
            boxShadow: '0 6px 16px rgba(0,0,0,0.25)',
            zIndex: '99999',
            opacity: '0',
            transition: 'opacity 200ms ease',
            pointerEvents: 'none',
            whiteSpace: 'pre-wrap',
            textAlign: 'center',
        });

        document.body.appendChild(toast);

        // 触发淡入
        requestAnimationFrame(() => {
            toast.style.opacity = '1';
        });

        // 指定时间后淡出并移除
        const hide = () => {
            toast.style.opacity = '0';
            const remove = () => {
                toast.removeEventListener('transitionend', remove);
                if (toast.parentNode) toast.parentNode.removeChild(toast);
            };
            toast.addEventListener('transitionend', remove);
        };

        setTimeout(hide, duration);
    }

    // 涟漪效果
    const createRipple = e => {
        const target = e.currentTarget;
        const rect = target.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;

        const ripple = document.createElement('span');
        ripple.className = 'ripple';
        ripple.style.width = ripple.style.height = `${size}px`;
        ripple.style.left = `${x}px`;
        ripple.style.top = `${y}px`;

        target.appendChild(ripple);
        setTimeout(() => ripple.remove(), 600);
    };

    // 隐藏菜单
    let hideTimeout;

    const hideMenu = () => {
        if (config.keepMenuVisible) {
            return;
        }
        hideTimeout = setTimeout(() => {
            menu.classList.remove('menu-enter');
            menu.classList.add('menu-exit');
            menu.style.opacity = 0;
            menu.style.transform = 'translateY(10px) scaleY(0.95)';

            setTimeout(() => {
                menu.style.display = 'none';
                menu.classList.remove('menu-exit');
                isMenuVisible = false;
            }, config.animation.duration * 1000);
        }, 100);
    };

    let currentUrl;

    // 动态生成菜单内容
    const updateMenuContent = () => {
        menuContent.innerHTML = '';

        // 根据URL生成不同菜单项
        currentUrl = window.location.href;
        const menuItems = [];

        if (!config.disclaimer) {
            menuItems.push({
                text: 'README', icon: ' 📄 ', action: readme, description: '阅读脚本说明和免责声明'
            },);
        } else if (currentUrl === "https://www.xiaohongshu.com/explore" || currentUrl.includes("https://www.xiaohongshu.com/explore?")) {
            menuItems.push({
                text: '提取推荐作品链接',
                icon: ' ⛓ ',
                action: () => extractAllLinksEvent(-1),
                description: '提取当前页面的作品链接至剪贴板'
            },);
        } else if (currentUrl.includes("https://www.xiaohongshu.com/explore/")) {
            menuItems.push({
                text: '下载作品文件', icon: ' 📦 ', action: extractDownloadLinks, description: '下载当前作品的无水印文件'
            },);
        } else if (currentUrl.includes("https://www.xiaohongshu.com/user/profile/")) {
            menuItems.push({
                text: '提取发布作品链接',
                icon: ' ⛓ ',
                action: () => extractAllLinksEvent(0),
                description: '提取账号发布作品链接至剪贴板'
            }, {
                text: '提取点赞作品链接',
                icon: ' ⛓ ',
                action: () => extractAllLinksEvent(2),
                description: '提取账号点赞作品链接至剪贴板'
            }, {
                text: '提取收藏作品链接',
                icon: ' ⛓ ',
                action: () => extractAllLinksEvent(1),
                description: '提取账号收藏作品链接至剪贴板'
            },);
        } else if (currentUrl.includes("https://www.xiaohongshu.com/search_result")) {
            menuItems.push({
                text: '提取作品链接', icon: ' ⛓ ', action: () => extractAllLinksEvent(3), description: '提取搜索结果的作品链接至剪贴板'
            }, {
                text: '提取用户链接', icon: ' ⛓ ', action: () => extractAllLinksEvent(4), description: '提取搜索结果的用户链接至剪贴板'
            },);
        } else if (currentUrl.includes("https://www.xiaohongshu.com/board/")) {
            menuItems.push({
                text: "提取专辑作品链接",
                icon: ' ⛓ ',
                action: () => extractAllLinksEvent(5),
                description: '提取当前专辑的作品链接至剪贴板'
            },);
        }

        // 常用功能
        menuItems.push({
            separator: true
        }, {
            text: '修改用户脚本设置', icon: ' ⚙️ ', action: showSettings, description: '修改用户脚本设置'
        }, {
            text: '访问项目开源仓库', icon: ' 📒 ', action: about, description: '访问项目 GitHub 开源仓库'
        });

        // 创建菜单项
        menuItems.forEach(item => {
            if (item.separator) {
                const divider = document.createElement('div');
                divider.style = `
                    height: 8px;
                    background: #f5f5f5;
                `;
                menuContent.appendChild(divider);
                return;
            }

            const btn = document.createElement('div');
            btn.className = 'menu-item';
            btn.innerHTML = `
                <div class="icon-container">
                    <span class="material-icons">${item.icon}</span>
                </div>
                <div class="content">
                    <div class="menutitle">${item.text}</div>
                    <div class="subtitle">${item.description}</div>
                </div>
            `;

            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                item.action();
                hideMenu();
            });

            btn.addEventListener('mousedown', createRipple);

            menuContent.appendChild(btn);
        });
    };

    // URL监测相关
    let lastUrl = window.location.href;
    let isMenuVisible = false;

    // 显示菜单
    const showMenu = () => {
        clearTimeout(hideTimeout);
        menu.style.display = 'block';
        void menu.offsetHeight; // 触发重绘
        menu.classList.add('menu-enter');
        menu.style.opacity = 1;
        menu.style.transform = 'translateY(0) scaleY(1)';
        updateMenuContent();
        isMenuVisible = true;
    };

    // 事件监听
    const icon = createIcon();
    icon.addEventListener('mouseenter', showMenu);
    icon.addEventListener('mouseleave', hideMenu);
    menu.addEventListener('mouseenter', () => clearTimeout(hideTimeout));
    menu.addEventListener('mouseleave', hideMenu);

    // URL变化监听
    const setupUrlListener = () => {
        const observeUrl = () => {
            if (window.location.href !== lastUrl) {
                lastUrl = window.location.href;
                if (isMenuVisible) {
                    updateMenuContent();
                }
            }
            requestAnimationFrame(observeUrl);
        };
        observeUrl();
    };

    // 添加到页面
    document.body.appendChild(icon);
    document.body.appendChild(menu);
    document.head.appendChild(style);
    setupUrlListener();

    if (config.keepMenuVisible) {
        showMenu();
    }
})();

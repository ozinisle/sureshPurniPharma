

function postRestApiCall(url, callback) {

    var desiredResponse;
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            if (callback) callback();

            desiredResponse = JSON.parse(this.response);
            xhttp = null;
        }
    };
    xhttp.open("GET", url, true);
    xhttp.send();


    // while (!desiredResponse) {
    //     //wait
    // }

    return desiredResponse;
}

function onPageLoad() {
    var playerContext;
    try {
        videojs('my_video_1', {
            // plugins: {
            //     loopbutton: true
            // }
        }, function () {
            // Player (this) is initialized and ready.
            try {
                playerContext = this;
                this.on("ended", function () {
                    try {
                        playNext(playerContext);
                    } catch (error) {
                        alert("videoOnEnded>>>" + error.stack);
                    }
                });
            } catch (error) {
                alert("videoPlayerOnReady>>>" + error.stack);
            }
        });

        var videoIndex = 0;
        var videoPlayerId = 'my_video_1';
        var videoPlayer = document.getElementById(videoPlayerId);
        var videoAssetInfo = null;

        var videoTag = videoPlayer.getElementsByTagName('video')[0];

        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                try {
                    videoAssetInfo = JSON.parse(this.response);

                    playVideo();

                    window.playNext = playNext;
                    window.playPrev = playPrevious;

                    xhttp = null;

                    var activeBanners = 0;

                    var lvl2Banner = document.getElementsByClassName('level-2-banner');
                    var lvl1Banner = document.getElementsByClassName('level-1-banner');
                    var banner = document.getElementsByClassName('standard-banner');

                    if (videoAssetInfo.advsToDisplay &&
                        videoAssetInfo.advsToDisplay.level2Advs &&
                        videoAssetInfo.advsToDisplay.level2Advs.display) {
                        lvl2Banner[0].style.display = 'block';

                        var paraTag = lvl2Banner[0].getElementsByTagName('p')[0];
                        var cummulativeAdvs = [];
                        var lvl2AdvContents = videoAssetInfo.advsToDisplay.level2Advs.contents;
                        for (lvl2AdvItr = 0; lvl2AdvItr < lvl2AdvContents.length; lvl2AdvItr++) {
                            cummulativeAdvs.push('<b>' + lvl2AdvContents[lvl2AdvItr].advTitle + ': ' + lvl2AdvContents[lvl2AdvItr].advText + '</b>');
                        }
                        paraTag.innerHTML = cummulativeAdvs.join('');
                        activeBanners++;

                    } else {
                        lvl2Banner[0].style.display = 'none';
                    }

                    if (videoAssetInfo.advsToDisplay &&
                        videoAssetInfo.advsToDisplay.level1Advs &&
                        videoAssetInfo.advsToDisplay.level1Advs.display) {
                        lvl1Banner[0].style.display = 'block';

                        var paraTag = lvl1Banner[0].getElementsByTagName('p')[0];
                        var cummulativeAdvs = [];
                        var lvl1AdvContents = videoAssetInfo.advsToDisplay.level1Advs.contents;
                        for (lvl1AdvItr = 0; lvl1AdvItr < lvl1AdvContents.length; lvl1AdvItr++) {
                            cummulativeAdvs.push('<b>' + lvl1AdvContents[lvl1AdvItr].advTitle + ': ' + lvl1AdvContents[lvl1AdvItr].advText + '</b>');
                        }
                        paraTag.innerHTML = cummulativeAdvs.join('');
                        activeBanners++;
                    } else {
                        lvl1Banner[0].style.display = 'none';
                    }

                    if (videoAssetInfo.advsToDisplay &&
                        videoAssetInfo.advsToDisplay.normalAdvs &&
                        videoAssetInfo.advsToDisplay.normalAdvs.display) {
                        banner[0].style.display = 'block';

                        var paraTag = banner[0].getElementsByTagName('p')[0];
                        var cummulativeAdvs = [];
                        var normalAdvContents = videoAssetInfo.advsToDisplay.normalAdvs.contents;
                        for (normalAdvItr = 0; normalAdvItr < normalAdvContents.length; normalAdvItr++) {
                            cummulativeAdvs.push('<b>' + normalAdvContents[normalAdvItr].advTitle + ': ' + normalAdvContents[normalAdvItr].advText + '</b>');
                        }
                        paraTag.innerHTML = cummulativeAdvs.join('');
                        activeBanners++;
                    } else {
                        banner[0].style.display = 'none';
                    }

                    var videoContainerHeight = 100 - (6.5 * activeBanners) + "vh";
                    document.getElementsByClassName('vedioSection')[0].style.height = videoContainerHeight;
                    document.getElementById('my_video_1').style.height = videoContainerHeight;
                } catch (error) {
                    alert("onreadystatechange>>>readyState>>>" + error.stack);
                }
            }
        };
        xhttp.open("GET", './assets/data/dashboardSource.json', true);
        xhttp.send();
    } catch (onPageLoad) {
        alert("playPrevious>>>" + error.stack);
    }

    function playVideo() {
        try {
            if (videoIndex >= videoAssetInfo.videoFilesToPlay.length) {
                videoIndex = 0;
            } else if (videoIndex < 0) {
                videoIndex = videoAssetInfo.videoFilesToPlay.length - 1;
            }
            // for (sourceTagItr = 0; sourceTagItr < sourceTags.length; sourceTagItr++) {
            //     sourceTags[sourceTagItr].setAttribute('src', videoAssetInfo.videoFilesToPlay[videoIndex].name);
            // }

            videoTag.innerHTML = "<source src='" + videoAssetInfo.videoFilesToPlay[videoIndex].name + "' type='video/mp4'>"
            videoTag.setAttribute('poster', videoAssetInfo.videoFilesToPlay[videoIndex].poster);
            videoTag.setAttribute('src', videoAssetInfo.videoFilesToPlay[videoIndex].name);

        } catch (error) {
            alert("playVideo>>>" + error.stack);
        }
    }

    function playNext(videoPlayer) {
        try {
            videoIndex++;
            playVideo();
            videoPlayer.play();
        } catch (error) {
            alert("playNext>>>" + error.stack);
        }
    }

    function playPrevious(videoPlayer) {
        try {
            videoIndex--;
            playVideo();
            videoPlayer.play();
        } catch (error) {
            alert("playPrevious>>>" + error.stack);
        }
    }


}
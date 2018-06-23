

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

function log(logText,errorFlag) {
	setTimeout(function(){
		var customDebugger=document.getElementById('customDebugger');
		
		if(errorFlag) logText="<span style='color:red'>"+logText+"</span>";
		customDebugger.innerHTML=logText+"<br>"+customDebugger.innerHTML;
	},100)

}

function onPageLoad() {
	
    try {
			window.log=log;
        videojs('my_video_1', {
            // plugins: {
            //     loopbutton: true
            // }
        }, function () {
            // Player (this) is initialized and ready.
			
            this.on("ended", function () {
				window.videoPlayerContext = window.videoPlayerContext || this;
				log('attempting to play next video...');
				setTimeout(function(){
					window.playNext(window.videoPlayerContext);
					log('success .. played next video...');	
				},100);
				
            });
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
					//log('fetching video assets...');
                    videoAssetInfo = JSON.parse(this.response);
					//log('success...');
					//log('fetching welcome video');
                    playVideo();
					//log('video tag prepared');
                    window.playNext = playNext;
                    window.playPrev = playPrevious;

                    xhttp = null;

                    var activeBanners = 0;

                    var lvl2Banner = document.getElementsByClassName('level-2-banner');
                    var lvl1Banner = document.getElementsByClassName('level-1-banner');
                    var banner = document.getElementsByClassName('standard-banner');

					//log('loading banners...');
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

					//log('loading banners ... success...');
                    var videoContainerHeight = 100 - (22.5 * activeBanners) + "vh";
                    document.getElementsByClassName('vedioSection')[0].style.height = videoContainerHeight;
                    document.getElementById('my_video_1').style.height = videoContainerHeight;
					
					document.getElementsByClassName('level-1-banner')[0].style.lineHeight = "22.5vh";
					//log('defined video player dimensions...');
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
			//log('Entering play video method....');
            if (videoIndex >= videoAssetInfo.videoFilesToPlay.length) {
                videoIndex = 0;
            } else if (videoIndex < 0) {
                videoIndex = videoAssetInfo.videoFilesToPlay.length - 1;
            }
			//log("video index="+videoIndex);
            // for (sourceTagItr = 0; sourceTagItr < sourceTags.length; sourceTagItr++) {
            //     sourceTags[sourceTagItr].setAttribute('src', videoAssetInfo.videoFilesToPlay[videoIndex].name);
            // }
			//log('tagging videoTag ...');
			videoTag.innerHTML ="";
			log("video file >>>"+videoAssetInfo.videoFilesToPlay[videoIndex].name);
			
            videoTag.innerHTML = "<source src='" + videoAssetInfo.videoFilesToPlay[videoIndex].name + "' type='video/mp4'>"
            videoTag.setAttribute('poster', videoAssetInfo.videoFilesToPlay[videoIndex].poster);
            videoTag.setAttribute('src', videoAssetInfo.videoFilesToPlay[videoIndex].name);
			//log('videoTag tagged ...');
			//log('Exiting play video method');
        } catch (error) {
            //log("playVideo>>>" + error.stack,true);
        }
    }

    function playNext(videoPlayer) {
        try {		
            //log('play next method invoked .... incrementing video index');		
            videoIndex++;
			//log('redefining video tag...');
            playVideo();
			//log('success.... Now attempting to play next video');
			//log('<span style"color:red">videoplay play>>>'+videoPlayer.play+'</span>')
			
			//videoPlayer.playWaitingForReady_ = false;
            //videoPlayer.play();
			
			setTimeout(function(){document.getElementsByClassName('vjs-big-play-button')[0].click()},100)
			
			//log('success... exiting play next method');
        } catch (error) {
            //log("playNext>>>" + error.stack,true);
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
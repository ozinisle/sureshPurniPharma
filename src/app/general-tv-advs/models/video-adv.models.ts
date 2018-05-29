import {
    VideoAdvResponseModelInterface, AdvItemInterface,
    AdvsToDisplayInterface, VideoFilesItemsToPlayInterface, AdvConfigInterface
} from './interfaces/video-adv.interfaces';

export class VideoAdvResponseModel implements VideoAdvResponseModelInterface {
    videoFilesToPlay: VideoFilesItemsToPlay[];
    advsToDisplay: AdvsToDisplay;
}

export class VideoFilesItemsToPlay implements VideoFilesItemsToPlayInterface {
    name: string;
}

export class AdvsToDisplay implements AdvsToDisplayInterface {
    normalAdvs: AdvConfig;
    level1Advs: AdvConfig;
    level2Advs: AdvConfig;
}

export class AdvConfig implements AdvConfigInterface {
    display: boolean;
    contents: AdvItem[];
}

export class AdvItem implements AdvItemInterface {
    advText: string;
    advTitle: string;
}

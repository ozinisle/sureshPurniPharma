export interface VideoAdvResponseModelInterface {
    videoFilesToPlay: VideoFilesItemsToPlayInterface[];
    advsToDisplay: AdvsToDisplayInterface;
}

export interface VideoFilesItemsToPlayInterface {
    name: string;
}

export interface AdvsToDisplayInterface {
    normalAdvs: AdvConfigInterface;
    level1Advs: AdvConfigInterface;
    level2Advs: AdvConfigInterface;
}

export interface AdvConfigInterface {
    display: boolean;
    contents: AdvItemInterface[];
}

export interface AdvItemInterface {
    advText: string;
    advTitle: string;
}

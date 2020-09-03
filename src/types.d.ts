declare module '*.css' {
    const lazyImgWrapper: string;
    const otherFileds: {
        [index: string]: string
    };
    
	export {
        lazyImgWrapper,
        otherFileds
    };
}

declare module '*.svg' {
    const value: string;
	export default value;
}

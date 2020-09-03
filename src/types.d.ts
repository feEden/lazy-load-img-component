declare module '*.css' {
    const lazyImgWrapper: any;
    const otherFileds: {
        [index: string]: any;
    };
    
	export {
        lazyImgWrapper,
        otherFileds
    };
}

declare module '*.svg' {
    const value: any;
	export default value;
}

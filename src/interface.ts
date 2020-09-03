import { CSSProperties, ImgHTMLAttributes } from 'react';

export interface LazyLoadPropsType {
    loadingImg?: string;
    src: string;
    errorImg?: string;
    style?: CSSProperties;
    imgOptions?: Omit<ImgHTMLAttributes<HTMLImageElement>, 'src'>;
    options?: IntersectionObserver;
}

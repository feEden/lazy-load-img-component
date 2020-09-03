import React, { FunctionComponent, ReactElement, useRef, useEffect, useState } from 'react';

import { LazyLoadPropsType } from './interface';
import styles from './index.module.css';
import LoadingImg from './assets/loading';

// IntersectionObserver polyfill
require('intersection-observer');

const LazyLoadImg: FunctionComponent<LazyLoadPropsType> = ({ src, loadingImg, errorImg, style, options = {}, imgOptions = {} }): ReactElement => {
    const imgRef = useRef<HTMLImageElement>(null);
    const [imgURL, setImgURL] = useState(loadingImg || LoadingImg);

    useEffect(() => {
        const imgObj = imgRef.current;

        const intersectionObserver = new IntersectionObserver((entries) => {
            entries.forEach((item) => {
                if (item.isIntersecting) {
                    setImgURL(src);

                    imgObj.onload = () => {
                        intersectionObserver.unobserve(item.target);
                    };

                    imgObj.onerror = () => {
                        setImgURL(errorImg || '');
                    };
                }
            });
        }, options);

        intersectionObserver.observe(imgObj);

        return () => {
            intersectionObserver.unobserve(imgObj);
        };
    }, [errorImg, options, src]);

    return (
        <div className={styles.lazyImgWrapper} style={style}>
            <img src={imgURL} alt="" {...imgOptions} ref={imgRef} style={{ width: '100%', height: '100%' }} />
        </div>
    );
};

export default LazyLoadImg;

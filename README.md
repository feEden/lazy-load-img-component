# lazy-load-img-component

An simple image lazy load component based on react hooks and IntersectionObserver;

## Install

```
npm install lazy-load-img-component
```

## Supports Props

```
// loading图片 可选
loadingImg?: string;
// 图片加载失败展示图片
errorImg?: string;
// 图片链接
src: string;
// 承载图片容器样式
style?: CSSProperties;
// img 标签上的所有属性 排除src
imgOptions?: Omit<ImgHTMLAttributes<HTMLImageElement>, 'src'>;
// IntersectionObserver支持的属性
options?: IntersectionObserver;
```

## Basic Usage

```
<LazyLoadImg
    src='https://img.alicdn.com/bao/uploaded/i1/2207626746794/O1CN01gMwL08203hU9QmV93_!!0-item_pic.jpg'
    style={{ width: '80px', height: '80px' }}
    imgOptions={{
        alt: '图片',
    }}
/>,
```

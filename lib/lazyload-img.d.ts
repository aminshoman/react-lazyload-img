/// <reference types="react" />
import * as React from 'react';
export interface OffsetDecorator {
    min?: number;
    max?: number;
}
export interface LazyLoadImgProps {
    src: string;
    placeholder: string;
    offset?: OffsetDecorator;
    [key: string]: any;
}
export interface LazyLoadImgState {
    visible?: boolean;
    viewport?: {
        top: number;
        height: number;
    };
}
export default class LazyLoadImg extends React.Component<LazyLoadImgProps, LazyLoadImgState> {
    static defaultProps: {
        placeholder: string;
        offset: {
            min: number;
            max: number;
        };
    };
    constructor();
    componentDidMount(): void;
    componentWillUnmount(): void;
    componentDidUpdate(prevProps: any, prevState: LazyLoadImgState): void;
    checkVisible(): void;
    handleScroll(e: any): void;
    render(): JSX.Element;
}

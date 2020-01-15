declare namespace IndexCssModule {
  export interface IIndexCss {
    distanceFromLocationSelect: string;
    distanceFromLocationStyle: string;
  }
}

declare const IndexCssModule: IndexCssModule.IIndexCss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: IndexCssModule.IIndexCss;
};

export = IndexCssModule;

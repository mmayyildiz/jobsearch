declare namespace FooterCssModule {
  export interface IFooterCss {
    footergray: string;
  }
}

declare const FooterCssModule: FooterCssModule.IFooterCss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: FooterCssModule.IFooterCss;
};

export = FooterCssModule;

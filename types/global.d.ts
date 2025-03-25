/**
 * 全局类型声明，无需引入直接在 `.vue` 、`.ts` 、`.tsx` 文件使用即可获得类型提示
 */
declare global {
  /**
   * 平台的名称、版本、运行所需的`node`和`pnpm`版本、依赖、最后构建时间的类型提示
   */
  const __APP_INFO__: {
    pkg: {
      name: string;
      version: string;
      engines: {
        node: string;
        pnpm: string;
      };
      dependencies: Recordable<string>;
      devDependencies: Recordable<string>;
    };
    lastBuildTime: string;
  };

  /**
   * Window 的类型提示
   */
  interface Window {
    // Global vue app instance
    __APP__: App<Element>;
    webkitCancelAnimationFrame: (handle: number) => void;
    mozCancelAnimationFrame: (handle: number) => void;
    oCancelAnimationFrame: (handle: number) => void;
    msCancelAnimationFrame: (handle: number) => void;
    webkitRequestAnimationFrame: (callback: FrameRequestCallback) => number;
    mozRequestAnimationFrame: (callback: FrameRequestCallback) => number;
    oRequestAnimationFrame: (callback: FrameRequestCallback) => number;
    msRequestAnimationFrame: (callback: FrameRequestCallback) => number;
  }

  /**
   * Document 的类型提示
   */
  interface Document {
    webkitFullscreenElement?: Element;
    mozFullScreenElement?: Element;
    msFullscreenElement?: Element;
  }

  /**
   * 打包压缩格式的类型声明
   */
  type ViteCompression = "none" | "gzip" | "brotli" | "both" | "gzip-clear" | "brotli-clear" | "both-clear";

  /**
   * 全局自定义环境变量的类型声明
   * @see {@link https://pure-admin.cn/pages/config/#%E5%85%B7%E4%BD%93%E9%85%8D%E7%BD%AE}
   */
  interface ViteEnv {
    VITE_PORT: number;
    VITE_PUBLIC_PATH: string;
    VITE_ROUTER_HISTORY: string;
    VITE_CDN: boolean;
    VITE_HIDE_HOME: string;
    VITE_COMPRESSION: ViteCompression;
    VITE_PROXY: [string, string][];
    VITE_OPEN: boolean;
    VITE_DROP_CONSOLE: boolean;
  }

  /**
   * 对应 `public/config.json` 文件的类型声明
   */
  interface PlatformConfigs {
    Version?: string;
    Title?: string;
    Locale?: string;
    DarkMode?: boolean;
    IsMobile?: boolean;
    Theme?: string;
    ResponsiveStorageNameSpace?: string;
  }

  /**
   * 与 `PlatformConfigs` 类型不同，这里是缓存到浏览器本地存储的类型声明
   */
  interface StorageConfigs {
    version?: string;
    title?: string;
    locale?: string;
    darkMode?: boolean;
    isMobile?: boolean;
    theme?: string;
    responsiveStorageNameSpace?: string;
  }
  /**
   * `responsive-storage` 本地响应式 `storage` 的类型声明
   */
  interface ResponsiveStorage {
    version?: string;
    title?: string;
    locale?: string;
    darkMode?: boolean;
    isMobile?: boolean;
    theme?: string;
    responsiveStorageNameSpace?: string;
  }
  interface GlobalPropertiesApi {
    $storage: ResponsiveStorage;
    $config: PlatformConfigs;
  }
}
export {};

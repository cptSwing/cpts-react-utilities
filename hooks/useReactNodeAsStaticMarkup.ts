import * as ReactDOMServer from 'react-dom/server';

type DomServerOptionsAndCustom = ReactDOMServer.ServerOptions & { renderAsImageDataUri?: boolean };

const useReactNodeAsStaticMarkup = (reactNode: React.ReactNode, options?: DomServerOptionsAndCustom): string => {
    const { renderAsImageDataUri = false, ...rest } = options ?? {};
    const encoded = encodeURIComponent(ReactDOMServer.renderToStaticMarkup(reactNode, rest));

    return renderAsImageDataUri ? `data:image/svg+xml,${encoded}` : encoded;
};

export default useReactNodeAsStaticMarkup;

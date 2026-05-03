import { createRoot } from 'react-dom/client';
import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';

// const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

createInertiaApp({
        resolve: (name) => 
            resolvePageComponent(
                `./pages/${name}.tsx`, 
                import.meta.glob('./pages/**/*.tsx')
            ) as any,

        setup({ el, App, props }) {
                if (!el) {
                    return <App {...props} />;
                }

                const root = createRoot(el);
                root.render(<App {...props} />);
            },
});
import presetUno from '@unocss/preset-uno'
import presetAttributify from '@unocss/preset-attributify'
import presetTypography from '@unocss/preset-typography'
import presetIcons from '@unocss/preset-icons'

// 
// note: add icon libraries with, e.g., 
// bun add -D @iconify-json/mdi 
// to enable usage of all 
// Material Design Icons with presetIcons.
// see https://unocss.dev/presets/icons for details

function defineConfig(config) {
    return config;
}

export default defineConfig({
    presets: [
        presetUno(),
        presetAttributify({
          prefix: 'un-',
          prefixedOnly: true
        }),
        presetTypography(),
        presetIcons({
            extraProperties: {
                'display': 'inline-block',
                'vertical-align': 'middle'
            }
        })
    ],
    cli: {
        entry: {
            patterns: [
                "**/*.cfm",
                "**/*.html",
                "**/*.cfc"
            ],
            outFile: "s/uno.css"
        }
    },
});

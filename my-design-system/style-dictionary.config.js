import StyleDictionary from 'style-dictionary'

const toSassSafe = (value) =>
  value
    .toString()
    .trim()
    .replace(/\//g, '-')
    .replace(/\./g, '-')
    .replace(/\s+/g, '-')
    .replace(/[^a-zA-Z0-9_-]/g, '-')
    .replace(/-+/g, '-')
    .replace(/^[-_]+|[-_]+$/g, '')
    .toLowerCase()

StyleDictionary.registerFormat({
  name: 'scss/token-maps',
  format: ({ dictionary }) => {
    const toSassLiteral = (raw) => {
      if (raw === null || raw === undefined) {
        return null
      }

      if (typeof raw === 'number' || typeof raw === 'boolean') {
        return String(raw)
      }

      if (typeof raw !== 'string') {
        return null
      }

      const value = raw.trim()
      if (!value) {
        return null
      }

      if (value.startsWith('$')) {
        return value
      }

      if (/^-?\d*\.?\d+(px|rem|em|%|vh|vw|deg|s|ms)$/.test(value)) {
        return value
      }

      if (/^(#|rgb\(|rgba\(|hsl\(|hsla\()/.test(value)) {
        return value
      }

      return `'${value.replace(/'/g, "\\'")}'`
    }

    const byRoot = new Map()

    for (const token of dictionary.allTokens) {
      const rootRaw = token.path[0]
      if (!rootRaw) {
        continue
      }

      const resolved = token.value ?? token.$value ?? token.original?.value ?? token.original?.$value
      const sassValue = toSassLiteral(resolved)
      if (!sassValue) {
        continue
      }

      const root = toSassSafe(rootRaw)
      const key = token.path.slice(1).map((part) => toSassSafe(part)).join('-')
      const finalKey = key || root

      if (!byRoot.has(root)) {
        byRoot.set(root, [])
      }

      byRoot.get(root).push(`  "${finalKey}": ${sassValue}`)
    }

    const mapBlocks = [...byRoot.entries()]
      .sort(([a], [b]) => a.localeCompare(b))
      .map(([root, entries]) => {
        const mapName = root === 'color' ? 'colors' : `${root}`
        return `$${mapName}: (\n${entries.join(',\n')}\n);`
      })

    return ['// Do not edit directly, this file was auto-generated.', ...mapBlocks, ''].join(
      '\n\n',
    )
  },
})

export default {
  source: ['tokens/**/*.json'],
  platforms: {
    scss: {
      transformGroup: 'scss',
      buildPath: 'src/styles/tokens/',
      files: [
        {
          destination: '_variables.scss',
          format: 'scss/variables',
          options: {
            outputReferences: false,
          },
        },
        {
          destination: '_maps.scss',
          format: 'scss/token-maps',
        },
      ],
    },
  },
}

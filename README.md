# Andy Caseres — Portafolio

Portafolio personal bilingüe (ES/EN) construido con **Astro 5** y **Tailwind CSS 4**.

- `/` — español
- `/en/` — inglés

## Desarrollo

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # genera /dist
```

## Estructura

```
src/
  i18n/content.ts         # todo el contenido (textos ES/EN, proyectos, stack, enlaces)
  components/Portfolio.astro
  layouts/Base.astro
  pages/index.astro       # ES
  pages/en/index.astro    # EN
```

Para actualizar textos, proyectos o experiencia, edita solo `src/i18n/content.ts`.

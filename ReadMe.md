# vCard Web

vCard generator based on [WebCell v3][1]

https://tech-query.me/vCard-Web/

[![CI & CD](https://github.com/TechQuery/vCard-Web/actions/workflows/main.yml/badge.svg)][2]

[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)][3]
[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)][4]

## Specification

- https://www.wikiwand.com/en/VCard
- http://microformats.org/wiki/hcard

## Technology stack

- Language: [TypeScript v5][5]
- Component engine: [WebCell v3][1]
- Component suite: [MDUI v2][6]
- PWA framework: [Workbox v7][7]
- Package bundler: [Parcel v2][8]
- CI / CD: GitHub [Actions][9] + [Pages][10]

## Development

```shell
npm i pnpm -g
pnpm i
npm start
```

## Deployment

```shell
pnpm build
```

[1]: https://web-cell.dev/
[2]: https://github.com/TechQuery/vCard-Web/actions/workflows/main.yml
[3]: https://codespaces.new/TechQuery/vCard-Web
[4]: https://gitpod.io/?autostart=true#https://github.com/TechQuery/vCard-Web
[5]: https://typescriptlang.org/
[6]: https://www.mdui.org/
[7]: https://developers.google.com/web/tools/workbox
[8]: https://parceljs.org/
[9]: https://github.com/features/actions
[10]: https://pages.github.com/

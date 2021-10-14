
This package will remove unsafe characters(`<>"#%{}|\^~[]‘`) and reserved characters(`;/?:@=&`).

## Getting Started

```bash
npm i --save filename-to-url
```

```javascript
import { filenameToUrl } from "filename-to-url";

const legalName = filenameToUrl("统计报告@李四.xls");
console.log(legalName);  // => output: 统计报告李四.xls
```

## License
[MIT](./LICENSE)

# viewBox

#### viewPort 宽高比不同

preserveAspectRatio [文档](https://developer.mozilla.org/zh-CN/docs/Web/SVG/Attribute/preserveAspectRatio)

meet: 保持宽高比并将 viewBox 缩放为适合 viewport 的大小

> meet 模式下，svg 将优先采纳压缩比较小的作为最终压缩比，meet 是默认参数

> 如果图形的宽高比和视图窗口不匹配，则某些视图将会超出 viewbox 范围（即 SVG 的 viewbox 视图将会比可视窗口小）

slice: 保持宽高比并将所有不在 viewport 中的 viewBox 剪裁掉

> slice 模式下，svg 将优先采纳压缩比较大的作为最终压缩比

> 如果 SVG 的 viewbox 宽高比与可视区域不匹配，则 viewbox 的某些区域将会延伸到视图窗口外部（即 SVG 的 viewbox 将会比可视窗口大）

```html
<d-preserveAspectRatio> </d-preserveAspectRatio>
```

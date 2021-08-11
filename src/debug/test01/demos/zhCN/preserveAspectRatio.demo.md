# viewBox

#### viewPort 宽高比不同

preserveAspectRatio [文档](https://developer.mozilla.org/zh-CN/docs/Web/SVG/Attribute/preserveAspectRatio)

meet: 保持宽高比并将viewBox缩放为适合viewport的大小

> meet 模式下，svg 将优先采纳压缩比较小的作为最终压缩比，meet 是默认参数

> 如果图形的宽高比和视图窗口不匹配，则某些视图将会超出viewbox范围（即SVG的viewbox视图将会比可视窗口小）

slice: 保持宽高比并将所有不在viewport中的viewBox剪裁掉

> slice 模式下，svg 将优先采纳压缩比较大的作为最终压缩比
 
> 如果SVG的viewbox宽高比与可视区域不匹配，则viewbox的某些区域将会延伸到视图窗口外部（即SVG的viewbox将会比可视窗口大）

```html
<n-preserveAspectRatio>
</n-preserveAspectRatio>
```

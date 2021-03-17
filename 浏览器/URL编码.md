## 为什么进行 URL 编码？
在 http 中参数的传输是 key=value 这种形式，多个参数就会用 & 符隔开。在服务端解析参数时，会用 $ 进行分割，= 分割参数值。

但是当参数中本身就带有 = 或者 $ 这种特殊字符，如果不进行处理，服务端解析就会出现**歧义**。

## 如何解决这种歧义？
**对参数进行 URL 编码**，URL 编码只是简单的在特殊字符的各个字节前加上 %，这样服务端在解析时就会把 % 后边的当成普通字节，而不会当成分隔符。

## 那些字符需要编码？
URL 使用 ASCII 进行传输，所以 URL 中不允许出现任何非 ASCII 字符，比如中文。URL 中只允许包含英文字母，数字跟 -_.~4个特殊字符，以及保留字符，保留字符是指将协议、主机、路径、端口等分割的符号（：/？#）等。当这些特殊字符出现在普通数据中需要对其进行编码。剩余字符都需要进行编码。

## 如何编码？
URL 默认 ASCII 编码，对于 ASCII 码字符，只需要在其对应的 ASCII 码字节前加 % 即可。而对于非 ASCII 码字符，需要使用 ASCII 码超集进行编码得到相应字节，然后在前面加 % 。对于 Unicode 字符则使用 utf-8进行编码，比如中文。

## Javascript中的编码
JS 提供了三对函数来对 URL 进行编码跟解码，分别是escape / unescape, encodeURI / decodeURI和encodeURIComponent / decodeURIComponent。

**不同点：**
- 安全字符不同 encodeURIComponent 编码的字节范围大于 encodeURI，都是使用 utf-8 对 Unicode 字符进行编码。而 escap 这种编码方式已被废弃。
- 使用场合不同， encodeURI 被用作对一个完整 URI 进行编码，而 encodeURIComponent 用作对一个 URI 的组件进行编码。这也是 encodeURIComponent 编码字符多于 encodeURI 的原因，组件中有自己的数据，需要对 = & 这种分隔符进行编码。而 encodeURI 只处理 URI，而 URI 本身是允许这种特殊符号的。

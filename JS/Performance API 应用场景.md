## Performance API 应用场景

- 测量页面加载时间
  - 通过 performance.timing 可以获取页面加载过程中的各个关键时间点，如 navigationStart（导航开始时间）、domLoading（开始解析 DOM 的时间）、domInteractive（DOM 准备就绪时间）、domContentLoadedEventEnd（DOMContentLoaded 事件结束时间）、loadEventEnd（页面完全加载时间）等。计算这些时间点之间的差值可以得出不同阶段的加载时间，帮助开发者了解页面加载的性能瓶颈并进行优化。
- 测量资源加载时间
  - 使用 performance.getEntriesByType('resource')可以获取所有资源（如脚本、样式表、图片等）的加载性能信息。可以分析每个资源的加载时间、发起请求的时间、响应时间等，以便优化资源的加载策略。
- perfromance.now()
  - 可以结合 fetch 或 XMLHttpRequest 与 Performance API 来测量特定网络请求的耗时。
  - 可以结合浏览器的 requestAnimationFrame 来确保动画和交互的流畅性，通过在每一帧中执行特定的操作并测量时间，可以判断页面的流畅度是否符合预期。
- Performance API 的数据可以与其他性能分析工具（如 Lighthouse、WebPageTest 等）结合使用，提供更全面的性能分析。
